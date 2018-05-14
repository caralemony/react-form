# React Form test

## Installation Instructions

`git clone https://github.com/caralemony/react-form`

Once inside the directory please run `npm i`
Then `cd reactform`
And finally `npm start`

To view, navigate to `http://localhost:3000/` in your browser

## Issues
When making a post request to https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test I get the error Failed to load https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test: Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.

When researching this issue I found this reason -
>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. This is set on the server-side and there is nothing you can do from the client-side to change that setting, that is up to the server/API. (MDN)
>

The first thing I tried was to change the header in the request, however this did not work. 

I then found that you can bypass CORS from the client by adding the url of certain services to the request url (it is not recommended for production though!)

## Stretch Goals

With some extra time I want to rigorously test the phone number and email validation functions with more edge cases.
