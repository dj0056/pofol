import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "../css/ProductList.module.css"


function ProductDetail(props) {
    const [viewData, setViewData] = useState('')

    const { id } = useParams();
    let product = props.product.find(prod => {
        return prod.no == parseInt(id)
    })

    useEffect(() => {
        let viewItem = []
        if (localStorage.getItem('data')) {
            viewItem = localStorage.getItem('data')
            let viewItemsOut = [{ 'imageName': product.imageName, 'productTitle': product.title, 'productNo': product.no }, ...JSON.parse(viewItem)]
            let viewItemReduce = viewItemsOut.reduce((acc, cur)=>{
                if(acc.findIndex(({ productTitle }) => productTitle === cur.productTitle) === -1) {
                    acc.push(cur)
                }
                return acc
            }, [])
            let viewItems = [...viewItemReduce]
            if (viewItems.length > 3) {
                viewItems.pop()
                localStorage.setItem('data', JSON.stringify(viewItems))
            } else {
                localStorage.setItem('data', JSON.stringify(viewItems))
            }
        } else {
            viewItem = [{ 'imageName': product.imageName, 'productTitle': product.title, 'productNo': product.no }]
            localStorage.setItem('data', JSON.stringify(viewItem))
        }
    }, [])

    function buyBtn() {
        

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
                    <button className={style.buyBtn} onClick={() => { buyBtn() }}>구매하기</button>
                </div>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    )
}

export default ProductDetail