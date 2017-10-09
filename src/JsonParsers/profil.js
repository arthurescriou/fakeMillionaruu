module.exports = {
  inscription: function inscription(login, password, mail) {
    return "{ login:'" + login + "', password:'" + password +"', mail: '"+mail +"'}";
  },
  login: function login(login, password) {
    return "{ login:'" + login + "', password:'" + password + "'}";
  }
}
