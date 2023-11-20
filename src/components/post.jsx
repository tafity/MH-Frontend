import { Avatar } from "@mui/material"
import { useState } from "react";

const Post = () => {
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`
    
    const [postDropDown, setPostDropDown] = useState(false)
    
    return (
        <div className="post">
            <div className="post__wrapper">
            <Avatar className="post__avatar">Н</Avatar>
            <span className="userName">Никнейм</span>
            <div className="post__dropDown">
                <div className="post__dotContainer" onClick={()=> setPostDropDown((prev) => !prev)}>
                <div className="post__dot"></div>
                <div className="post__dot"></div>
                <div className="post__dot"></div>
                </div>
            <span className="date">{date}</span>
            </div>
            {
                        postDropDown && (
                            <div className="post__dropdownBody" >
                            <div className="post__dropdownDiv">
                            <ul className="post__dropList">
                                <li><button type="button">Подписаться</button></li>
                                <li><button type="button">Добавить в избранное</button></li>
                                <li><button type="button">Скопировать ссылку</button></li>
                                <li><button type="button">Пожаловаться на публикацию</button></li>
                                <li><button type="button">Это неинтересно</button></li>
                            </ul>
                            </div>
                            </div>
                        )
                    }
                     </div>
            <div className="post__body">
                <h2 className="title"></h2>
                <div className="rating"></div>
                <div className="post__images"></div>
                <p className="description"></p>
                <div className="post__likesComments"></div>  
            </div>
           
        </div>
    )
}

export default Post