import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import DetailPage from "./assets/pages/detailPage";
import HomePage from "./assets/pages/homePage";

function App() {
  return (
    <div className="App" id="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
