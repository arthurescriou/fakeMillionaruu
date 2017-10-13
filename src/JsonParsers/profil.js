module.exports = {
  inscription: function inscription(login, password, mail) {
    return {
      params: {
        login: login,
        password: password,
        mail: mail
      }
    };
  },
  login: function login(login, password) {
    return {
      params: {
        login: login,
        password: password
      }
    };
  },
  logout: function login(id) {
    return {
      params: {
        id: id
      }
    };
  }
}
