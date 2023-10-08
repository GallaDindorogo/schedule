import { useState, useEffect } from "react";
import { scheduleData } from "../../data/scheduleData.js";
import { lessonsTime } from "../../data/scheduleData.js";
import CurrentTime from "../CurrentTime/CurrentTime.jsx";
import BreakMessage from "../BreakMessage/BreakMessage.jsx";
import ScheduleTable from "../ScheduleTable/ScheduleTable.jsx";
import compareTimes from "../../utils/compareTimes";
import styles from "./Schedule.module.scss";

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

  return (
    <>
      <CurrentTime currentTime={currentTime} />
      <BreakMessage currentLessonIndex={currentLessonIndex} />
      <div className={styles.schedule}>
        <ScheduleTable
          scheduleData={scheduleData}
          currentDayOfWeek={currentDayOfWeek}
          currentLessonIndex={currentLessonIndex}
        />
      </div>
    </>
  );
}
