import birthCertificate from "../artifacts/contracts/BirthCertificate.sol/BirthCertificate.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
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

function BirthCertificate() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const formik = useFormik({
    initialValues: {
      child_name: "",
      child_father_name: "",
      child_mother_name: "",
      birth_date: "",
      issuedTo: "",
    },
    onSubmit: createBirthCertificate,
  });

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      try {
        if (provider) {
          window.ethereum.on("accountsChanged", () => window.location.reload());
          window.ethereum.on("chainChanged", () => window.location.reload());
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          let contractaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contract = new ethers.Contract(
            contractaddress,
            birthCertificate.abi,
            signer
          );
          setContract(contract);
          setProvider(provider);
        } else {
          alert("Metamask is not installed in your browser :(");
        }
      } catch (error) {
        console.log(error);
      }
    };
    provider && loadProvider();
  }, []);

  async function createBirthCertificate(values) {
    try {
      await contract.addChildDetails(
        formik.values.child_name,
        formik.values.child_father_name,
        formik.values.child_mother_name,
        formik.values.birth_date,
        account,
        formik.values.issuedTo
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
          saveAs(pdfBlob, "newpdf.pdf");
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
