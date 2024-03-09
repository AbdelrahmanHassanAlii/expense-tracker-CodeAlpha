import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import InputsArea from "./Components/InputsArea";
import TableOfExpenses from "./Components/TableOfExpenses";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <InputsArea />
      <Routes>
        <Route path="/" element={<TableOfExpenses />} />
        <Route path="/manage-categories" element={<Categories />} />
        <Route path="*" element={<TableOfExpenses />} />
      </Routes>
    </div>
  );
}

export default App;
