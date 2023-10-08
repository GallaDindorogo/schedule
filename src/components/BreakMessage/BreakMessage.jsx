export default function BreakMessage({ currentLessonIndex }) {
  if (currentLessonIndex === -1) {
    return <p>Зараз перерва</p>;
  }
  return null;
}
