module.exports = {
  parseChat: function(Json) {
    if(Json==null)return [];
    var ret = [];
    var start = 0;
    var size = Object.keys(Json).length;
    if(size>5){
      start = size - 5;
    }

  for (var i = start; i < size; i++) {
    Json[Object.keys(Json)[i]].user
    ret.push({
      avatar: "",
      title: Json[Object.keys(Json)[i]].user,
      subtitle: Json[Object.keys(Json)[i]].msg
    });
    ret.push({
        divider: true,
        inset: true
      });
  }
    return ret;
  }
}
