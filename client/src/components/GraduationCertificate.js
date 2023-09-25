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
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

function GraduationCertificate({ contract }) {
  const formik = useFormik({
    initialValues: {
      student_name: "",
      course_name: "",
      institute_name: "",
      course_duration: "",
      graduation_date: "",
      issuedTo: "",
    },
    onSubmit: createBirthCertificate,
  });
  const navigate = useNavigate();

  async function createBirthCertificate(values) {
    try {
      await contract.addGraduationDetails(
        formik.values.student_name,
        formik.values.course_name,
        formik.values.institute_name,
        formik.values.course_duration,
        formik.values.graduation_date,
        formik.values.issuedTo
      );
      navigate(`/certificate/${formik.values.issuedTo}/graduation-certificate`);
      const formdata = new FormData();
      for (let value in values) {
        formdata.append(value, values[value]);
      }
      await axios({
        method: "post",
        url: "http://localhost:8080/create-certificate",
        data: formdata,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() =>
          axios.get("http://localhost:8080/get-certificate", {
            responseType: "blob",
          })
        )
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          saveAs(pdfBlob, "graduation-certificate.pdf");
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        mb: 5,
      }}
    >
      <Card
        sx={{
          width: 500,
          p: 4,
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h5">Generate Graduation Certificate</Typography>
        <Divider sx={{ mb: 4 }} />
        <Stack spacing={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="student-name">Student Name</InputLabel>
            <OutlinedInput
              autoFocus
              label="Student Name"
              name="student_name"
              value={formik.values.student_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="course-name">Course Name</InputLabel>
            <OutlinedInput
              label="Course Name"
              id="course-name"
              name="course_name"
              value={formik.values.course_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="institute-name">Institute Name</InputLabel>
            <OutlinedInput
              label="Institute Name"
              id="institute-name"
              name="institute_name"
              value={formik.values.institute_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="course-duration">Course Duration</InputLabel>
            <OutlinedInput
              label="Course Duration"
              id="course-duration"
              name="course_duration"
              value={formik.values.course_duration}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="graduation-date">Graduation Date</InputLabel>
            <OutlinedInput
              label="Graduation Date"
              id="graduation-date"
              name="graduation_date"
              value={formik.values.graduation_date}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="issuedTo">Issuing To</InputLabel>
            <OutlinedInput
              label="Issuing To"
              id="issudeTo"
              name="issuedTo"
              value={formik.values.issuedTo}
              onChange={formik.handleChange}
            />
          </FormControl>
          <Button variant="contained" fullWidth type="submit">
            Create Certificate
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default GraduationCertificate;
