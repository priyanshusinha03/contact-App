import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  console.log(props)

  const deleteContactHandler = (id) => {
    props.getContactID(id)
  }
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
  })
  return (
    <div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
}

export default ContactList
