import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { CategoryList } from "./components/category/CategoryList";
import { Content } from "./components/content/Content";
import Footer from "./components/footer/Footer";

import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/category/:name" element={<CategoryList />} />
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
