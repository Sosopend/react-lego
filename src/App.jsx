import { useState } from "react";
import List from "./components/List/List"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0); 
  const [articles, setArticle] = useState([]);
  return (
    <>
      <Header />
      <div className="main-container">
      <List 
      total={total} 
      onUpdateTotal={setTotal}
      articles={articles}
      onUpdateArticles={setArticle}
      />
      <Basket total={total} articles={articles}/>
      </div>
      <Footer />
    </>
  );
}

export default App;