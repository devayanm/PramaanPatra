import pdf from "html-pdf";
import { certificate } from "../utils/certificate.js";

export const createCertificate = (req, res) => {
  console.log(req.body);
  pdf
    .create(certificate(req.body), {})
    .toFile("birth-certificate.pdf", (err) => {
      if (err) res.send(Promise.reject());
      res.send(Promise.resolve());
    });
};

export const getCertificate = (req, res) => {
  res.sendFile(`D:/EtherElites-SIH2023/server/birth-certificate.pdf`);
};
