import { useEffect, useMemo, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Marker, Popup } from 'react-leaflet'
import { getLowestDistance, getUniqueItems } from '../utility'
import CustomizedCard from './CustomizedCard'
import Map from './Map'
import SearchLocation from './SearchLocation'
import Data from '../data/cities'

function Home() {
  const [location, setLocation] = useState({ lat: '', lng: '' })
  const [lowestDistances, setLowestDistances] = useState()
  const [selectedLocation, setSelectedLocation] = useState()
  const uniqueCities = useMemo(() => {
    return getUniqueItems(Data, 'city')
  }, [])
  useEffect(() => {
    const distance = getLowestDistance(location, uniqueCities)
    setLowestDistances(distance)
  }, [location, uniqueCities])
  return (
    <Row className='mt-3'>
      <Col xs={12} sm={8}>
        <Map>{selectedLocation && <Marker position={selectedLocation} />}</Map>
      </Col>
      <Col sm={4}>
        <SearchLocation
          setLowestDistances={setLowestDistances}
          location={location}
          setLocation={setLocation}
          uniqueCities={uniqueCities}
        >
          {location.lat && location.lng && lowestDistances && (
            <div className='mt-5'>
              <CustomizedCard
                setSelectedLocation={setSelectedLocation}
                items={lowestDistances}
              />
            </div>
          )}
        </SearchLocation>
      </Col>
    </Row>
  )
}

export default Home
