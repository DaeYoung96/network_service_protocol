var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var mysql = require('mysql');
var db = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : 'pdy54872767!@',
    database : 'opentutorials'
});
db.connect();

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    var html = `
    <!doctype html>
    <html lang="ko">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <table>
        <caption>Lorem</caption>
        <thead>
            <tr>
            <th></th>
            <th>Ipsum</th>
            <th>Ipsum</th>
            <th>Ipsum</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th>Ipsum</th>
            <td>Dolor</td>
            <td>Dolor</td>
            <td rowspan="2">Dolor</td>
            </tr>
            <tr>
            <th>Ipsum</th>
            <td>Dolor</td>
            <td>Dolor</td>
            </tr>
            <tr>
            <th>Ipsum</th>
            <td>Dolor</td>
            <td>Dolor</td>
            <td>Dolor</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td colspan="2">Table Foot</td>
            </tr>
        </tfoot>
        </table>
    </body>
    </html>`;

    response.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    response.end(html);
});
app.listen(3000);
