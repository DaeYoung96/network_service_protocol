module.exports = {
  login:function(){
    return `
    <!doctype html>
    <html>
    <head>
      <title> LOGIN </title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">LOGIN</a></h1>
      <form action="/" method="post">
      <p><input type="text" name="user_id" placeholder="id"></p>
      <p>
        <input type="text" name="user_passward" placeholder="passward">
      </p>
      <p>
        <input type="button" value="회원가입" onclick="location.href='/test'">  
        <input type="submit" value="로그인">
      </p>
      </from>
    </body>
    </html>`;
  },
  HTML:function(year, month, day, color){
    var html = `
    <!doctype html>
    <html>
    <head>
      <title> Diary </title>
      <meta charset="utf-8">
    </head>
    <body>
      <table border="1">`;
      // <th>테이블</th>
      // <th>만들기</th>
      // <tr><!-- 첫번째 줄 시작 -->
      //   <td>첫번째 칸</td>
      //   <td>두번째 칸</td>
      // </tr><!-- 첫번째 줄 끝 -->
      // <tr><!-- 두번째 줄 시작 -->
      //   <td>첫번째 칸</td>
      //   <td>두번째 칸</td>
      // </tr><!-- 두번째 줄 끝 -->
    html += `
    </table>
    </body>
    </html>
    `;
  },
  list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].id}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
