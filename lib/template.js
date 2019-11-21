module.exports = {
  show_table:function(topics){
    var html = `
    <!doctype html>
    <html>
    <head>
      <title> Diary </title>
      <meta charset="utf-8">
    </head>
    <body>
      <table border="1">
      <th>    </th>
      `;
    for(var i=0;i<31;i++){
      html+=`<th>${i+1}일</th>`;
    }
    for(var i=0; i<12; i++){
      html+=`
        <tr><!-- 첫번째 줄 시작 -->
        <td>${i+1}월</tb>`;
      for(var j=0; j<31; j++){
        html+=`<td><input type="button" onclick="location.href='/create/${i+1}/${j+1}'"></td>`;
      }
    }
      // <tr><!-- 첫번째 줄 시작 -->
      //   <td>첫번째 칸</td>
      //   <td>두번째 칸</td>
      // </tr><!-- 첫번째 줄 끝 -->
      // <tr><!-- 두번째 줄 시작 -->
      //   <td>첫번째 칸</td>
      //   <td>두번째 칸</td>
      // </tr><!-- 두번째 줄 끝 -->
    html+=`
      </table>
      </body>
      </html>`;
    return html;
  }
}
