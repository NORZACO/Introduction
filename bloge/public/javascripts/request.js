const https = require('https'); // import https module
const fs = require('fs'); // import node fs module
const path = require('path'); // import node path module



// const req = https.request(options, res => {
//     let resBody = ''
//     console.log(`statusCode: ${res.statusCode}`);
//     res.setEncoding("UTF-8"); // set encoding to UTF-8

//     res.on('data', (chunk) => {
//         console.log('data: ----chunck', chunk.length);
//         resBody += chunk;
//     });

//     res.on('end', () => {
//         // writing to the html file
//         fs.writeFile('../../index.html', resBody, error => {
//             // if statement
//             if (error) {
//                 throw error
//             }
//             console.log('index.html written');
//         });
//         console.log('end');
//     })
// });

// // req.on('error', (error) => {
// //     console.error(error);
// // });
// req.end();

const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Cher',
    method: 'GET'
};


const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.setEncoding('UTF-8'); // set encoding to UTF-8

    let data = '';
    res.on('data', (chunck) => {
        console.log('data: ----chunck', chunck.length);
        data += chunck;
    });

    res.on('end', () => {
        // writing to the html file
        fs.writeFile('../../index.html', data, error => {
            // if statement
            if (error) {
                throw error
            }
            console.log('index.html written');
        });
        console.log('end');
    })


    // res.on('end', () => {
    //     const htmlElement = document.getElementById('response-data');
    //     htmlElement.innerHTML = data;
    // });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
