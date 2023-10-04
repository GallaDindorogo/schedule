import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import Lesson from "./components/Lesson/Lesson";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Школьное расписание</p>
        <Schedule />
        {/* <Lesson /> */}
      </header>
    </div>
  );
}

export default App;
