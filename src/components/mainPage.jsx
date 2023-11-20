import { useState } from "react"
const MainPage = () => {

    const [isActive, setIsActive] = useState(0);
    const toggleActive = (index) => {
        setIsActive(index)
    } 

    const [dropdown, setDropdown] =  useState(false);


    return (
        <div>
            <header>
                <div className="header">
                    <img src="/logo.svg" className="logo" alt="logo" />
                    <button type="button" className="notifBtn" 
                    >
                    <img src="/notification.svg" className="notification" alt="notification's ring"/>
                    </button>
                </div>
            </header>
            <main>
                <div className="feed">
                <div className="container__feed">
                    <div className="subcontainer">
                    <button type="button" className={isActive === 0 ? ' recs active' : 'recs'}
                    onClick={() => toggleActive(0)}>
                    <span>Рекомендации</span> 
                    </button>
                    <button type="button" className={isActive === 1 ? 'fyp active' : 'fyp'}
                    onClick={() => toggleActive(1)}>
                        <span>Моя Лента</span>
                    </button>
                    </div>
                </div>
                </div>
                <div className="sort" onClick={() => setDropdown((prev) => !prev)}>
                    <img src="/Sort.svg" alt="sortImg" />
                    <span>Сортировка</span>
                    {
                        dropdown && (
                                <div className="dropdown">
                                <ul className="sort__dropList">
                                    <span className="sort__dropSort">Сортировка:</span>
                                    <li><button type="button">Все</button></li>
                                    <li><button type="button">Популярное</button></li>
                                    <li><button type="button">Новинки</button></li>
                                    <li><button type="button">Горячее</button></li>
                                </ul>
                                </div>
                        )
                    }
                    
                </div>
            </main>

        </div>
    )
}

export default MainPage