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
  const [fatherAadhar, setFatherAadhar] = useState("");
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
    validationSchema: yup.object({
      child_name: yup.string().required("Child Name is Required!"),
      child_father_name: yup.string().required("Father Name is Required!"),
      father_aadhar_no: yup
        .string()
        .min(12, "Aadhar No is Not Valid!")
        .max(12, "Aadhar No is Not Valid!")
        // .matches(matchFatherAadhar(), "Aadhar No is not Verified!")
        .required("Aadhar No is Required!"),
      child_mother_name: yup.string().required("Mother Name is Required!"),
      mother_aadhar_no: yup
        .string()
        .min(12, "Aadhar No is Not Valid!")
        .max(12, "Aadhar No is Not Valid!")
        .required("Aadhar No is Required!"),
      birth_date: yup.string().required("Date of Birth is Required!"),
      birth_location: yup.string().required("Birth Location is Required!"),
      issuedTo: yup.string().required("This section is Required!"),
    }),
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

  async function matchFatherAadhar() {
    const formdata = new FormData();
    formdata.append("aadhar_no", fatherAadhar);
    await axios({
      method: "POST",
      url: "http://localhost:8080/aadhar",
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.aadhar_no);
        return res.data.aadhar_no;
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const verifyAadhar = async () => {
      await axios
        .get("http://localhost:8080/aadharapi")
        .then((res) => {
          res.data.map(
            (user) =>
              user.aadhar_no === formik.values.father_aadhar_no &&
              setVerified(true)
          );
        })
        .catch((err) => console.log(err));
    };
    verifyAadhar();
  }, [formik.values.father_aadhar_no]);

  useEffect(() => {
    const verifyAadhar = async () => {
      await axios
        .get("http://localhost:8080/aadharapi")
        .then((res) => {
          res.data.map(
            (user) =>
              user.aadhar_no === formik.values.mother_aadhar_no &&
              setIsVerified(true)
          );
        })
        .catch((err) => console.log(err));
    };
    verifyAadhar();
  }, [formik.values.mother_aadhar_no]);

  return (
    <Card
      sx={{
        width: 1000,
        height: 950,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        marginTop: 5,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Box sx={{ width: "50%", p: 6 }}>
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
              error={
                Boolean(formik.touched.child_name) &&
                Boolean(formik.errors.child_name)
              }
            />
            {Boolean(formik.touched.child_name) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.child_name}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="father-name">Father Name</InputLabel>
            <OutlinedInput
              label="Father Name"
              id="father-name"
              name="child_father_name"
              value={formik.values.child_father_name}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.child_father_name) &&
                Boolean(formik.errors.child_father_name)
              }
            />
            {Boolean(formik.touched.child_father_name) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.child_father_name}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="father-name">Father Aadhar No</InputLabel>
            <OutlinedInput
              label="Father Aadhar No"
              id="father-aadhar-no"
              name="father_aadhar_no"
              value={formik.values.father_aadhar_no}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.father_aadhar_no) &&
                Boolean(formik.errors.father_aadhar_no)
              }
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
            {Boolean(formik.touched.father_aadhar_no) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.father_aadhar_no}
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
              error={
                Boolean(formik.touched.child_mother_name) &&
                Boolean(formik.errors.child_mother_name)
              }
            />
            {Boolean(formik.touched.child_mother_name) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.child_mother_name}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="mother-name">Mother Aadhar No</InputLabel>
            <OutlinedInput
              label="Mother Aadhar No"
              id="mother-aadhar-no"
              name="mother_aadhar_no"
              value={formik.values.mother_aadhar_no}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.mother_aadhar_no) &&
                Boolean(formik.errors.mother_aadhar_no)
              }
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
            {Boolean(formik.touched.mother_aadhar_no) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.mother_aadhar_no}
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
              error={
                Boolean(formik.touched.birth_date) &&
                Boolean(formik.errors.birth_date)
              }
            />
            {Boolean(formik.touched.birth_date) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.birth_date}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="birth_location">Birth Place</InputLabel>
            <OutlinedInput
              label="Birth Place"
              id="birth_location"
              name="birth_location"
              value={formik.values.birth_location}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.birth_location) &&
                Boolean(formik.errors.birth_location)
              }
            />
            {Boolean(formik.touched.birth_location) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.birth_location}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="issuedTo">Issuing To</InputLabel>
            <OutlinedInput
              label="Issuing To"
              id="issudeTo"
              name="issuedTo"
              value={formik.values.issuedTo}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.issuedTo) &&
                Boolean(formik.errors.issuedTo)
              }
            />
            {Boolean(formik.touched.issuedTo) && (
              <Typography
                variant="caption"
                mt={1}
                color="red"
                alignSelf="start"
              >
                {formik.errors.issuedTo}
              </Typography>
            )}
          </FormControl>
          <Button variant="contained" fullWidth type="submit">
            Create Certificate
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "cyan",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0
        }}
      >
        <Card
          height={350}
          width={350}
          component="img"
          src="/images/Birthcertificate.png"
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

export default BirthCertificate;
