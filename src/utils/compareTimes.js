// Функція для порівняння часу
export default function compareTimes(timeA, timeB) {
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
