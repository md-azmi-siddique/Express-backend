const express = require("express");
const {registration, login, profileUpdate, profileDetails, verifyEmail, verifyOTP, passwordReset, signOut} = require("../controllers/UserController");

const router = express.Router()


router.post("/registration", registration);
router.post("/login", login)
router.put("/profileUpdate", profileUpdate)
router.get("/profileDetails", profileDetails)
router.post("/verifyEmail", verifyEmail)
router.post("/verifyEmail/:email", verifyEmail)
router.post("/verifyOTP/:email/:otp/:password", verifyOTP)
router.post("/passwordReset/:email/:otp/:password", passwordReset)
router.post("/signOut", signOut)



module.exports = router;