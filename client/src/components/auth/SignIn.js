import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Snackbar,
  Alert,
  Tooltip,
} from "@mui/material";
import { Visibility, VisibilityOff, Info, ArrowBack } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";

function SignIn() {
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, onSubmitProps) => signIn(values, onSubmitProps),
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid Email ID!")
        .required("Email is required!"),
      password: yup
        .string()
        .min(8, "Password must contain 8 characters!")
        .required("Password is Required!"),
    }),
  });

  const backendUrl = process.env.REACT_APP_BACKEND_URL:
  
  async function signIn(values, onSubmitProps) {
    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/auth/signin`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      login(token);
      navigate("/");
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to sign in. Please check your credentials.");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
      onSubmitProps.resetForm();
    }
  }

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <>
      <Card
        sx={{
          width: "70%",
          mt: 5,
          mb: 5,
          display: "flex",
          position: "relative",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowBack sx={{ mr: 1 }} />
          Back to Home
        </Button>
        <Box
          sx={{
            width: "50%",
            bgcolor: "cyan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            height={250}
            width={250}
            component="img"
            src="/photos/signup.jpg"
            sx={{ borderRadius: "50%" }}
          />
        </Box>
        <Box p={5} width="50%" sx={{ textAlign: "center" }}>
          <Typography variant="h5" mb={5} color="primary">
            Sign In
          </Typography>
          <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  Boolean(formik.touched.email) && Boolean(formik.errors.email)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Tooltip title="Enter your registered email address. Example: user@example.com">
                      <IconButton>
                        <Info />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                }
              />
              {Boolean(formik.touched.email) && (
                <Typography
                  variant="body2"
                  mt={1}
                  color="red"
                  alignSelf="start"
                >
                  {formik.errors.email}
                </Typography>
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                name="password"
                type={visibility ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  Boolean(formik.touched.password) &&
                  Boolean(formik.errors.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setVisibility(!visibility)}>
                      {visibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    <Tooltip title="Password should be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and symbols.">
                      <IconButton>
                        <Info />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                }
              />
              {Boolean(formik.touched.password) && (
                <Typography
                  variant="body2"
                  mt={1}
                  color="red"
                  alignSelf="start"
                >
                  {formik.errors.password}
                </Typography>
              )}
            </FormControl>
            <Typography color="red" alignSelf="end" sx={{ cursor: "pointer" }}>
              Forgot Password
            </Typography>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </Stack>
          <Typography mt={5}>
            Don't have an account?{" "}
            <Typography component="a" href="/auth/signup" color="primary">
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default SignIn;
