import React, { useState, useEffect, useMemo } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import Data from '../data/cities'
import CustomizedCard from './CustomizedCard'
import { LatLng } from 'leaflet'
import { getUniqueItems, reAssign, isIncludes } from '../utility'
import InputField from './InputField'

export default function SearchLocation() {
  const [selected, setSelected] = useState()
  const [location, setLocation] = useState({ lat: '', lng: '' })
  const [lowestDistances, setLowestDistances] = useState()
  const [error, setError] = useState()
  const uniqueCities = useMemo(() => {
    return getUniqueItems(Data, 'city')
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setLocation((prevLocation) => ({ ...prevLocation, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!location.lat || !location.lng) {
      setError(true)
      setLowestDistances()
      return
    }

    const { lat, lng } = location
    console.log('location', location)
    const latLng = new LatLng(lat, lng)
    let distances = []

    const lowestLocationCount = 3
    const uniqueCounties = getUniqueItems(Data, 'county')
    console.log('Data', Data)
    console.log('uniqueCounties', uniqueCounties)
    for (const item of uniqueCounties) {
      if ('ŞEMDİNLİ' === item.county) {
        console.log(item.county)
      }
    }
    let i = 0
    for (; i < lowestLocationCount; i++) {
      const item = uniqueCounties[i]
      console.log('item first 3', item)

      const distance = latLng.distanceTo({
        lat: item.centerLat,
        lng: item.centerLon,
      })
      distances.push({ ...item, distance })
    }
    console.log('distances', distances)
    for (; i < uniqueCities.length; i++) {
      const item = uniqueCities[i]
      const { centerLat, centerLon } = item
      const distance = latLng.distanceTo({
        lat: centerLat,
        lng: centerLon,
      })

      reAssign(distances, { ...item, distance })
    }

    setLowestDistances(distances)
    console.log(distances)
  }
  return (
    <div className='mr-3'>
      <div className='d-flex justify-content-end'>
        <FormControl
          as='select'
          style={{ width: '10rem' }}
          className='mr-sm-2'
          onChange={(e) => {
            console.log('muzaffer', e.target.value)
            setSelected(e.target.value)
          }}
        >
          <option disabled selected hidden>
            Şehir
          </option>
          {uniqueCities.map((city, index) => (
            <option key={index}>{city.city}</option>
          ))}
        </FormControl>
        <FormControl as='select' className='mr-sm-2' style={{ width: '10rem' }}>
          <option disabled selected hidden>
            İlçe
          </option>
          {selected &&
            Data.filter((item) => item.city === selected).map((item, index) => {
              console.log('item', item)
              return <option key={index}>{item.county}</option>
            })}
        </FormControl>
      </div>
      <div className='mt-3'>
        <Form>
          <div className='d-flex justify-content-end'>
            <InputField
              type='number'
              id='lat'
              required
              error={error && !location.lat}
              placeholder='Enlem'
              className='mr-sm-2'
              onChange={handleChange}
              style={{ width: '10rem' }}
            />

            <InputField
              type='number'
              id='lng'
              required
              error={error && !location.lng}
              placeholder='Boylam'
              className='mr-sm-2'
              onChange={handleChange}
              style={{ width: '10rem' }}
            />
          </div>
          <Button
            className='mt-2 mr-2 float-right'
            variant='outline-success'
            type='submit'
            onClick={handleSubmit}
          >
            Ara
          </Button>
        </Form>
        {lowestDistances && (
          <div className='mt-5'>
            <CustomizedCard items={lowestDistances} />
          </div>
        )}
      </div>
    </div>
  )
}
