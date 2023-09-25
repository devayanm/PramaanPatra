import React, { useEffect, useState } from "react";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowCertificate({ contract }) {
  const [data, setData] = useState(null);
  const [qr, setQr] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const fetchedData = await contract.getAllChildDetails(`${params.id}`);
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: "40rem",
              p: 4,
              mt: 5,
              mb: 5,
            }}
          >
            <Typography variant="h5" color="primary" mb={4}>
              Transaction Details
            </Typography>
            <Stack spacing={2}>
              <Typography>Transaction hash: {params.txid}</Typography>
              <Divider />
              <Typography>Issued from: {data.issuedFrom}</Typography>
              <Divider />
              <Typography>Issued to: {data.issuedTo}</Typography>
              <Divider />
              <Typography>Contract Address: {contract.address}</Typography>
              <Divider />
              <Typography>
                Used Web3 Provider: {contract.provider.connection.url}
              </Typography>
              <Divider />
              <Typography>Newborn Name: {data.child_name}</Typography>
              <Divider />
              <Typography>Father Name: {data.child_father_name}</Typography>
              <Divider />
              <Typography>Mother Name: {data.child_mother_name}</Typography>
              <Divider />
              <Typography>Date of Birth: {data.birth_date}</Typography>
              <Divider />
              <Typography>Place of Birth: {data.birth_location}</Typography>
              <Divider />
              <Box
                component="img"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${params.txid}`}
              />
            </Stack>
          </Card>
        </Box>
      )}
    </>
  );
}

export default ShowCertificate;
