# React Form test

## Installation Instructions

`git clone https://github.com/caralemony/react-form`

Once inside the directory please run `npm i`
Then `cd reactform`
And finally `npm start`

To view, navigate to `http://localhost:3000/` in your browser

## Issues

When making a post request to `https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test` I get the error `Failed to load https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test: Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.`

I have looked into this issue and tried adding different headers to the request with no luck, however from some more research it suggests that this access has to be allowed by the server side

The next error is `Error: Network Error`!

## Stretch Goals

With some extra time I want to rigorously test the phone number and email validation functions with more edge cases.
