import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactListItemWrapper}>
      <div>
        <p className={css.userInfo}>
          <FaUser size={20} /> {name}
        </p>
        <p className={css.userInfo}>
          <FaPhone size={20} /> {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}