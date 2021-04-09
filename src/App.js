import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Promotion from "./components/Footer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
