import {
  Box,
  Card,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Stack,
  Typography,
  Divider,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ArrowBack } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DegreeCertificate({ contract }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      student_name: "",
      student_id: "",
      degree_type: "",
      university_name: "",
      year_of_passing: "",
      issuedTo: "",
    },
    onSubmit: createDegreeCertificate,
    validationSchema: yup.object({
      student_name: yup.string().required("Student Name is Required!"),
      student_id: yup.string().required("Student ID is Required!"),
      degree_type: yup.string().required("Degree Type is Required!"),
      university_name: yup.string().required("University Name is Required!"),
      year_of_passing: yup
        .string()
        .matches(/^\d{4}$/, "Enter a valid year!")
        .required("Year of Passing is Required!"),
      issuedTo: yup.string().required("Issuing To field is Required!"),
    }),
  });

  const navigate = useNavigate();

  async function createDegreeCertificate(values) {
    try {
      const request = await contract.addDegreeDetails(
        formik.values.student_name,
        formik.values.student_id,
        formik.values.degree_type,
        formik.values.university_name,
        formik.values.year_of_passing,
        formik.values.issuedTo
      );
      console.log(request);
      navigate(
        `/certificate/${formik.values.issuedTo}/degree-certificate/${request.hash}`
      );
    } catch (error) {
      handleOpen();
    }
  }

  return (
    <Card
      sx={{
        width: 1000,
        height: 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        marginTop: 5,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          top: 40,
          left: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowBack sx={{ mr: 1 }} />
        Home
      </Button>
      <Box sx={{ width: "50%", p: 6 }}>
        <Typography variant="h5">Create Degree Certificate</Typography>
        <Divider sx={{ mb: 4 }} />
        <Stack spacing={3} sx={{ width: "100%" }}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="student-name">Student Name</InputLabel>
            <OutlinedInput
              label="Student Name"
              id="student-name"
              name="student_name"
              value={formik.values.student_name}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.student_name) &&
                Boolean(formik.errors.student_name)
              }
            />
            {formik.touched.student_name && formik.errors.student_name && (
              <Typography variant="caption" color="red">
                {formik.errors.student_name}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="student-id">Student ID</InputLabel>
            <OutlinedInput
              label="Student ID"
              id="student-id"
              name="student_id"
              value={formik.values.student_id}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.student_id) &&
                Boolean(formik.errors.student_id)
              }
            />
            {formik.touched.student_id && formik.errors.student_id && (
              <Typography variant="caption" color="red">
                {formik.errors.student_id}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="degree-type">Degree Type</InputLabel>
            <Select
              label="Degree Type"
              id="degree-type"
              name="degree_type"
              value={formik.values.degree_type}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.degree_type) &&
                Boolean(formik.errors.degree_type)
              }
            >
              <MenuItem value="Bachelor's">Bachelor's</MenuItem>
              <MenuItem value="Master's">Master's</MenuItem>
              <MenuItem value="Ph.D.">Ph.D.</MenuItem>
            </Select>
            {formik.touched.degree_type && formik.errors.degree_type && (
              <Typography variant="caption" color="red">
                {formik.errors.degree_type}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="university-name">University Name</InputLabel>
            <OutlinedInput
              label="University Name"
              id="university-name"
              name="university_name"
              value={formik.values.university_name}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.university_name) &&
                Boolean(formik.errors.university_name)
              }
            />
            {formik.touched.university_name &&
              formik.errors.university_name && (
                <Typography variant="caption" color="red">
                  {formik.errors.university_name}
                </Typography>
              )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="year-of-passing">Year of Passing</InputLabel>
            <OutlinedInput
              label="Year of Passing"
              id="year-of-passing"
              name="year_of_passing"
              value={formik.values.year_of_passing}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.year_of_passing) &&
                Boolean(formik.errors.year_of_passing)
              }
            />
            {formik.touched.year_of_passing &&
              formik.errors.year_of_passing && (
                <Typography variant="caption" color="red">
                  {formik.errors.year_of_passing}
                </Typography>
              )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="registration-number">
              Registration Number
            </InputLabel>
            <OutlinedInput
              label="Registration Number"
              id="registration-number"
              name="registration_number"
              value={formik.values.registration_number}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.registration_number) &&
                Boolean(formik.errors.registration_number)
              }
            />
            {formik.touched.registration_number &&
              formik.errors.registration_number && (
                <Typography variant="caption" color="red">
                  {formik.errors.registration_number}
                </Typography>
              )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="specialization">Specialization</InputLabel>
            <OutlinedInput
              label="Specialization"
              id="specialization"
              name="specialization"
              value={formik.values.specialization}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.specialization) &&
                Boolean(formik.errors.specialization)
              }
            />
            {formik.touched.specialization && formik.errors.specialization && (
              <Typography variant="caption" color="red">
                {formik.errors.specialization}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={formik.values.date_of_birth}
                onChange={(value) =>
                  formik.setFieldValue("date_of_birth", value)
                }
                format="DD/MM/YYYY"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={
                      Boolean(formik.touched.date_of_birth) &&
                      Boolean(formik.errors.date_of_birth)
                    }
                    helperText={
                      formik.touched.date_of_birth &&
                      formik.errors.date_of_birth
                        ? formik.errors.date_of_birth
                        : "Format: dd/mm/yyyy"
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="issuedTo">Issuing To</InputLabel>
            <OutlinedInput
              label="Issuing To"
              id="issuedTo"
              name="issuedTo"
              value={formik.values.issuedTo}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.issuedTo) &&
                Boolean(formik.errors.issuedTo)
              }
            />
            {formik.touched.issuedTo && formik.errors.issuedTo && (
              <Typography variant="caption" color="red">
                {formik.errors.issuedTo}
              </Typography>
            )}
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: "10px 25px",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
        }}
      >
        <Card
          height={350}
          width={350}
          component="img"
          src="/images/DegreeCertificate.png"
          sx={{ borderRadius: "50%" }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="red"
            component="h2"
          >
            ERROR
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Not Authorized!
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}

export default DegreeCertificate;
