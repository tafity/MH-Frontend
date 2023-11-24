import { Link } from "react-router-dom"
const SharedLayout = () => {
    return (
        <div className="shared__container">
            <header>
                <div className="header">
                    <img src="/logo.svg" className="logo" alt="logo" />
                    <button type="button" className="notifBtn" 
                    >
                    <img src="/notification.svg" className="notification" alt="notification's ring"/>
                    </button>
                </div>
            </header>
            <div className="tabBar__container">
            <div className="tabBar__subcontainer">
            <Link to= 'feed'> <button type="button" className="tabBar__home"><img src="/home.svg" alt="home" /></button> </Link>
            <Link to = 'fyp'><button type="button" className="tabBar__search"><img src="/search1.svg" alt="search" /></button></Link>
            <button type="button" className="tabBar__addPost"><img src="/addPost.svg" alt="add" srcset="" /></button>
            <button type="button" className="tabBar__favs"><img src="/favs.svg" alt="favorites" /></button>
            <button type="button" className="tabBar__profile"><img src="/profile.svg" alt="profile" /></button>
            </div>
        </div>
        </div>
        
    )
}

export default SharedLayout