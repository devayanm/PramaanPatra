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

function BirthCertificate({ contract }) {
  const formik = useFormik({
    initialValues: {
      child_name: "",
      child_father_name: "",
      child_mother_name: "",
      birth_date: "",
      birth_location: "",
      issuedTo: "",
    },
    onSubmit: createBirthCertificate,
  });
  const navigate = useNavigate();

  async function createBirthCertificate(values) {
    try {
      await contract.addChildDetails(
        formik.values.child_name,
        formik.values.child_father_name,
        formik.values.child_mother_name,
        formik.values.birth_date,
        formik.values.birth_location,
        formik.values.issuedTo
      );
      navigate(`/certificate/${formik.values.issuedTo}/birth-certificate`);
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
          saveAs(pdfBlob, "birth-certificate.pdf");
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
      }}
    >
      <Card
        sx={{ width: 500, p: 4 }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h5">Create Birth Certificate</Typography>
        <Divider sx={{ mb: 4 }} />
        <Stack spacing={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="child-name">Child Name</InputLabel>

            <OutlinedInput
              autoFocus
              label="Child Name"
              id="child-name"
              name="child_name"
              value={formik.values.child_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="father-name">Father Name</InputLabel>
            <OutlinedInput
              label="Father Name"
              id="father-name"
              name="child_father_name"
              value={formik.values.child_father_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="mother-name">Mother Name</InputLabel>
            <OutlinedInput
              label="Mother Name"
              id="mother-name"
              name="child_mother_name"
              value={formik.values.child_mother_name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="date-of-birth">Date of Birth</InputLabel>
            <OutlinedInput
              label="Date of Birth"
              id="date-of-birth"
              name="birth_date"
              value={formik.values.birth_date}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="birth_location">Birth Place</InputLabel>
            <OutlinedInput
              label="Birth Place"
              id="birth_location"
              name="birth_location"
              value={formik.values.birth_location}
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

export default BirthCertificate;
