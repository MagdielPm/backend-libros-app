export async function getAllUsers(req, res) {
  const users = [
    {
      id: 1,
      fullName: "Manuel Ku Lozano",
      email: "manuel@hotmail.com",
      password: "123test",
    },
    {
      id: 2,
      fullName: "Marisol Pillar",
      email: "marysol@hotmail.com",
      password: "123test",
    },
  ];
  return res.status(200).json({ data: users });
}

export async function signUp(req, res) {
  const user = {
    id: 1,
    fullName: "Alma Marcela Silva de Alegría",
    email: "marijuana@hotmail.com",
    password: "123test",
  };
  return res.status(201).json({ data: user });
}
