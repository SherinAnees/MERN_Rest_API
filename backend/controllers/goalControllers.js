const asyncHandler = require("express-async-handler");
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const { json } = require("express");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});
// @desc    Add goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add anpm text field");
  }
  console.log(req.body.text);
  res.status(200).json({ message: "Add goals" });
});
// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
