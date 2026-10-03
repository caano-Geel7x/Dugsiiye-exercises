import React, { useReducer, useState, useEffect } from 'react';

// --- REDUCER ---
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'edit':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case 'delete':
      return state.filter((contact) => contact.id !== action.payload);
    case 'toggleFavorite':
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    default:
      return state;
  }
};

// --- CONTACT ITEM ---
const ContactItem = ({ contact, dispatch, setEditingContact }) => {
  const { id, name, email, phone, favorite } = contact;

  return (
    <li style={{ marginBottom: '10px' }}>
      <strong>{name}</strong> {favorite && '★'}
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => dispatch({ type: 'toggleFavorite', payload: id })}>
        {favorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <button onClick={() => setEditingContact(contact)}>Edit</button>
      <button onClick={() => dispatch({ type: 'delete', payload: id })}>
        Delete
      </button>
    </li>
  );
};

// --- CONTACT LIST ---
const ContactList = ({ contacts, dispatch, setEditingContact }) => {
  return (
    <div>
      <h3>Contacts</h3>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

// --- CONTACT FORM ---
const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {
  const [contact, setContact] = useState(
    editingContact || { id: null, name: '', email: '', phone: '' }
  );
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const clearForm = () => {
    setContact({ id: null, name: '', email: '', phone: '' });
    setIsEditing(false);
    setEditingContact(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      clearForm();
    }
  };

  const handleCancelEdit = () => {
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && (
        <button type="button" onClick={handleCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

// --- MAIN APP ---
const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Contact Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <hr style={{ margin: '20px 0' }} />
      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactApp;