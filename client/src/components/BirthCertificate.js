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
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";

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

function BirthCertificate({ contract }) {
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      child_name: "",
      child_father_name: "",
      father_aadhar_no: "",
      child_mother_name: "",
      mother_aadhar_no: "",
      birth_date: "",
      birth_location: "",
      issuedTo: "",
    },
    onSubmit: createBirthCertificate,
  });
  const navigate = useNavigate();

  async function createBirthCertificate(values) {
    try {
      const request = await contract.addChildDetails(
        formik.values.child_name,
        formik.values.child_father_name,
        formik.values.child_mother_name,
        formik.values.birth_date,
        formik.values.birth_location,
        formik.values.issuedTo
      );
      console.log(request);
      navigate(
        `/certificate/${formik.values.issuedTo}/birth-certificate/${request.hash}`
      );
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
      handleOpen();
    }
  }

  useEffect(() => {
    console.log("Hello");
    const verifyAadhar = async () => {
      await axios.get("http://localhost:8080/aadharapi").then((res) => {
        res.data.map((user) => {
          user.aadhar_no === formik.values.father_aadhar_no &&
            setVerified(true);
        });
      });
    };
    verifyAadhar();
  }, [formik.values.father_aadhar_no]);

  useEffect(() => {
    const verifyAadhar = async () => {
      await axios.get("http://localhost:8080/aadharapi").then((res) => {
        res.data.map(
          (user) =>
            user.aadhar_no === formik.values.mother_aadhar_no &&
            setIsVerified(true)
        );
      });
    };
    verifyAadhar();
  }, [formik.values.mother_aadhar_no]);

  return (
    <Box
      mt={5}
      mb={5}
      sx={{
        width: "100%",
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
            <InputLabel htmlFor="father-name">Father Aadhar No</InputLabel>
            <OutlinedInput
              label="Father Aadhar No"
              id="father-aadhar-no"
              name="father_aadhar_no"
              value={formik.values.father_aadhar_no}
              onChange={formik.handleChange}
            />
            {verified ? (
              <Typography variant="caption" color="green" mt={1}>
                Aadhar no verified
              </Typography>
            ) : (
              <Typography variant="caption" color="error" mt={1}>
                Aadhar is not verified!
              </Typography>
            )}
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
            <InputLabel htmlFor="mother-name">Mother Aadhar No</InputLabel>
            <OutlinedInput
              label="Mother Aadhar No"
              id="mother-aadhar-no"
              name="mother_aadhar_no"
              value={formik.values.mother_aadhar_no}
              onChange={formik.handleChange}
            />
            {isVerified ? (
              <Typography variant="caption" color="green" mt={1}>
                Aadhar no verified
              </Typography>
            ) : (
              <Typography variant="caption" color="error" mt={1}>
                Aadhar is not verified!
              </Typography>
            )}
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
            Something Went Wrong!
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default BirthCertificate;
