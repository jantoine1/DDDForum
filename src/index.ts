import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Create a new user
app.post('/users/new', async (req, res) => {
  const { email, firstName, lastName, username } = req.body;
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
    },
  });
  res.json(newUser);
});

// Edit a user
app.post('/users/edit/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const { firstName, lastName, username } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      firstName,
      lastName,
      username
    },
  });
  res.json(updatedUser);
});

// Fetch a user by email
app.get('/users', async (req, res) => {
  const { email } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });
  res.json(user);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
