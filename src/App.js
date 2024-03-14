import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Categories from "./Pages/Categories";
import HomePage from "./Pages/HomePage";
import MangePage from "./Pages/MangePage";
import IncomesPage from "./Pages/IncomesPage";
import ExpensesPage from "./Pages/ExpensesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<MangePage />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
