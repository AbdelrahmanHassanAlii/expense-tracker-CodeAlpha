import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
// import InputsArea from "./Components/InputsArea";
import TableOfExpenses from "./Components/TableOfExpenses";
import Categories from "./Components/Categories";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<TableOfExpenses />} />
      </Routes>
    </div>
  );
}

export default App;
