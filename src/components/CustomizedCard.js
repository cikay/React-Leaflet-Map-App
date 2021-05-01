import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
export default function CustomizedCard({ items }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>En Yakın Yerleşim Yerleri</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          {items.map((item) => (
            <ListGroupItem>{`${item.county} ${item.distance}`}</ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  )
}
