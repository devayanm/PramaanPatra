import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, Typography, CircularProgress } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function Verified() {
  const [verified, setVerified] = useState(null); // Use null for loading state
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        setVerified(null); // Set loading state
        setErrorMessage(""); // Clear any previous errors
        await axios.get(
          `http://localhost:8080/auth/${params.id}/verify/${params.token}`
        );
        setVerified(true);
      } catch (err) {
        setVerified(false);
        if (err.response) {
          // Server responded with a status other than 2xx
          if (err.response.status === 404) {
            setErrorMessage("The verification link is invalid or has expired.");
          } else if (err.response.status === 400) {
            setErrorMessage("Bad request. Please try again.");
          } else {
            setErrorMessage("An error occurred. Please try again later.");
          }
        } else if (err.request) {
          // The request was made but no response was received
          setErrorMessage("Network error. Please check your connection.");
        } else {
          // Something happened in setting up the request
          setErrorMessage("Error setting up the request.");
        }
      }
    };
    verifyEmailUrl();
  }, [params.id, params.token]); // Remove `verified` from dependencies

  if (verified === null) {
    // Show loading indicator while verifying
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "25rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Box>
          <VerifiedUserIcon color="primary" sx={{ fontSize: 100, mb: 3 }} />
        </Box>
        {verified ? (
          <>
            <Typography mb={1} variant="h4">
              Verified!
            </Typography>
            <Typography mb={3} color="#9e9e9e">
              Your Email is Verified!
            </Typography>
            <Link to="/auth/signin" style={{ textDecoration: "none" }}>
              <Button variant="contained">Sign In</Button>
            </Link>
          </>
        ) : (
          <>
            <Typography mb={1} variant="h4">
              Verification Failed
            </Typography>
            <Typography mb={3} color="red">
              {errorMessage}
            </Typography>
            <Link to="/auth/signin" style={{ textDecoration: "none" }}>
              <Button variant="contained">Back to Sign In</Button>
            </Link>
          </>
        )}
      </Card>
    </Box>
  );
}

export default Verified;
