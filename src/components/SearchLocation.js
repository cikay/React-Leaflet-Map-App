import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import Data from '../data/cities'
import { getLowestDistance } from '../utility'
import InputField from './InputField'

export default function SearchLocation({
  location,
  setLocation,
  setLowestDistances,
  children,
  uniqueCities,
}) {
  const [selected, setSelected] = useState()

  const [error, setError] = useState()

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
    const distances = getLowestDistance(location, uniqueCities)
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
      </div>
      {children}
    </div>
  )
}
