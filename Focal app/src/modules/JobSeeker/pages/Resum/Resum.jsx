
import './Resum.css'
import { Col, Row } from "react-bootstrap";
import background from "../../asset/imgs/bg.png";
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from "../../../../components/Footer/Footer"
import AllComponets from '../../components/AllComponets/AllComponets';

import NavJobSeekerLogin from '../../../../components/NavBarAll/NavJobSeekerLogin';
const Resum = () => {

  return (
    <>
      <NavJobSeekerLogin />
      <div className="br-main-pag" style={{ backgroundImage: `url(${background})` }}>
        {/* ------------------------------------ */}
        <Row className='pt-5 br-As-Row w-100' style={{ marginBottom: "64px" }}>

          <Sidebar />

          {/* ------------------------------------ */}
          <Col lg={8} md={8} sm={10} className="br-As-col2" >

            <AllComponets />


          </Col>
        </Row>


      </div>
      <Footer /></>
  )
}

export default Resum