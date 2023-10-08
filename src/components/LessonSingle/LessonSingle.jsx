import SubjectLinks from "../SubjectLinks/SubjectLinks";
import styles from "../Schedule/Schedule.module.scss";

export default function LessonSingle({ subject }) {
  return (
    <div className={styles.lessonSingl}>
      <p>{subject.name}</p>
      <SubjectLinks subject={subject} />
    </div>
  );
}
