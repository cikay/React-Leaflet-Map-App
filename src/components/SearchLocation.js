import React, { useState, useEffect, useMemo } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import Data from '../data/cities'
import CustomizedCard from './CustomizedCard'

const getCityNames = () => {
  const cityNames = []
  for (const item of Data) {
    const cityName = item.city
    if (!cityNames.includes(cityName)) {
      cityNames.push(cityName)
    }
  }
  console.log(cityNames)
  return cityNames
}
export default function SearchLocation() {
  const [selected, setSelected] = useState()
  const [location, setLocation] = useState(true)

  const cityNames = useMemo(() => {
    return getCityNames()
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setLocation((prevLocation) => ({ ...prevLocation, [id]: value }))
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
          {cityNames.map((city, index) => (
            <option key={index}>{city}</option>
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
            <FormControl
              type='text'
              inputMode='latitude'
              required
              placeholder='Enlem'
              className='mr-sm-2'
              onChange={handleChange}
              style={{ width: '10rem' }}
            />
            <FormControl
              type='text'
              id='longitude'
              required
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
          >
            Ara
          </Button>
        </Form>
        {location && (
          <div className='mt-5'>
            <CustomizedCard
              items={[{ city: 'Urfa', county: 'hilvan', distance: 10 }]}
            />
          </div>
        )}
      </div>
    </div>
  )
}
