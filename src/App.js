import './App.css';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div className="pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 font-sans">
      <Header />
      <Products/>
      {/* <Categories/> */}
    </div>
  );
}

export default App;
