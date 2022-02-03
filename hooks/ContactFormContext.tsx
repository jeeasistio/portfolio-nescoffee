import React, { useState, createContext } from 'react'

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
  product: 'default',
  quantity: 1,
  message: ''
}

interface ContactFormContent {
  fields: ContactFields
  handleField: (field: ContactField, value: ContactFieldValue) => void
  reset: () => void
  handleProductOrder: (productName: string) => void
}

export const ContactFormContext = createContext<ContactFormContent>(
  {} as ContactFormContent
)

interface Props {
  children: React.ReactNode
}

export const ContactFormProvider = ({ children }: Props) => {
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

  return (
    <ContactFormContext.Provider
      value={{ fields, handleField, reset, handleProductOrder }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}
