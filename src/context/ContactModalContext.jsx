import { createContext, useContext, useState } from 'react'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ContactModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  return useContext(ContactModalContext)
}
