import { Row, Col } from 'react-bootstrap'
import Map from './Map'
import SearchLocation from './SearchLocation'

function Home() {
  return (
    <Row>
      <Col sm={2}></Col>
      <Col xs={12} sm={8}>
        <div className='mt-5'>
          <SearchLocation />
          <div className='mt-5'>
            <Map />
          </div>
        </div>
      </Col>
      <Col sm={2}></Col>
    </Row>
  )
}

export default Home
