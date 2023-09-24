import { Box } from "@mui/material";
import Homepage from "../Homepage/Homepage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <Box>
      <Navbar />
      <Homepage />
      <Footer />
    </Box>
  );
}

export default Home;
