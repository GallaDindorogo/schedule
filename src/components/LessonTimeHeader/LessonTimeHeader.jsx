import { lessonsTime } from "../../data/scheduleData";
import styles from "../Schedule/Schedule.module.scss";

export default function LessonTimeHeader() {
  if (!lessonsTime) {
    return null;
  }

  return (
    <thead>
      <tr>
        <th>&nbsp;</th>
        {Object.keys(lessonsTime).map((lessonKey, lessonIndex) => (
          <th className={styles.lessonTitle} key={lessonIndex}>
            <p>Урок {lessonIndex + 1}</p>
            <p>
              ({lessonsTime[lessonKey].start} - {lessonsTime[lessonKey].end})
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
