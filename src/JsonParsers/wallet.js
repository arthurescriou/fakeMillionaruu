module.exports = {
  requestWallet: function(personID) {
    console.log(personID);
    return {
      params: {
        personId: personID,
      }
    };
  }
}
