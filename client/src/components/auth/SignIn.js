import React, { useState } from "react";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
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
  async function signIn(values, onSubmitProps) {
    const formdata = new FormData();
    for (let value in values) {
      formdata.append(value, values[value]);
    }
    await axios({
      method: "post",
      url: "http://localhost:8080/auth/signin",
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.log(e));
    onSubmitProps.resetForm();
  }
  return (
    <Card sx={{ width: "70%", mt: 5, mb: 5, display: "flex" }}>
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
            />
            {Boolean(formik.touched.email) && (
              <Typography variant="body2" mt={1} color="red" alignSelf="start">
                {formik.errors.email}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Passsword</InputLabel>
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
                </InputAdornment>
              }
            />
            {Boolean(formik.touched.password) && (
              <Typography variant="body2" mt={1} color="red" alignSelf="start">
                {formik.errors.password}
              </Typography>
            )}
          </FormControl>
          <Typography color="red" alignSelf="end" sx={{ cursor: "pointer" }}>
            Forgot Password
          </Typography>
          <Button variant="contained" type="submit" fullWidth>
            Sign in
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
  );
}

export default SignIn;
