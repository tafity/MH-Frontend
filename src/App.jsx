import { useState } from "react"
import Feed from "./components/feed"
import Post from "./components/post"
import TabBar from "./components/sharedLayout"
import Fyp from "./components/fyp"
import "../dist/css/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayouts from "./components/sharedLayouts"
import Error from "./components/error"
import SignUp from "./components/signUp"
const App = () => {
 

  return(
    <BrowserRouter> 
    <Routes>
      <Route path = "/" element = {<SharedLayouts />}> 
        <Route path="feed" index element = {<Feed />} /> 
        <Route path ="feed/fyp" element = {<Fyp />}/>
        <Route path ="feed/fyp/signUp" element = {<SignUp />}/>
        <Route path= "*" element = {<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
