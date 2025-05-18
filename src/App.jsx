import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateBlog from './Pages/CreateBlog'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import MyBlogs from './Pages/MyBlogs'
import UpdateBlog from './Pages/UpdateBlog'

function App() {

  return (
    <div className="gradient-background">
     <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/myblogs" element={<MyBlogs/>}/>
      <Route path="/create" element={<CreateBlog/>}/>
      <Route path="/update" element={<UpdateBlog/>}/>
     </Routes>
    </div>
  )
}

export default App
