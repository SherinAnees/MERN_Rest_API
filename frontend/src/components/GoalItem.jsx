import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="goal">
      {/* to display the date */}
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2> {goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button className="update" onClick={() => navigate(`/${goal._id}`)}>
        U
      </button>
    </div>
  );
}
export default GoalItem;
