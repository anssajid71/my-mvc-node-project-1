
class UserService {
    getUser(id) {
      // Simulate fetching user data from a database
      return { id, firstName: "John", lastName: "Doe" };
    }
  }
  
  module.exports = new UserService();
  