import { useEffect, useRef, useState } from "react";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

function ShowCertificate({ contract }) {
  const [data, setData] = useState(null);
  const params = useParams();
  const ref = useRef();

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

  const download = async () => {
    const input = ref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("BirthCertificate.pdf");
    });
  };

  return (
    <>
      {data !== null && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mb: 8,
          }}
        >
          <Card
            component="div"
            ref={ref}
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
                width={100}
                height={100}
                component="img"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=transaction_hash=${params.txid}|from=${data.issuedFrom}|to=${data.issuedTo}`}
              />
            </Stack>
          </Card>
          <Button variant="contained" onClick={download}>
            Download
          </Button>
        </Box>
      )}
    </>
  );
}

export default ShowCertificate;
