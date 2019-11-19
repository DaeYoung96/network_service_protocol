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
      <p><input type="text" name="user_id" placeholder="id"></p>
      <p>
        <input type="text" name="user_passward" placeholder="passward">
      </p>
      <p>
        <input type="button" value="회원가입" onclick="location.href='/test'">  
        <input type="submit" value="로그인">
      </p>
    </body>
    </html>`;
  },
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
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
