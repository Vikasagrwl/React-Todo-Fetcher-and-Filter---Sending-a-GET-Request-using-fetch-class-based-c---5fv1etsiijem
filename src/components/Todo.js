import React, { useState } from "react";

export const Todo = (props) => {
  const [completed, setCompleted] = useState(true);
  const [incompleted, setIncompleted] = useState(true);

  const handleCompleted = () => {
    setCompleted(!completed);
  };

  const handleIncompleted = () => {
    setIncompleted(!incompleted);
  };
  return (
    <div>
      <ol>
        {props.todo
          .filter(function (data) {
            if (completed && !incompleted) return data.completed;
            else if (!completed && incompleted) return !data.completed;
            else if (completed && incompleted) return data;
          })
          .map((data, index) => {
            return (
              <li>
                <div key={data.id} className="todo" id={"todo-" + data.id}>
                  <div className="todo-title">{data.title}</div>
                  <div className="todo-status">
                    {data.completed ? "Complete" : "Incomplete"}
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
      <div id="filter-holder">
        show completed
        <input
          type="checkbox"
          id="completed-checkbox"
          checked={completed}
          onChange={handleCompleted}
        />{" "}
        <br />
        show incompleted
        <input
          type="checkbox"
          id="incompleted-checkbox"
          checked={incompleted}
          onChange={handleIncompleted}
        />
      </div>
    </div>
  );
};
