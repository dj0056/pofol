import { useState } from 'react'
import style from '../css/ProductList.module.css'
import productData from '../data.js'
import { useNavigate } from 'react-router-dom';

function ProductList() {
    let [product, setProduct] = useState(productData)

    const kindSelect = (e) => {
        if (e == 'All') {
            setProduct(productData)
        } else {
            let productKind = productData.filter((value) => value.kind == e)
            setProduct(productKind)
        }
    }

    return (
        <div>
            <div className={style.productListTileBox}>
                <span className={style.productListTile}>Products List</span>
            </div>
            <div className={style.productListContainer}>
                <div className={style.sideBar}>
                    <h2>상품 메뉴</h2>
                    <div className={style.sideBarList}>
                        <div onClick={() => kindSelect('All')}>All</div>
                        <div onClick={() => kindSelect('shirts')}>shirts</div>
                        <div onClick={() => kindSelect('pants')}>pants</div>
                        <div onClick={() => kindSelect('shoes')}>shoes</div>
                        <div onClick={() => kindSelect('cap')}>cap</div>
                    </div>
                </div>
                {
                    product.length == 0 ? <div className={style.productNull}>해당 상품이 없습니다.</div> : <ProductListFn product={product} />
                }

                <div style={{ clear: "both" }}></div>
            </div>
        </div>
    )
}

function ProductListFn(props) {

    let navigate = useNavigate();

    return (
        <div className={style.productListMain}>
            {
                props.product.map((a, i) => {
                    return (
                        <div className={style.product} key={i} onClick={() => { navigate('/productDetail/' + (props.product[i].no)) }}>
                            <div className={style.productImgDiv}>
                                <img className={style.productImg} src={process.env.PUBLIC_URL + '/image/' + (props.product[i].imageName) + '.jpg'} />
                            </div>
                            <div className={style.productText}>
                                <p>{props.product[i].title}</p>
                                <p>{props.product[i].price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList