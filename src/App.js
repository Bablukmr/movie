import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Productsdetails from "./productsdetails";
import Header from "./header";
import Footer from "./footer";
import Watchlist from "./watchlist";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1 className="text-blue-500 p-5 bg-blue-100">Header</h1> */}
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:id" element={<Productsdetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
