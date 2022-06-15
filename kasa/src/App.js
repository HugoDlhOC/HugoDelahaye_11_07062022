import logo from './logo.svg';
import './styles/style.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {LodgingSheet} from "./pages/LodgingSheet";
import {About} from "./pages/About";
import ReactDOM from "react-dom/client";
import {Error} from "./components/Error";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route exact path={"/"} element={<Home />}></Route>
              <Route path={"/about"} element={<About />}></Route>
              <Route path={"/lodgingsheet/:linkNumber"} element={<LodgingSheet />}></Route>
              <Route path={"*"} element={<Error/>}></Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
