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

