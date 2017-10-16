module.exports = {
  news: function(nombre) {
    return {
      params: {
        nbNews: nombre
      }
    };
  },
  parseNews: function(Json) {
    return Json;
  }
}
