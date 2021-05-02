import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import {} from '@react-leaflet/core'

export default function Map() {
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
    </MapContainer>
  )
}
