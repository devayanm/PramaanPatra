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

function BirthCertificate() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
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
    };
    provider && loadProvider();
  }, []);

  const createBirthCertificate = async () => {
    const formdata = new FormData();
  };

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
      <Card sx={{ width: 500, p: 4 }} component="form">
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
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="father-name">Father Name</InputLabel>
            <OutlinedInput
              label="Father Name"
              id="father-name"
              name="child_father_name"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="mother-name">Mother Name</InputLabel>
            <OutlinedInput
              label="Mother Name"
              id="mother-name"
              name="child_mother_name"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="date-of-birth">Date of Birth</InputLabel>
            <OutlinedInput
              label="Date of Birth"
              id="date-of-birth"
              name="birth_date"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="issuedTo">Issuing To</InputLabel>
            <OutlinedInput label="Issuing To" id="issudeTo" name="issuedTo" />
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
