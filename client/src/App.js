import { useEffect, useState } from "react";
import birthCertificate from "./artifacts/contracts/Certificate.sol/Certificate.json";
import "./App.css";
import BirthCertificate from "./components/BirthCertificate";
import ShowCertificate from "./components/ShowCertificate";
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import SignUp from "./components/auth/SignUp";
import Notify from "./components/auth/Notify";
import Verified from "./components/auth/Verified";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
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
  return (
    <Box
      className="App"
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Routes>
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/auth/:id/verify/:token" element={<Verified />} />
        <Route
          path="/create-birth-certificate"
          element={<BirthCertificate contract={contract} />}
        />
        <Route
          path="/certificate/:id/birth-certificate"
          element={<ShowCertificate contract={contract} />}
        />
      </Routes>
    </Box>
  );
}

export default App;
