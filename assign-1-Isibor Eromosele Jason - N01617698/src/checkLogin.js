const account = {
    username: "jason1",
    password: "command"
};
function checkLogin(username, password) {
  "use strict";
  // Check username
  if (!username ) {
    return "No username entered.";
  }
  // Check password
  if (!password ) {
    return "No password entered.";
  }
  // Encrypt the username and password
  const encryptedUsername = md5Encrypt(username);
  const encryptedPassword = md5Encrypt(password);
  // Compare encrypted values with stored values
  if (
    encryptedUsername === md5Encrypt(account.username) &&
    encryptedPassword === md5Encrypt(account.password)
  ) {
    return true;
  }
  // If username and password do not match, return an error message
  return "Invalid Username or Password.";
}
