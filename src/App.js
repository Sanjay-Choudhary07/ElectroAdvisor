import './App.css';
import Header from './components/header/Header';
import ProductDetails from './components/productDetails/ProductDetails';
import Sidebar from './components/sidebar/Sidebar';
import Tabs from './components/tabs/Tabs';
function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <ProductDetails/>
     <Tabs/>
    </div>
  );
}

export default App;
