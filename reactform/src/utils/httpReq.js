const axios = require("axios");

const httpReq = formState => {
  formState.headers = "application/x-www-form-urlencoded; charset=UTF-8";
  axios
    .post(
      `https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test`,
      formState
    )
    .then(res => console.log(res));
};

module.exports = httpReq;
