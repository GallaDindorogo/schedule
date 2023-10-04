import React from "react";

function Lesson({ lessonTitle }) {
  return (
    <tr className="lesson">
      <td>{lessonTitle}</td>
      {/* Додайте тут ваші посилання на ресурси для кожного уроку */}
      <p> Підручник</p>
      <p> Підручник</p>
      <p> Підручник</p>
    </tr>
  );
}

export default Lesson;
