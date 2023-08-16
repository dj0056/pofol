import style from '../css/basket.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { plusProduct, minusProduct, deleteProduct } from '../store/store.js'

function Basket() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    console.log(state)

    function plusPro(productNo) {
        dispatch(plusProduct(productNo))
    }
    function minusPro(productNo) {
        dispatch(minusProduct(productNo))
    }
    function deletePro(productNo) {
        dispatch(deleteProduct(productNo))
    }
    
    return (
        <div className={style.basketContainer}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.basket.map((a, i) =>
                            <tr key={i}>
                                <td>{state.basket[i].no}</td>
                                <td>{state.basket[i].title}</td>
                                <td>{state.basket[i].count}</td>
                                <td><button className={style.itemCountBtn} onClick={()=>{plusPro(state.basket[i].no)}}>+</button>
                                <button className={style.itemCountBtn} onClick={()=>{minusPro(state.basket[i].no)}}>-</button>
                                <button className={style.itemDeletBtn} onClick={()=>{deletePro(state.basket[i].no)}}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Basket