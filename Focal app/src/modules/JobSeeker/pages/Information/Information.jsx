
import './Information.css'
import { Col, Row } from "react-bootstrap";
import background from "../../asset/imgs/bg.png";
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../../../components/Footer/Footer';
/* import AllComponets from '../Components/AllComponets/AllComponets'; */

const BlogPage = () => {

  return (
    <div className="br-main-pag" style={{backgroundImage: `url(${background})` }}>

       <Row className='pt-5 br-As-Row w-100'style={{marginBottom: "64px" }} >
        <Col lg={4}  md={2}  sm={1} className="br-As-col">
          <Sidebar />
        </Col>
   
     <Col  lg={8} md={8}   sm={10}className="br-As-col2" >  

        {/*  <AllComponets /> */}
     
         
          </Col>
    </Row>
  <Footer />
   
 </div>
  )
}

export default BlogPage