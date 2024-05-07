import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { actions } from '../../const';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(
      openModal({
        modalData: {
          id,
          name,
          number,
        },
        actionType: actions.editContact,
      })
    );
  }

  function handleDelete() {
    dispatch(
      openModal({
        modalData: {
          id,
          name,
          number,
        },
        actionType: actions.deleteContact,
      })
    );
  }

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
      <div>
        <button className={css.deleteBtn} type="button" onClick={handleEdit}>
          Edit
        </button>
        <button className={css.deleteBtn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}