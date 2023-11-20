import MainPage from "./components/mainPage"
import Post from "./components/post"
import "../dist/css/index.css"
import TabBar from "./components/tabBar"
const App = () => {
  return(
    <div className="wrapper">
      <MainPage />
      <Post />
      <TabBar />
    </div>
  )
}

export default App
