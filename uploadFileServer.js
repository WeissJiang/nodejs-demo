import http from 'http';
import * as formidable from 'formidable';
import fs from 'fs';

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload[0].filepath;
        console.log(oldpath);
        // var newpath1 = 'C:/Users/weiss/' + files.filetoupload[0].originalFilename;
        var newpath2 = 'D:/Programming/personal-portfolio/nodejs-demo/' + files.filetoupload[0].originalFilename;

        fs.copyFile(oldpath, newpath2, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);