import "./App.css";
import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";
import SettingsToolbar from "./components/SettingsToolbar/SettingsToolbar";

function App() {
  return (
    <div>
      <Header />
      <SettingsToolbar />
      <Schedule />
    </div>
  );
}

export default App;
