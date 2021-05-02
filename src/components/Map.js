import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map({ children }) {
  return (
    <MapContainer
      center={[39.2, 35]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: '60vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {children}
    </MapContainer>
  )
}
