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

function SignUp() {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      aadharNo: "",
      employeeId: "",
      email: "",
      password: "",
    },
    onSubmit: (values, onSubmitProps) => signUp(values, onSubmitProps),
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("First name is Required!")
        .max(15, "First name can contain maximum 15 characters!"),
      lastName: yup
        .string()
        .required("Last name is Required!")
        .max(15, "Last name can contain maximum 15 characters!"),
      aadharNo: yup
        .string()
        .min(12, "Your aadhar no must contain 12 digits!")
        .max(12, "Your aadhar no must contain 12 digits!")
        .required("Aadhar no is required!"),
      employeeId: yup.string().required("Employee ID is required!"),
      email: yup
        .string()
        .email("Enter a valid Email ID!")
        .required("Email is required!"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Please create a stronger password"
        )
        .min(8, "Password must contain 8 characters!")
        .required("Password is Required!"),
    }),
  });

  async function signUp(values, onSubmitProps) {
    await axios
      .get("http://localhost:8080/aadharapi")
      .then((res) =>
        res.data.map(async (user) => {
          if (user.aadhar_no === formik.values.aadharNo) {
            const formdata = new FormData();
            for (let value in values) {
              formdata.append(value, values[value]);
            }
            await axios({
              method: "post",
              url: "http://localhost:8080/auth/signup",
              data: formdata,
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => navigate("/notify"));
            onSubmitProps.resetForm();
          } else {
            console.log("Please enter a valid aadhar no!");
          }
        })
      )
      .catch((e) => console.log(e));
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
          Sign Up
        </Typography>
        <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
          <Stack direction="row" spacing={2} width="100%">
            <FormControl fullWidth>
              <InputLabel>Firstname</InputLabel>
              <OutlinedInput
                label="Firstname"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  Boolean(formik.touched.firstName) &&
                  Boolean(formik.errors.firstName)
                }
              />
              {Boolean(formik.touched.firstName) && (
                <Typography
                  variant="body2"
                  mt={1}
                  color="red"
                  alignSelf="start"
                >
                  {formik.errors.firstName}
                </Typography>
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Lastname</InputLabel>
              <OutlinedInput
                label="Lastname"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  Boolean(formik.touched.lastName) &&
                  Boolean(formik.errors.lastName)
                }
              />
              {Boolean(formik.touched.lastName) && (
                <Typography
                  variant="body2"
                  mt={1}
                  color="red"
                  alignSelf="start"
                >
                  {formik.errors.lastName}
                </Typography>
              )}
            </FormControl>
          </Stack>
          <FormControl fullWidth>
            <InputLabel>Aadhar No</InputLabel>
            <OutlinedInput
              label="Aadhar No"
              name="aadharNo"
              value={formik.values.aadharNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                Boolean(formik.touched.aadharNo) &&
                Boolean(formik.errors.aadharNo)
              }
            />
            {Boolean(formik.touched.aadharNo) && (
              <Typography variant="body2" mt={1} color="red" alignSelf="start">
                {formik.errors.aadharNo}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Employee Id</InputLabel>
            <OutlinedInput
              label="Employee Id"
              name="employeeId"
              value={formik.values.employeeId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                Boolean(formik.touched.employeeId) &&
                Boolean(formik.errors.employeeId)
              }
            />
            {Boolean(formik.touched.employeeId) && (
              <Typography variant="body2" mt={1} color="red" alignSelf="start">
                {formik.errors.employeeId}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Email</InputLabel>
            <OutlinedInput
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
            <InputLabel>Passsword</InputLabel>
            <OutlinedInput
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
          <Button variant="contained" type="submit" fullWidth>
            Sign up
          </Button>
        </Stack>
        <Typography mt={5}>
          Already have an account?{" "}
          <Typography component="a" href="/auth/signin" color="primary">
            Sign in
          </Typography>
        </Typography>
      </Box>
    </Card>
  );
}

export default SignUp;
