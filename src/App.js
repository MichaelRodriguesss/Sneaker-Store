import Header from "./Components/Header/index.jsx";
import Body from "./Components/Body/index.jsx";
import "./index.css";
import { ProductProvider } from "./Hooks/productsContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Body />
    </ProductProvider>
  );
}

export default App;
