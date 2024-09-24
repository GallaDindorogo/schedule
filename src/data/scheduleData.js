import subjects from "./subjects";

const subjectMap = {};
subjects.forEach((subj) => {
  subjectMap[subj.name] = subj;
});

export const scheduleData = [
  {
    day: "Понеділок",
    lessons: [
      {
        numberLesson: 1,
        subject: subjectMap["ВсесвітняІсторія"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["УкраїнськаMова"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Біологія"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["Інформатика"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Хімія"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["Алгебра"],
      },
      {
        numberLesson: 7,
        subject: subjectMap["Фізика"],
      },
      {
        numberLesson: 8,
        subject: subjectMap[""],
      },
      {
        numberLesson: 9,
        subject: subjectMap[""],
      },
      {
        numberLesson: 10,
        subject: subjectMap[""],
      },
      {
        numberLesson: 11,
        subject: subjectMap[""],
      },
    ],
  },
  {
    day: "Вівторок",
    lessons: [
      {
        numberLesson: 1,
        subject: subjectMap["Фізика"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["English"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Фізкультура"],
      },

      {
        numberLesson: 2,
        subject: subjectMap["УкраїнськаЛітература"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Геометрія"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Алгебра"],
      },
      {
        numberLesson: 7,
        subjects: [
          subjectMap["ІсторіяУкраїни"],
          subjectMap["Харківщинознавство"],
        ],
      },
      {
        numberLesson: 8,
        subject: subjectMap[""],
      },
      {
        numberLesson: 9,
        subject: subjectMap[""],
      },
      {
        numberLesson: 10,
        subject: subjectMap[""],
      },
      {
        numberLesson: 11,
        subject: subjectMap["Фізика"],
      },
    ],
  },
  {
    day: "Середа",
    lessons: [
      {
        numberLesson: 1,
        subject: subjectMap["Фізика"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["Хімія"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Фізкультура"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["Інформатика"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Література"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["ІсторіяУкраїни"],
      },
      {
        numberLesson: 7,
        subject: subjectMap["Геометрія"],
      },
      {
        numberLesson: 8,
        subject: subjectMap[""],
      },
      {
        numberLesson: 9,
        subject: subjectMap[""],
      },
      {
        numberLesson: 10,
        subject: subjectMap[""],
      },
      {
        numberLesson: 11,
        subject: subjectMap[""],
      },
    ],
  },
  {
    day: "Четвер",
    lessons: [
      {
        numberLesson: 1,
        subjects: [subjectMap["ТрудовеНавчання"], subjectMap["Мистецтво"]],
      },
      {
        numberLesson: 2,
        subject: subjectMap["Географія"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["УкраїнськаMова"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["Алгебра"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Геометрія"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["Фізика"],
      },
      {
        numberLesson: 7,
        subject: subjectMap[""],
      },
      {
        numberLesson: 8,
        subject: subjectMap[""],
      },
      {
        numberLesson: 9,
        subject: subjectMap[""],
      },
      {
        numberLesson: 10,
        subject: subjectMap[""],
      },
      {
        numberLesson: 11,
        subject: subjectMap["Алгебра"],
      },
    ],
  },
  {
    day: "П'ятниця",
    lessons: [
      {
        numberLesson: 1,
        subject: subjectMap["Фізкультура"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["English"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Література"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["УкраїнськаЛітература"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Правознавство"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["Алгебра"],
      },
      {
        numberLesson: 7,
        subjects: [subjectMap["Біологія"], subjectMap["ОсновиЗдоровя"]],
      },
      {
        numberLesson: 8,
        subject: subjectMap[""],
      },
      {
        numberLesson: 9,
        subject: subjectMap[""],
      },
      {
        numberLesson: 10,
        subject: subjectMap[""],
      },
      {
        numberLesson: 11,
        subject: subjectMap[""],
      },
    ],
  },
  //   {
  //     day: "Субота",
  //     lessons: [
  //       "Урок 1",
  //       "Урок 2",
  //       "Урок 3",
  //       "Урок 4",
  //       "Урок 5",
  //       "Урок 6",
  //       "Урок 7",
  //       "Урок 8",
  //       "Урок 9",
  //       "Урок 10",
  //       "Урок 11",
  //     ],
  //   },
];

export const lessonsTime = {
  lesson1: { start: "07:15", end: "08:00" },
  lesson2: { start: "08:10", end: "08:55" },
  lesson3: { start: "09:05", end: "09:50" },
  lesson4: { start: "10:00", end: "10:45" },
  lesson5: { start: "11:15", end: "12:00" },
  lesson6: { start: "12:10", end: "12:55" },
  lesson7: { start: "13:05", end: "13:50" },
  lesson8: { start: "14:00", end: "14:45" },
  lesson9: { start: "16:00", end: "16:45" },
  lesson10: { start: "187:00", end: "17:45" },
  lesson11: { start: "18:00", end: "18:45" },
};
