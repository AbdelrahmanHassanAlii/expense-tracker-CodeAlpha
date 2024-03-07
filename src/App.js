import "./App.css";
import Header from "./Components/Header";
import InputsArea from "./Components/InputsArea";
import TableOfExpenses from "./Components/TableOfExpenses";

function App() {
  return (
    <div className="App">
      <Header />
      <InputsArea />
      <TableOfExpenses />
    </div>
  );
}

export default App;
