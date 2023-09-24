import moment from "moment";

export const certificate = ({
  child_name,
  child_father_name,
  child_mother_name,
  birth_date,
  birth_location,
  issuedTo,
}) => {
  const date = moment().format("L");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Birth Certificate</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        margin-top: 30px;
        width: 1220px;
        height: 880px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .outer-container {
        width: 950px;
        height: 830px;
        background-color: skyblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner-container {
        width: 920px;
        height: 800px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .certificate {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .heading {
        margin-bottom: 12px;
        font-size: 25px;
        font-family: "Times New Roman", Times, serif;
        color: rgb(0, 183, 255);
      }
      .regulation {
        color: #555;
      }
      .m {
        margin-bottom: 5px;
      }
      .desc {
        line-height: 22px;
        margin-bottom: 20px;
        font-size: 17px;
      }
      .child-details {
        font-size: 18px;
        margin-bottom: 25px;
      }
      .footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .box {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .sign {
        width: 100%;
        border-bottom: 1px solid #555;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: darkblue;
        font-style: italic;
      }
      .verify {
        font-size: 18px;
        text-decoration: none;
        color: rgb(0, 183, 255);
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="outer-container">
        <div class="inner-container">
          <div class="certificate">
            <p class="heading"><ins>BIRTH CERTIFICATE</ins></p>
            <p class="m regulation">
              (Issued under Sec. 12/ Sec. 17 of the Registration of Births and
              deaths Act, 1969)
            </p>
            <p class="desc">
              This is to certify that the following information has been taken
              from the original record of birth which is in the register for
              <b>Krishnagar Municipality</b> of <b>KOTWALI</b> P.S.
              <b>NADIA</b> District of West Bengal.
            </p>
            <div class="child-details">
              <div class="m">Name: <b>${child_name}</b></div>
              <div class="m">Name of Father: <b>${child_father_name}</b></div>
              <div class="m">Name of Mother: <b>${child_mother_name}</b></div>
              <div class="m">Date of birth: <b>${birth_date}</b></div>
              <div class="m">Place of Birth: <b>${birth_location}</b></div>
              <div class="m">Sex: <b>Male</b></div>
            </div>
            <div class="footer">
              <div class="box">
                <div class="sign"></div>
                <div>Signature</div>
              </div>
              <div class="box">
                <div class="sign">${date}</div>
                <div>Issued Date</div>
              </div>
            </div>
            <a class="verify" target="_blank" href="http://localhost:3000/certificate/${issuedTo}/birth-certificate">VERIFY</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
