import React, { useEffect, useState } from "react";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function ShowCertificate({ contract }) {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const fetchedData = await contract.getAllChildDetails(`${params.id}`);
        console.log("Hello");
        setData(fetchedData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchedData();
  }, [params]);
  return (
    <>
      {data !== null && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: "35rem", height: "fit-content", p: 4, mt: 5 }}>
            <Stack spacing={2}>
              <Typography>Issued from: {data.issuedFrom}</Typography>
              <Divider />
              <Typography>Issued to: {data.issuedTo}</Typography>
              <Divider />
            </Stack>
          </Card>
        </Box>
      )}
    </>
  );
}

export default ShowCertificate;
