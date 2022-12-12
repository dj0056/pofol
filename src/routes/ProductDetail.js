import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import style from "../css/ProductList.module.css";


function ProductDetail(props) {
    const { id } = useParams();
    let product = props.product.find(prod => {
        return prod.no == parseInt(id)
    })

    function buyBtn() {
        console.log('btnTest')
    }



    return (
        <div className={style.productContainer}>
            <div className={style.left}>
                <div className={style.leftImgBox}>
                    <img className={style.leftImg} src={process.env.PUBLIC_URL + '/image/' + (product.imageName) + '.jpg'} />
                </div>
            </div>
            <div className={style.right}>
                <div className={style.rightScriptBox}>
                    <h1 className={style.title}>{product.title}</h1>
                    <p className={style.price}>{product.price}원</p>
                    <button className={style.buyBtn} onClick={()=>{buyBtn()}}>구매하기</button>
                </div>
            </div>
            <div style={{clear:'both'}}></div>
        </div>
    )
}

export default ProductDetail