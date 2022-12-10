import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import style from "../css/Board.module.css";


function BoardDetail(props) {
    const { id } = useParams();
    let boardItem = []

    for (let i = 0; props.board.length > i; i++) {
        if (props.board[i].no == parseInt(id)) {
            boardItem = [props.board[i].no, props.board[i].title, props.board[i].writer, props.board[i].date, props.board[i].script]
        }
    }
    console.log(boardItem)

    return (
        <div className={style.boardContainer}>
            <div className={style.boardStyle}>
                <div className={style.boardDescription}>
                    <div><p>글번호</p></div>
                    <div>{boardItem[0]}</div>
                    <div><p>글제목</p></div>
                    <div>{boardItem[1]}</div>
                    <div><p>글쓴이</p></div>
                    <div>{boardItem[2]}</div>
                    <div><p>작성일</p></div>
                    <div>{boardItem[3]}</div>
                </div>
                <div className={style.textArea}>
                    <div>{boardItem[4]}</div>
                </div>
            </div>
        </div>
    )
}

export default BoardDetail