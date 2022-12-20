// // const fs = require('fs/promises')

// const listContacts = async () => {}

// const getContactById = async (contactId) => {}

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }



const fs = require('fs/promises');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const contactsList = await fs.readFile(contactsPath);
    return JSON.parse(contactsList);
  } 
  catch (error) {
    console.error(error)
}
}

const getContactById = async (contactId) => {
  try {
    const contactsList = await listContacts();
    const contactById = contactsList.find(contact => contact.id === contactId);
    return contactById || null;
  } 
  catch (error) {
    console.error(error)
} 
}

const removeContact = async (contactId) => {
  try {
    const contactsList = await listContacts();
    const indexById = contactsList.findIndex(contact => contact.id === contactId);

    if (indexById  === -1) {
        return null;
    }
    const [deleteContact ]= contactsList.splice(indexById, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return deleteContact;
  } 
  catch (error) {
    console.error(error)
}
}

const addContact = async (body) => {
  try {
    const contactsList = await listContacts();
    const newContact = {
        id: uuidv4(),
        name: body.name,
        email: body.email,
        phone: body.phone,
    }
    contactsList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return newContact;
  } 
  catch (error) {
    console.error(error)
}
}

const updateContact = async (contactId, body) => {
  try {
    const contactsList = await listContacts();
    const contactById = contactsList.find(contact => contact.id === contactId);
    if (contactById !== null) {
      const updateContactById = {
        name: body.name,
        email: body.email,
        phone: body.phone
      }
      contactsList.push(updateContactById);
      await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
      return updateContactById || null;
    }
  } 
  catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}

// ==========================================================================

// async function addContact({name, email, phone}) {
// try {
//     const contactsList = await listContacts();
//     const newContact = {
//         id: uuidv4(),
//         name,
//         email,
//         phone,
//     }
//     contactsList.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
//     return newContact;
// } catch (error) {
//     console.error(error)
// }
// };
