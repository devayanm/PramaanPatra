import React from "react";
import { Card, Typography } from "@mui/material";

function Notify() {
  return (
    <Card
      sx={{
        width: "28rem",
        mt: 5,
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">An email has been sent to your mail!</Typography>
    </Card>
  );
}

export default Notify;
