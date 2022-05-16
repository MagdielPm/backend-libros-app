import Admin from "../models/admin.model";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import moment from "moment";

const TOKEN_KEY = "Token-Auth";

export async function createAdmin(req, res) {
  const { userName, email, password } = req.body;
  try {
    let newUser = await User.create(
      {
        userName: userName,
        email: email,
        password: password,
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

export async function getUser(req, res) {
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

export async function adminLogin(req, res) {
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
      const areEquals = password === user.password ? true : false;
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
