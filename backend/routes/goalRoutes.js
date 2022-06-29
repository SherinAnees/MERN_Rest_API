const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const router = express.Router();
router.route("/").get(getGoals).post(setGoal);
//router.get("/", getGoals);
//router.post("/", setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);
//router.put("/:id", updateGoal);
//router.delete("/:id", deleteGoal);

module.exports = router;
