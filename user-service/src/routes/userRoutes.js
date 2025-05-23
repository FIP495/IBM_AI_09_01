const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");

// @route   GET /api/users/me
// @desc    Get current user profile
// @access  Private
router.get("/me", protect, userController.getProfile);

// @route   PUT /api/users/me
// @desc    Update user profile
// @access  Private
router.put("/me", protect, userController.updateProfile);

module.exports = router;
