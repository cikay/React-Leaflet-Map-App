import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const withUnit = (distance) => {
  if (distance > 1000) {
    return `${distance / 1000} Km`
  }
  return `${distance} Metre`
}

export default function CustomizedCard({ items, setSelectedLocation }) {
  console.log('items', items)

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>En Yakın Yerleşim Yerleri</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          {items.map((item, index) => (
            <ListGroupItem
              onClick={() => {
                setSelectedLocation({
                  lat: item.centerLat,
                  lng: item.centerLon,
                })
                console.log()
              }}
              action
              key={index}
            >{`${item.county} ${withUnit(item.distance)}`}</ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  )
}
