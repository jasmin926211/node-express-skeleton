import express from "express";
import createUser from "./createUserController";
import getUser from "./getUserController";
import getUserById from "./getUserByIdController";
import deleteUserById from "./deleteUserByIdController"
import updateUserById from "./updateUserByIdController"

import validateRequest from "utils/validateRequest";
import signupPolicy from "policies/signup/signup.policy";
const router = express.Router();

router.route("/").get(getUser);
router.route("/").post(validateRequest(signupPolicy), createUser).put(validateRequest(signupPolicy), updateUserById);
router.route("/:id").get(getUserById).delete(deleteUserById);

module.exports = router;