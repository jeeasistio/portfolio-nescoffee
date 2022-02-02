import { useState } from 'react'

export enum OrderType {
  order = 'ORDER',
  inquiry = 'INQUIRY'
}

export interface ContactFields {
  name: string
  email: string
  type: OrderType
  product: string
  quantity: number
  message: string
}

export type ContactField = keyof ContactFields

export type ContactFieldValue = ContactFields[ContactField]

const initialData: ContactFields = {
  name: '',
  email: '',
  type: OrderType.order,
  product: '',
  quantity: 1,
  message: ''
}

const useContact = () => {
  const [fields, setFields] = useState<ContactFields>(initialData)

  const handleField = (field: ContactField, value: ContactFieldValue) => {
    setFields((prev) => ({ ...prev, [field]: value }))
  }

  const reset = () => {
    setFields(initialData)
  }

  const handleProductOrder = (productName: string) => {
    setFields((prev) => ({
      ...prev,
      type: OrderType.order,
      product: productName,
      quantity: 1
    }))
  }

  return { fields, handleField, reset, handleProductOrder }
}

export default useContact
