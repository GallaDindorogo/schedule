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
        subjects: [subjectMap["Фізика"], subjectMap["Геометрія"]],
      },
      {
        numberLesson: 2,
        subjects: [subjectMap["Геометрія"], subjectMap["Фізика"]],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Література"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["ІсторіяУкраїни"],
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
        subject: subjectMap["УкраїнськаMова"],
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
        subject: subjectMap["УкраїнськаЛітература"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Алгебра"],
      },

      {
        numberLesson: 4,
        subjects: [
          subjectMap["ІсторіяУкраїни"],
          subjectMap["Харківщинознавство"],
        ],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Інформатика"],
      },
      {
        numberLesson: 6,
        subjects: [subjectMap["Біологія"], subjectMap["ОсновиЗдоровя"]],
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
        subject: subjectMap[""],
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
        subject: subjectMap["English"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Геометрія"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["УкраїнськаMова"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Географія"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["Література"],
      },
      {
        numberLesson: 7,
        subject: subjectMap["Інформатика"],
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
        subject: subjectMap["Хімія"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["Біологія"],
      },
      {
        numberLesson: 3,
        subject: subjectMap["Алгебра"],
      },
      {
        numberLesson: 4,
        subject: subjectMap["УкраїнськаЛітература"],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Фізкультура"],
      },
      {
        numberLesson: 6,
        subjects: [subjectMap["Географія"], subjectMap["Мистецтво"]],
      },
      {
        numberLesson: 7,
        subject: subjectMap["ТрудовеНавчання"],
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
    day: "П'ятниця",
    lessons: [
      {
        numberLesson: 1,
        subject: subjectMap["English"],
      },
      {
        numberLesson: 2,
        subject: subjectMap["ВсесвітняІсторія"],
      },
      {
        numberLesson: 3,
        subjects: [subjectMap["Фізика"], subjectMap["Алгебра"]],
      },
      {
        numberLesson: 4,
        subjects: [subjectMap["Алгебра"], subjectMap["Фізика"]],
      },
      {
        numberLesson: 5,
        subject: subjectMap["Фізкультура"],
      },
      {
        numberLesson: 6,
        subject: subjectMap["Геометрія"],
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
  lesson1: { start: "07:20", end: "08:05" },
  lesson2: { start: "08:10", end: "08:55" },
  lesson3: { start: "09:00", end: "09:45" },
  lesson4: { start: "09:50", end: "10:35" },
  lesson5: { start: "10:40", end: "11:25" },
  lesson6: { start: "11:30", end: "12:15" },
  lesson7: { start: "12:20", end: "13:05" },
  lesson8: { start: "13:10", end: "13:55" },
  lesson9: { start: "16:00", end: "16:45" },
  lesson10: { start: "18:00", end: "18:45" },
  lesson11: { start: "19:00", end: "19:45" },
};
