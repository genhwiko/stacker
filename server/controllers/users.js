import UserMessage from "../models/adduser.js";

export const getUsers = async (req, res) => {
  try {
    const userMessages = await UserMessage.find();

    console.log(userMessages);

    res.status(200).json(userMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new UserMessage(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
