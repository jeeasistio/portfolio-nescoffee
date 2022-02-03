import { useContext } from 'react'
import { ContactFormContext } from './ContactFormContext'

const useContact = () => useContext(ContactFormContext)

export default useContact
