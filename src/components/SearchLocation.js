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
  const [location, setLocation] = useState()
  const cityNames = useMemo(() => {
    return getCityNames()
  }, [])
  useEffect(() => {}, [])
  const handleChange = (e) => {
    const { id, value } = e.target
    setLocation((prevLocation) => ({ ...prevLocation, [id]: value }))
  }
  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex'>
        <FormControl
          as='select'
          style={{ width: '10rem' }}
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
        <FormControl as='select' className='ml-2' style={{ width: '10rem' }}>
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
      <div>
        <Form inline>
          <FormControl
            type='text'
            inputMode='latitude'
            required
            placeholder='Enlem'
            className='mr-sm-2'
            onChange={handleChange}
          />
          <FormControl
            type='text'
            id='longitude'
            required
            placeholder='Boylam'
            className='mr-sm-2'
            onChange={handleChange}
          />
          <Button variant='outline-success' type='submit'>
            Search
          </Button>
        </Form>
        <div className='mt-2 float-right'>
          <CustomizedCard
            items={[{ city: 'Urfa', county: 'hilvan', distance: 10 }]}
          />
        </div>
      </div>
    </div>
  )
}
