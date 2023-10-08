import { textbooks } from "../data/textbooks";
import { zoomLinks } from "../data/zoomLinks";
import { classRooms } from "../data/classRooms";

// Функція для отримання об'єкта предмету з посиланнями
export default function getSubjectByName(subjectName) {
  return {
    subject: subjectName,
    zoomLink: zoomLinks[subjectName] || "",
    textLink: textbooks[subjectName] || "",
    classRoomLink: classRooms[subjectName] || "",
  };
}
