import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map() {
  return (
    <div className='d-flex justify-content-between'>
      <MapContainer
        center={[39.925533, 35]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
