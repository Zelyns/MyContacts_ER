import style from './style.module.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';


function Main() {
  //states
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [editId, setEditId] = useState(null); // ID du contact à modifier
  const [editForm, setEditForm] = useState({ name: '', phone: '', email: '' });

  // Récupérer les contacts au chargement
  useEffect(() => {
    axios.get('/api/contacts', { withCredentials: true })
      .then(res => setContacts(res.data));
  }, []);

  // Ajouter un contact
  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/contacts', form, { withCredentials: true });
    setContacts([...contacts, res.data]);
    setForm({ name: '', phone: '', email: '' });
  };
  // Supprimer un contact
  const handleDelete = async (id) => {
    await axios.delete(`/api/contacts/${id}`, { withCredentials: true });
    setContacts(contacts.filter(c => c._id !== id));
  };

  // Commencer la modification
  const handleEditClick = (contact) => {
    setEditId(contact._id);
    setEditForm({ name: contact.name, phone: contact.phone, email: contact.email });
  };

  // Soumettre la modification
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`/api/contacts/${editId}`, editForm, { withCredentials: true });
    setContacts(contacts.map(c => c._id === editId ? res.data : c));
    setEditId(null);
    setEditForm({ name: '', phone: '', email: '' });
  };
  // Déconnexion
  const handleLogout = async () => {
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    window.location.href = '/login';
  };
  //Interface
  return (
    <div className={style.main}>
      {/* Navbar */}
      <nav className={style.navbar}>
        <h1>Mycontact</h1>
        <button className={style.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className={style.main_container}>
        <h1>Mes Contacts</h1>
        <form onSubmit={handleAdd}>
          <input placeholder="Nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="Téléphone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <button type="submit">Ajouter</button>
        </form>
        <ul>
          {contacts.map(c => (
            <li key={c._id}>
              {editId === c._id ? (
                <form onSubmit={handleEditSubmit}>
                  <input value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} required />
                  <input value={editForm.phone} onChange={e => setEditForm({ ...editForm, phone: e.target.value })} />
                  <input value={editForm.email} onChange={e => setEditForm({ ...editForm, email: e.target.value })} />
                  <button type="submit">Valider</button>
                  <button type="button" onClick={() => setEditId(null)}>Annuler</button>
                </form>
              ) : (
                <>
                  {c.name} ({c.phone}) {c.email}
                  <button onClick={() => handleEditClick(c)}>Modifier</button>
                  <button onClick={() => handleDelete(c._id)}>Supprimer</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;