const axios = require("axios");

const httpReq = formState => {
  const userDetails = {
    Email: formState.Email,
    Phone: formState.Phone,
    Username: formState.Username,
    Subscribe: formState.Subscribe
  };
  axios
    .post(
      `https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test`,
      userDetails
    )
    .then(res => console.log(res));
};

module.exports = httpReq;
