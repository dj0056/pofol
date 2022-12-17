import logo from './logo.svg';
import './App.css';
import productData from './data.js'
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Board from './routes/Board.js'
import ProductList from './routes/ProductList.js'
import BoardDetail from './component/BoardDetail.js';
import ProductDetail from './routes/ProductDetail.js';
import BoardData from './data/BoardData.js'
import AppSide from './component/AppSide.js';
import Basket from './routes/Basket.js'


function App() {
  let [carouselCount, setCarouselCount] = useState(0)
  let [carouselStyle, setCrouselStyle] = useState({ transform: `translateX(${carouselCount}00vw)` })
  let [carouselDott, setCarouselDott] = useState(0)
  let [product, setProduct] = useState(productData)
  let [board, setBoard] = useState(BoardData)

  let navigate = useNavigate();

  const slideBefore = (i) => {
    if (carouselCount < 0) {
      setCarouselCount(carouselCount + i)
      setCarouselDott(carouselDott - 1)
    }
  }

  const slideNext = (i) => {
    if (carouselCount > -2) {
      setCarouselCount(carouselCount + i)
      setCarouselDott(carouselDott + 1)
    } else {
      setCarouselCount(0)
      setCarouselDott(0)
    }
  }

  useEffect(() => {
    setCrouselStyle({ transform: `translateX(${carouselCount}00vw)` });
  }, [carouselCount]);

  return (
    <div className="App">

      <header className='container'>
        <h2>Welcome Shop</h2>
        <ul className='headerList'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/ProductList"><li>List</li></Link>
          <Link to="/Board"><li>Board</li></Link>
          <Link to="/Basket"><li>Basket</li></Link>
        </ul>
        <button className='loginBtn'>Login</button>
      </header>

      <Routes>
        <Route path='/' element={
          <div>
            <div className='carouselContainer'>
              <h1>Best Products</h1>
              <button className='slideBtnLeft'
                onClick={() => { slideBefore(1); }}>&lt;</button>
              <div className='carousel' style={carouselStyle}>
                <div className='slideItem'>
                  <img src={process.env.PUBLIC_URL + '/image/black_shoes.jpg'} />
                </div>
                <div className='slideItem'>
                  <img src={process.env.PUBLIC_URL + '/image/white_shirts.jpg'} />
                </div>
                <div className='slideItem'>
                  <img src={process.env.PUBLIC_URL + '/image/blue_cap.jpg'} />
                </div>
              </div>
              <button className='slideBtnRight'
                onClick={() => { slideNext(-1); }}>&gt;</button>
            </div>

            <div className='carouselDot'>
              <div className={0 === carouselDott ? 'current' : 'dot'}></div>
              <div className={1 === carouselDott ? 'current' : 'dot'}></div>
              <div className={2 === carouselDott ? 'current' : 'dot'}></div>
            </div>

            <div className='productCon'>
              <h1 className='productsTile'>All Products</h1>
              <div className='test1'>
                <div className='productContainer'>
                  {
                    product.map((a, i) => {
                      return (
                        <div className='productItem' key={i} onClick={() => { navigate('/ProductDetail/' + (product[i].no)) }}>
                          <div>
                            <img src={process.env.PUBLIC_URL + '/image/' + (product[i].imageName) + '.jpg'} />
                          </div>
                          <h4>{product[i].title}</h4>
                          <p>price : {product[i].price}</p>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
                <AppSide/>
            </div>
          </div>
        } />
        <Route path='/Board' element={<Board />} />
        <Route path='/BoardDetail/:id' element={<BoardDetail board={board} />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path='/ProductDetail/:id' element={<ProductDetail product={product} />} />
        <Route path='/Basket' element={<Basket/>} />
      </Routes>



      <footer>
        <h3>Welcome Shop</h3>
      </footer>

    </div>
  );
}

export default App;
