require('dotenv').config();
const DateLib = require('./date-lib');

const { createReadStream } = require('fs');
const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const channels = process.env.CHANNELS;

// Title of file
const title = DateLib.yearAndMonthAndDay();
// A file name is required for the upload
const filename = 'sample.txt';

(async () => {
  // Just use the `file` argument as the documentation suggests
  // See: https://api.slack.com/methods/files.upload
  const result = await web.files.upload({
    title,
    filename,
    // You can use a ReadableStream or a Buffer for the file option
    // This file is located in the current directory (`process.pwd()`), so the relative path resolves
    file: createReadStream(`./sample.txt`),
    channels,
  })

  // `res` contains information about the uploaded file
  console.log('File uploaded: ', result.file.id);
})();
