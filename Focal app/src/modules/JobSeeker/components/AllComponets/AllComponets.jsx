
import Content from '../ContReusem/Content'
import { Col, Row } from 'react-bootstrap'
import './AllComponets.css'
const AllComponets = () => {
  return (
   <>
   {/* pages for allcomponents */}

       <div className='br-As-main-component'> 
       {/* ------------------------------------ */}
      <Row>
        <Col className='mb-3' col={12} ><Content  /> </Col>
        </Row>
        
        {/* ------------------------------------ */}
        <Row>
       <Col  col={12}  className="mb-3 br-As">
        <Row>
         {/* expirents */}
        </Row>
          </Col>
       </Row>
       <Row>
   {/* skills and languaes */}
   <Col lg={6} md={12} className="mb-3">  </Col>
   <Col  lg={6} md={12} className="mb-3"> </Col>
</Row>
       </div>
        </>   
  )
}

export default AllComponets