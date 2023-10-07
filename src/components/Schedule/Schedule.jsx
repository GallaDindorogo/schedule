import { useState, useEffect } from "react";
import { scheduleData } from "../scheduleData";
import { lessonsTime } from "../scheduleData";
import { textbooks } from "../textbooks";
import { zoomLinks } from "../zoomLinks";
import styles from "./Schedule.module.scss";

function compareTimes(timeA, timeB) {
  const [hoursA, minutesA] = timeA.split(":").map(Number);
  const [hoursB, minutesB] = timeB.split(":").map(Number);

  if (hoursA < hoursB) {
    return -1;
  } else if (hoursA > hoursB) {
    return 1;
  } else {
    // Години однакові, порівнюємо хвилини
    if (minutesA < minutesB) {
      return -1;
    } else if (minutesA > minutesB) {
      return 1;
    } else {
      // Години і хвилини однакові
      return 0;
    }
  }
}

// Функція для створення об'єкта предмету з посиланнями
function createSubjectObject(subjectName) {
  return {
    subject: subjectName,
    zoomLink: zoomLinks[subjectName] || "",
    textbookLink: textbooks[subjectName] || "",
  };
}

export default function Schedule() {
  const lessonTimes = lessonsTime;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentDayOfWeek = currentTime.getDay();
  const currentTimeString = currentTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  let currentLessonIndex = -1;
  Object.keys(lessonTimes).forEach((lessonKey, lessonIndex) => {
    const { start, end } = lessonTimes[lessonKey];
    if (
      compareTimes(currentTimeString, start) >= 0 &&
      compareTimes(currentTimeString, end) <= 0
    ) {
      currentLessonIndex = lessonIndex;
    }
  });

  // Повідомлення про перерву
  let breakMessage = "";
  if (currentLessonIndex === -1) {
    breakMessage = "Зараз перерва";
  }

  console.log("currentLessonIndex", currentLessonIndex);
  console.log("currentDayOfWeek", currentDayOfWeek);
  console.log("currentTimeString", currentTimeString);

  return (
    <>
      <p>Поточний час: {currentTime.toLocaleTimeString()}</p>
      {breakMessage && <p>{breakMessage}</p>}
      <div className={styles.schedule}>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              {Object.keys(lessonTimes).map((lessonKey, lessonIndex) => (
                <th className={styles.tbody} key={lessonIndex}>
                  <p>Урок {lessonIndex + 1}</p>
                  <p>
                    ({lessonTimes[lessonKey].start} -{" "}
                    {lessonTimes[lessonKey].end})
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {scheduleData.map((day, dayIndex) => (
              <tr key={dayIndex}>
                <td className={styles.tbody}>{day.day}</td>
                {day.lessons.map((lesson, lessonIndex) => (
                  <td
                    className={`${styles.lesson} ${
                      dayIndex === currentDayOfWeek - 1 &&
                      lessonIndex === currentLessonIndex
                        ? styles.activeLesson // Додаємо клас для активного уроку
                        : ""
                    }`}
                    key={lessonIndex}
                  >
                    {Array.isArray(lesson) ? (
                      <div className={styles.splitLesson}>
                        {lesson.map((group, groupIndex) => (
                          <div key={groupIndex} className={styles.lessonGroup}>
                            <p>{group.subject}</p>
                            {group.zoomLink && (
                              <a
                                href={group.zoomLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Zoom
                              </a>
                            )}
                            {group.textbookLink && (
                              <a
                                href={group.textbookLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Підручник
                              </a>
                            )}
                            {group.classRoomLink && (
                              <a
                                href={group.classRoomLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Класна кімната
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p> {lesson.subject}</p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
