
class UserHelper {
    generateUsername(firstName, lastName) {
      return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    }
  }
  
  module.exports = new UserHelper();
  