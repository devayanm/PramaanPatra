import {
  Box,
  Card,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
  Stack,
  Typography,
  Divider,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
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

function PropertyCertificate({ contract }) {
  const [open, setOpen] = useState(false);
  const [ownerVerified, setOwnerVerified] = useState(false);
  const [propertyVerified, setPropertyVerified] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      owner_name: "",
      property_address: "",
      ownership_type: "",
      survey_number: "",
      property_type: "",
      area: "",
      market_value: "",
      registration_date: "",
      document_number: "",
      sub_registration_office: "",
    },
    validationSchema: Yup.object({
      owner_name: Yup.string().required("Owner Name is required"),
      property_address: Yup.string().required("Property Address is required"),
      ownership_type: Yup.string().required("Ownership Type is required"),
      survey_number: Yup.string().required("Survey Number is required"),
      property_type: Yup.string().required("Property Type is required"),
      area: Yup.number()
        .positive("Area must be greater than 0")
        .required("Area is required"),
      market_value: Yup.number()
        .positive("Market Value must be greater than 0")
        .required("Market Value is required"),
      registration_date: Yup.date()
        .nullable()
        .required("Registration Date is required")
        .test("format", "Invalid date format", (value) => {
          return !value || dayjs(value, "DD/MM/YYYY", true).isValid();
        }),
      document_number: Yup.string().required("Document Number is required"),
      sub_registration_office: Yup.string().required(
        "Sub-Registration Office is required"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const navigate = useNavigate();

  async function createPropertyCertificate(values) {
    try {
      const request = await contract.addPropertyDetails(
        formik.values.owner_name,
        formik.values.property_address,
        formik.values.property_id,
        formik.values.area,
        formik.values.registration_date,
        formik.values.issuedTo
      );
      console.log(request);
      navigate(
        `/certificate/${formik.values.issuedTo}/property-certificate/${request.hash}`
      );
    } catch (error) {
      handleOpen();
    }
  }

  useEffect(() => {
    const verifyAadhar = async () => {
      await axios
        .get("http://localhost:8080/aadharapi")
        .then((res) => {
          res.data.map(
            (user) =>
              user.aadhar_no === formik.values.owner_aadhar_no &&
              setOwnerVerified(true)
          );
        })
        .catch((err) => console.log(err));
    };
    verifyAadhar();
  }, [formik.values.owner_aadhar_no]);

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
        <Typography variant="h5">Create Property Certificate</Typography>
        <Divider sx={{ mb: 4 }} />
        <Stack spacing={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="owner-name">Owner Name</InputLabel>
            <OutlinedInput
              label="Owner Name"
              id="owner-name"
              name="owner_name"
              value={formik.values.owner_name}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.owner_name && formik.errors.owner_name
              )}
            />
            <FormHelperText error>
              {formik.touched.owner_name && formik.errors.owner_name}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="property-address">Property Address</InputLabel>
            <OutlinedInput
              label="Property Address"
              id="property-address"
              name="property_address"
              value={formik.values.property_address}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.property_address &&
                  formik.errors.property_address
              )}
            />
            <FormHelperText error>
              {formik.touched.property_address &&
                formik.errors.property_address}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="ownership-type">Ownership Type</InputLabel>
            <Select
              label="Ownership Type"
              id="ownership-type"
              name="ownership_type"
              value={formik.values.ownership_type}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.ownership_type && formik.errors.ownership_type
              )}
            >
              <MenuItem value="Single Ownership">Single Ownership</MenuItem>
              <MenuItem value="Joint Ownership">Joint Ownership</MenuItem>
              <MenuItem value="Leasehold">Leasehold</MenuItem>
              <MenuItem value="Freehold">Freehold</MenuItem>
            </Select>
            <FormHelperText error>
              {formik.touched.ownership_type && formik.errors.ownership_type}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="survey-number">Survey Number</InputLabel>
            <OutlinedInput
              label="Survey Number"
              id="survey-number"
              name="survey_number"
              value={formik.values.survey_number}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.survey_number && formik.errors.survey_number
              )}
            />
            <FormHelperText error>
              {formik.touched.survey_number && formik.errors.survey_number}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="property-type">Property Type</InputLabel>
            <Select
              label="Property Type"
              id="property-type"
              name="property_type"
              value={formik.values.property_type}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.property_type && formik.errors.property_type
              )}
            >
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
              <MenuItem value="Agricultural">Agricultural</MenuItem>
              <MenuItem value="Industrial">Industrial</MenuItem>
            </Select>
            <FormHelperText error>
              {formik.touched.property_type && formik.errors.property_type}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="area">Area (in sq. meters)</InputLabel>
            <OutlinedInput
              label="Area"
              id="area"
              name="area"
              type="number"
              value={formik.values.area}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.area && formik.errors.area)}
            />
            <FormHelperText error>
              {formik.touched.area && formik.errors.area}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="market-value">Market Value (INR)</InputLabel>
            <OutlinedInput
              label="Market Value"
              id="market-value"
              name="market_value"
              type="number"
              value={formik.values.market_value}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.market_value && formik.errors.market_value
              )}
            />
            <FormHelperText error>
              {formik.touched.market_value && formik.errors.market_value}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Registration Date"
                value={
                  formik.values.registration_date
                    ? dayjs(formik.values.registration_date)
                    : null
                }
                onChange={(value) =>
                  formik.setFieldValue(
                    "registration_date",
                    value ? dayjs(value).format("DD/MM/YYYY") : null
                  )
                }
                format="DD/MM/YYYY"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={
                      Boolean(formik.touched.registration_date) &&
                      Boolean(formik.errors.registration_date)
                    }
                    helperText={
                      formik.touched.registration_date &&
                      formik.errors.registration_date
                        ? formik.errors.registration_date
                        : "Format: dd/mm/yyyy"
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="document-number">Document Number</InputLabel>
            <OutlinedInput
              label="Document Number"
              id="document-number"
              name="document_number"
              value={formik.values.document_number}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.document_number && formik.errors.document_number
              )}
            />
            <FormHelperText error>
              {formik.touched.document_number && formik.errors.document_number}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="sub-registration-office">
              Sub-Registration Office
            </InputLabel>
            <OutlinedInput
              label="Sub-Registration Office"
              id="sub-registration-office"
              name="sub_registration_office"
              value={formik.values.sub_registration_office}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.sub_registration_office &&
                  formik.errors.sub_registration_office
              )}
            />
            <FormHelperText error>
              {formik.touched.sub_registration_office &&
                formik.errors.sub_registration_office}
            </FormHelperText>
          </FormControl>

          <Button type="submit" variant="contained">
            Create Property Certificate
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
          p: 0,
        }}
      >
        <Card
          height={350}
          width={350}
          component="img"
          src="/images/Landdeed.png"
          sx={{ borderRadius: "50%" }}
        />
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">
            An error occurred while creating the certificate.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Card>
  );
}

export default PropertyCertificate;
