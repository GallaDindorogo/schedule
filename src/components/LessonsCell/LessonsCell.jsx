import LessonGroup from "../LessonGroup/LessonGroup";
import LessonSingle from "../LessonSingle/LessonSingle";
import styles from "../Schedule/Schedule.module.scss";

export default function LessonCell({
  lesson,
  lessonIndex,
  dayIndex,
  currentDayOfWeek,
  currentLessonIndex,
}) {
  const isCurrentLesson =
    dayIndex === currentDayOfWeek - 1 && lessonIndex === currentLessonIndex;

  return (
    <td
      className={`${styles.lesson} ${
        isCurrentLesson ? styles.activeLesson : ""
      }`}
    >
      {/* Отримуємо дані про урок з об'єкта lesson */}
      {Array.isArray(lesson.subjects) ? (
        <LessonGroup subjects={lesson.subjects} />
      ) : (
        <LessonSingle subject={lesson.subject} />
      )}
    </td>
  );
}
