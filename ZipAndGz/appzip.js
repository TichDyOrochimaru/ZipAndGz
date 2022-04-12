// Gọi ra fs để làm việc với file 
// Gọi ra zlib để có thể compress file 
var fs = require('fs');
var zlib = require('zlib');

//Stream k đọc theo file mà từng buffer 1

// Đọc file 
var inStream = fs.createReadStream('content.txt');

// Ghi file 

var outStream = fs.createWriteStream('out-content.gz'); 

// Tạo và lấy gzip object 
var gZip = zlib.createGzip();

// Truyền sang luồng gzip và sau đó chuyển sang ngoài luồng 
// pipe là chuyển luồng :v 

inStream.pipe(gZip).pipe(outStream);