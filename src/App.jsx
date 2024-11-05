import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsContainer from "./components/ProductsContainer";
import ProductsProvider from "./context/ProductsProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1500} />
      <Header />
      <Hero />
      <ProductsProvider>
        <ProductsContainer />
      </ProductsProvider>
      <Footer />
    </>
  );
}

export default App;
