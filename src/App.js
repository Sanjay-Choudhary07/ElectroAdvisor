import './App.css';
import Header from './components/header/Header';
import ProductDetails from './components/productDetails/ProductDetails';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <ProductDetails/>
    </div>
  );
}

export default App;
