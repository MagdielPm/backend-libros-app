import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import moment from "moment";

const TOKEN_KEY = "Token-Auth";

// Create new user with POST
export async function createNewUser(req, res) {
  const { userName, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  try {
    let newUser = await User.create(
      {
        userName: userName,
        email: email,
        password: encryptedPassword,
      },
      {
        fields: ["userName", "email", "password"],
      }
    );

    if (!!newUser) {
      return res.status(201).json({
        message: "Sign up successfully",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating an user",
      data: { error },
    });
  }
}

// Get all users with GET
export async function getUsers(req, res) {
  try {
    const users = await User.findAll();

    if (!!users) {
      res.status(200).json({
        message: "All users fetched successfully",
        data: users,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching users",
      data: { error },
    });
  }
}

// Get user by id with GET
export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!!user) {
      res.status(200).json({
        message: "User fetched successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(500),
      json({
        message: "Something went wrong while fetching an employee",
        data: error,
      });
  }
}

// Delete user by id with DELETE
export async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    const book = await User.destroy({
      where: {
        id: id,
      },
    });

    if (!!book) {
      res.status(200).json({
        message: "User deleted successfully",
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting an user",
      data: error,
    });
  }
}

// Update user by id with PUT
export async function updateUser(req, res) {
  const { id } = req.params;
  const { userName, email, password } = req.body;

  try {
    let users = await User.findAll({
      attributes: ["userName", "email", "password"],
      where: {
        id: id,
      },
    });

    if (!!users) {
      users.forEach(async (user) => {
        await user.update({
          id: id,
          userName: userName,
          email: email,
          password: bcrypt.hashSync(password, 10),
        });
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "User updated successfully",
      data: error,
    });
  }
}

export async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
    if (email.length === 0) {
      return res.status(400).json({
        messge: "Error invalid email, please enter a valid email",
        data: {},
      });
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user === null) {
      return res.status(404).json({
        message: "Error user not found",
        data: { emal: email },
      });
    }

    if (!!user) {
      const areEquals = bcrypt.compareSync(password, user.password);
      if (!areEquals) {
        return res.status(401).json({
          message: "Error invalid password",
          emal: email,
        });
      }

      res.status(200).json({
        message: "Login successfully",
        userName: user.userName,
        token: createToken(user),
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong while fetching a user credentials",
      data: { error },
    });
  }
}

const createToken = (user) => {
  const playload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiresAt: moment().add(1, "day").unix(),
  };
  return jwt.encode(playload, TOKEN_KEY);
};
