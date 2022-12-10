// import { Container, Table } from 'react-bootstrap';
import { useState } from 'react'
import style from "../css/Board.module.css";
import boardData from "../data/BoardData.js"
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Board() {
    let [boardList, setBoardList] = useState(boardData);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className={style.boardTitle}>게시판</h1>
            <div className={`${style.boardContainer} ${style.test}`}>
                <div className={style.boardTable}>
                    <div style={{ flex: "3", display: "flex", textAlign: "center" }}>
                        <span style={{ flex: "1" }}>번호</span>
                        <span style={{ flex: "8" }}>제목</span>
                    </div>
                    <div style={{ flex: "1", display: "flex", textAlign: "center" }}>
                        <span style={{ flex: "1" }}>작성자</span>
                        <span style={{ flex: "1" }}>작성일</span>
                    </div>
                </div>
                {
                    boardList.map((a, i) => {
                        return (
                            <div key={i} onClick={() => { navigate('/BoardDetail/'+ (boardList[i].no)) }}>
                                <div className={style.boardList}>
                                    <div style={{ flex: "3", display: "flex" }}>
                                        <span style={{ flex: "1", textAlign: "center" }}>{boardList[i].no}</span>
                                        <span style={{ flex: "8" }}>{boardList[i].title}</span>
                                    </div>
                                    <div style={{ flex: "1", display: "flex", textAlign: "center" }}>
                                        <span style={{ flex: "1" }}>{boardList[i].writer}</span>
                                        <span style={{ flex: "1" }}>{boardList[i].date}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Board;