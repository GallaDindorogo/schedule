import Lesson from "../Lesson/Lesson";

import React from "react";

function Day({ dayData }) {
  return (
    <div className="day">
      <h2>{dayData.day}</h2>
      <table className="schedule-table">
        <tbody>
          {dayData.lessons.map((lesson, index) => (
            <Lesson key={index} lessonTitle={lesson} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
