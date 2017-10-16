module.exports = {
  parseChat: function(Json) {
    var ret = [];


  for (var i = 0; i < Object.keys(Json).length; i++) {
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
