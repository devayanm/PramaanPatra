import { useEffect, useState } from "react";
// import birthCertificate from "./artifacts/contracts/BirthCertificate.sol/BirthCertificate.json";
import "./App.css";
import BirthCertificate from "./components/BirthCertificate";
import ShowCertificate from "./components/ShowCertificate";
import Navbar from "./components/Navbar/Navbar.js"
import Homepage from "./components/Homepage/Homepage"
import Footer from "./components/Footer/Footer"
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom";

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
          let contractaddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
          const contract = new ethers.Contract(
            contractaddress,
            // birthCertificate.abi,
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
    <div className="App">
      <Navbar />
      <Homepage /> 
      <Routes>
        <Route
          path="/create-birth-certificate"
          element={<BirthCertificate contract={contract} />}
        />
        <Route
          path="/certificate/:id/birth-certificate"
          element={<ShowCertificate contract={contract} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
