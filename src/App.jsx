import { useState } from "react";
import List from "./components/List/List"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Basket from "./components/Basket/Basket";

import "./App.css";

function App() {
  const [total, setTotal] = useState(0); 
  return (
    <>
      <Header />
      <div className="main-container">
      <List total={total} onUpdateTotal={setTotal}/>
      <Basket total={total}/>
      </div>
      <Footer />
    </>
  );
}

export default App;