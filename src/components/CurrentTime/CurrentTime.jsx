export default function CurrentTime({ currentTime }) {
  return <p>Поточний час: {currentTime.toLocaleTimeString()}</p>;
}
