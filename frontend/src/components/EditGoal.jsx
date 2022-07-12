import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateGoal } from "../features/goals/goalSlice";

function EditGoal() {
  const [text, setText] = useState("");
  const { goals } = useSelector((state) => state.goals);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal({ id, text }));
    console.log(goals);

    setText("");
    navigate("/");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Update Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditGoal;
