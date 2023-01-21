import { useState } from 'react'
import style from '../css/ProductList.module.css'
import productData from '../data.js'
import { useNavigate } from 'react-router-dom';

function ProductList() {
    let [product, setProduct] = useState(productData)
    
    let navigate = useNavigate();
    return (
        <div>
            <div className={style.productListTileBox}>
                <span className={style.productListTile}>Products List</span>
            </div>
            <div className={style.productListContainer}>
                <div className={style.sideBar}>
                    <h2>상품 메뉴</h2>
                    <div>shirts</div>
                    <div>pants</div>
                    <div>shoes</div>
                    <div>cap</div>
                </div>
                <div className={style.productListMain}>
                    {
                        productData.map((a, i) => {
                            return (
                                <div className={style.product} key={i} onClick={()=>{navigate('/productDetail/' + (productData[i].no))}}>
                                    <div className={style.productImgDiv}>
                                        <img className={style.productImg} src={process.env.PUBLIC_URL + '/image/' + (product[i].imageName) + '.jpg'} />
                                    </div>
                                    <div className={style.productText}>
                                        <p>{productData[i].title}</p>
                                        <p>{productData[i].price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        </div>
    )
}

export default ProductList