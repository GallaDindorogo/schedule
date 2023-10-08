import LessonTimeHeader from "../LessonTimeHeader/LessonTimeHeader";
import LessonCell from "../LessonsCell/LessonsCell";
import styles from "../Schedule/Schedule.module.scss";

export default function ScheduleTable({
  scheduleData,
  currentDayOfWeek,
  currentLessonIndex,
  lessonsTime,
}) {
  return (
    <table>
      <LessonTimeHeader lessonTimes={lessonsTime} />
      <tbody>
        {scheduleData.map((day, dayIndex) => (
          <tr key={dayIndex}>
            <td className={styles.tbody}>{day.day}</td>
            {day.lessons.map((lesson, lessonIndex) => (
              <LessonCell
                key={lessonIndex}
                lesson={lesson}
                dayIndex={dayIndex}
                currentDayOfWeek={currentDayOfWeek}
                currentLessonIndex={currentLessonIndex}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
