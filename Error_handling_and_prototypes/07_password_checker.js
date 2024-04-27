class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  // Getter method for password
  get password() {
    // Replace all characters with asterisks
    return "*".repeat(this._password.length);
  }

  // Setter method for password
  set password(newPassword) {
    // Check if the new password meets the criteria
    if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
      this._password = newPassword;
      console.log("Password updated successfully.");
    } else {
      console.error("Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
    }
  }
}

// Example usage:
const user1 = new User("john_doe", "Password123");
console.log("Current password:", user1.password); // Output: ********
user1.password = "new"; // Output: Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user1.password = "NewPassword"; // Output: Password updated successfully.
console.log("New password:", user1.password); // Output: *********
