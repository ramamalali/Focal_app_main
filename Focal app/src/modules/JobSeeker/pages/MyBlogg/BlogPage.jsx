
import './BlogPageStyle.css'
import { Col, Row } from "react-bootstrap"
import background from "./../../imgs/bg.png";
import Sidebar from '../../Components/Sidebar/Sidebar'
const BlogPage = () => {

  return (

    /* -------------------main page------------------- */
    <div className="br-main-pag" style={{backgroundImage: `url(${background})` }}>

       <Row className='pt-5 br-As-Row w-100' >
        <Col lg={4}  md={2}  sm={1} className="br-As-col">
          <Sidebar />
        </Col>
   
      
     <Col  lg={8} md={8}   sm={10}className="br-As-col2" >  

       
        {/*   <Blog /> */}
         {/* <Blog2 /> */}
          </Col>
    </Row>
  
   
 </div>
  )
}

export default BlogPage