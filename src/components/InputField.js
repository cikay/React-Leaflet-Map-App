import React from 'react'
import { Form } from 'react-bootstrap'

export default function InputField({ label, error, ...rest }) {
  return (
    <Form.Group controlId='formBasicEmail'>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} />
      {error && <Form.Text className='text-danger'>Bu alan zorunlu</Form.Text>}
    </Form.Group>
  )
}
