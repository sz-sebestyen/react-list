import './App.css';
import Ulist from "./components/Ulist";

const list = [
  "position",
  "display",
  "border",
  "padding",
  "margin",
  "overflow",
  "background",
  "font",
  "text",
  "transform",
];

function App() {
  return (
    <form>
      <Ulist list={list} />
    </form>
  );
}

export default App;
