import { Row, Col } from 'react-bootstrap'
import Map from './Map'
import SearchLocation from './SearchLocation'

function Home() {
  return (
    <Row className='mt-3'>
      <Col xs={12} sm={8}>
        <Map />
      </Col>
      <Col sm={4}>
        <SearchLocation />
      </Col>
    </Row>
  )
}

export default Home
