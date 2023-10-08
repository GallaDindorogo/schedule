import getSubjectByName from "../../utils/getSubjectByName";

export default function SubjectLinks({ subject }) {
  const subjectData = getSubjectByName(subject.name);
  const { zoomLink, textLink, classRoomLink } = subjectData;

  return (
    <>
      {subject && subject !== "" && zoomLink && (
        <a href={zoomLink} target="_blank" rel="noopener noreferrer">
          Zoom
        </a>
      )}
      {subject && subject !== "" && textLink && (
        <a href={textLink} target="_blank" rel="noopener noreferrer">
          Підручник
        </a>
      )}
      {subject && subject !== "" && classRoomLink && (
        <a href={classRoomLink} target="_blank" rel="noopener noreferrer">
          Класна кімната
        </a>
      )}
    </>
  );
}
