import "./styles/style.css";
import { HashRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LodgingSheet } from "./pages/LodgingSheet";
import { About } from "./pages/About";
import { Error } from "./components/Error";
import { Routes, Route } from "react-router-dom";
import { home, about, lodgingSheet, errorPage } from "./routes";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route exact path={home} element={<Home />}></Route>
        <Route path={about} element={<About />}></Route>
        <Route path={lodgingSheet} element={<LodgingSheet />}></Route>
        <Route path={errorPage} element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
