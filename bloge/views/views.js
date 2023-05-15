const { createServer } = require('https');
const { createReadStream } = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const { type } = require('express/lib/response');
const res = require('express/lib/response');


// send File
const sendFile = (req, status, type, file) => {
    res.writeHead(status, { "Content-Type": type });
    createReadStream(file)
        .pipe(res)
};

//create Server
createServer((req, res) => {
    switch (req.url) {
        case "/":
            return sendFile(
                res,
                200,
                "text/html",
                join(__dirname, "index.html")
            )
    }
})
.listen(3000, () => {
    console.log("Listening on port 3000");
    process.exit(0);
})
