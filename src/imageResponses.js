const fs = require('fs');

const dank = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDank = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dank);
  response.end();
};

module.exports.getDank = getDank;
