import { useState } from "react"


function AppSide() {
    let getViewItem = localStorage.getItem('data')
    let viewItem = JSON.parse(getViewItem)
    let [viewItemState, setviewItemState] = useState(viewItem)
    return (
        <div className="sideBar">
            <div className='viewItemBox'>
                <span>최근 본 상품</span>
                <div>
                    {
                        viewItemState ? 
                        viewItemState.map((a, i) => {
                            return (
                                <div className="viewItemList" key={i}>
                                    {viewItemState[i].productTitle}
                                    <img className="viewItemImg" src={process.env.PUBLIC_URL + '/image/' + (viewItemState[i].imageName) + '.jpg'} />
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default AppSide