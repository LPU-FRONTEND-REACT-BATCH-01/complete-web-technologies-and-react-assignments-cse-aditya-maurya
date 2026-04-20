// Basic TypeScript Example (single file)

type ID = number | string;

interface User {
  id: ID;
  name: string;
  age: number;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: ID): User | undefined {
    return this.users.find(u => u.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

// Utility function
const greetUser = (user: User): string => {
  return `Hello, ${user.name}! Age: ${user.age}`;
};

// Create instance
const manager = new UserManager();

// Add users
manager.addUser({ id: 1, name: "Adi", age: 20, isActive: true });
manager.addUser({ id: "u2", name: "Sam", age: 25, isActive: false });

// Fetch and display users
const users = manager.getAllUsers();

users.forEach(user => {
  console.log(greetUser(user));
});

// Find a specific user
const foundUser = manager.getUserById(1);

if (foundUser) {
  console.log("Found:", foundUser.name);
} else {
  console.log("User not found");
}