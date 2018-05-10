const axios = require("axios");

const httpReq = formState => {
  axios
    .post(
      `https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test`,
      formState
    )
    .then(res => console.log(res));
};

httpReq("hairfan", "ilikehair", "hair@hair.com", true);

module.exports = httpReq;
