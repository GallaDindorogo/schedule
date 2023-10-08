import SubjectLinks from "../SubjectLinks/SubjectLinks";
import styles from "../Schedule/Schedule.module.scss";

export default function LessonGroup({ subjects }) {
  return (
    <div className={styles.splitLesson}>
      {subjects.map((subject, subjectIndex) => (
        <div key={subjectIndex} className={styles.lessonGroup}>
          <p>{subject.name}</p>
          <SubjectLinks subject={subject} />
        </div>
      ))}
    </div>
  );
}
