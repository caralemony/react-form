const axios = require("axios");

const httpReq = formState => {
  const userDetails = {
    email: formState.email,
    phone: formState.phone,
    username: formState.username,
    subscribe: formState.subscribe
  };
  console.log(userDetails);
  axios
    .post(
      `https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test`,
      userDetails
    )
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

module.exports = httpReq;
