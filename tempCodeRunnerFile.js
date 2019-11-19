y(`SELECT * FROM user where id = ?`, [queryData.id], function(err, tmp){
  //   var filteredId = path.parse(req.params.pageId).base;
  //   console.log(filteredId);
  // });