
const TabBar = () => {
    return (
        <div className="tabBar__container">
            <div className="tabBar__subcontainer">
            <button type="button" className="tabBar__home"><img src="/home.svg" alt="home" /></button>
            <button type="button" className="tabBar__search"><img src="/search1.svg" alt="search" /></button>
            <button type="button" className="tabBar__addPost"><img src="/addPost.svg" alt="add" srcset="" /></button>
            <button type="button" className="tabBar__favs"><img src="/favs.svg" alt="favorites" /></button>
            <button type="button" className="tabBar__profile"><img src="/profile.svg" alt="profile" /></button>
            </div>
        </div>
    )
}

export default TabBar