import express from "express";
import {
  getAllUsers,
  register,
  login,
  deleteUser,
} from "../controller/userController.js"; 

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);

export default router;
