const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'users.json');

function ensureFile() {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, '[]', 'utf8');
  }
}

function readUsers() {
  ensureFile();
  const raw = fs.readFileSync(usersFile, 'utf8');
  try {
    return JSON.parse(raw || '[]');
  } catch (err) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf8');
}

async function findByEmail(email) {
  const users = readUsers();
  return users.find((u) => u.email === email) || null;
}

async function createUser({ name, email, passwordHash }) {
  const users = readUsers();
  const newUser = {
    id: Date.now(),
    name: name || null,
    email,
    password: passwordHash,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  writeUsers(users);
  return newUser;
}

module.exports = {
  findByEmail,
  createUser,
};
