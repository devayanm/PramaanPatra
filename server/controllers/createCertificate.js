import certificate from '../utils/certificate.js';
import puppeteer from 'puppeteer';

const createCertificate = async (req, res) => {
  try {
    const htmlContent = certificate(req.body);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

    await browser.close();

    res.send("PDF generated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating PDF");
  }
};

const getCertificate = (req, res) => {
  res.sendFile('D:/EtherElites-SIH2023/server/birth-certificate.pdf');
};

export { createCertificate, getCertificate };
