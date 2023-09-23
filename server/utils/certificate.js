export const certificate = ({
  child_name,
  child_father_name,
  child_mother_name,
  birth_date,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <title>Birth Certificate</title>
  </head>
  <body>
    <div class="container w-100 d-flex justify-content-center">
      <div
        class="card p-4 d-flex flex-column align-items-center mt-5"
        style="width: 80%"
      >
        <p class="h3 text-primary mb-3"><ins>BIRTH CERTIFICATE</ins></p>
        <small class="mb-2"
          >(Issued under Sec. 12/ Sec. 17 of the Registration of Births and
          deaths Act, 1969)</small
        >
        <p class="mb-3">
          This is to certify that the following information has been taken from
          the original record of birth which is in the register for
          <b>Krishnagar Municipality</b> of <b>KOTWALI</b> P.S.
          <b>NADIA</b> District of West Bengal.
        </p>
        <div class="row w-100 mb-5">
          <div class="col-6">
            <div class="mb-2">Name: <b>${child_name}</b></div>
            <div class="mb-2">Name of Father: <b>${child_father_name}</b></div>
            <div class="mb-2">Name of Mother: <b>${child_mother_name}</b></div>
          </div>
          <div class="col-6">
            <div class="mb-2">Date of birth: <b>${birth_date}</b></div>
            <div class="mb-2">Place of Birth: <b>Anjali Aragya Niketan</b></div>
            <div class="mb-2">Sex: <b>Male</b></div>
          </div>
        </div>
        <a href="/">Verify</a>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
      integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};
