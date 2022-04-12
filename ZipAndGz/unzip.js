const JSZip = require("jszip");
const fs = require("fs");

// zip file
(async () => {

    // Initialise the zip file
    const zip = new JSZip();
    // Make a new text file with the text Hello World
    zip.file("Hello.txt", "Hello World");
    const images = zip.folder("images");
    images.file("meo.jpg", fs.readFileSync("meo.jpg"), { base64: true });
    const content = await zip.generateAsync({ type: "nodebuffer" });
    
    // Save the zip file
    fs.writeFileSync("example.zip", content);

})();


// doc file zip
const readline = require('readline');
async function processLineByLine() {
    const fileStream = fs.createReadStream('example.zip');
  
    const read = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    for await (const line of read) {
      
      console.log(`${line}`);
    }
  }
  
  processLineByLine();