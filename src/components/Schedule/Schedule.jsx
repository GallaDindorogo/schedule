import { scheduleData } from "../scheduleData";
import { lessonsTime } from "../scheduleData";
import styles from "./Schedule.module.scss";

export default function Schedule() {
  const lessonTimes = lessonsTime[0]; // Беремо перший елемент з lessonsTime (оскільки це єдиний елемент)

  return (
    <div className={styles.schedule}>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th> {/* Пуста ячейка у верхньому лівому куті */}
            {Object.keys(lessonTimes).map((lessonKey, lessonIndex) => (
              <th className={styles.tbody} key={lessonIndex}>
                <p>{lessonIndex + 1}</p>
                <p>({lessonTimes[lessonKey]})</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {scheduleData.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td className={styles.tbody}>{day.day}</td>
              {day.lessons.map((lesson, lessonIndex) => (
                <td className={styles.tbody} key={lessonIndex}>
                  {lesson}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
