
import { Route, Routes } from "react-router-dom"
import Blog1 from "./../Myblog/Blog1/Blog1";
import Blog2 from "./../Myblog/Blog2/Blog2";






const Boos = () => {
  return (
    <>
    <div className='ay-app'> 
   <Routes>
   <Route path="/" element={<Blog1 />  }></Route>
    <Route path="/lll" element={ <Blog2/>}></Route>
   </Routes>
     </div>
     
    </>
  )
}

export default Boos

