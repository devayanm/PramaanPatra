import React, { useEffect, useState } from "react";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function ShowCertificate({ contract }) {
  const [data, setData] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(params.id);
        const data = await contract.getAllChildDetails(params.id);
        console.log(data);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "30rem", height: "fit-content", p: 4 }}>
        <Stack spacing={2}>
          <Typography>Issued from: {data.issuedFrom}</Typography>
          <Divider />
          <Typography>Issued to: {data.issuedTo}</Typography>
          <Divider />
          <Typography>Application Type: </Typography>
          <Divider />
        </Stack>
      </Card>
    </Box>
  );
}

export default ShowCertificate;
