import css from './ModalMarkup.module.css';
import { logout } from '../../redux/auth/operations';
import { deleteContact } from '../../redux/contacts/operations';
import { closeModal } from '../../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '../../redux/modal/selectors';
import { actions } from '../../const';

export default function ModalMarkup({ actionType }) {
  const dispatch = useDispatch();
  const contact = useSelector(selectModalData);
  

  function handleDeleteContact() {
    dispatch(deleteContact(contact.id));
    dispatch(closeModal());
  }

  function handleCancel() {
    dispatch(closeModal());
  }
  function handleLogOut() {
    dispatch(logout());
    dispatch(closeModal());
  }

  switch (actionType) {
    case actions.logOut: {
      return (
        <div className={css.modWrap}>
          <p className={css.question}>You really want to log out?</p>
          <div className={css.answersWrapper}>
            <button className={css.btn} onClick={handleLogOut}>
              Yes
            </button>
            <button className={css.btn} onClick={handleCancel}>
              No
            </button>
          </div>
        </div>
      );
    }

    case actions.deleteContact: {
      return (
        <div className={css.modWrap}>
          <div className={css.deleteConfirmation}>
            <p className={css.question}>
              You really want to delete this contact?
            </p>
            <b className={css.contactName}>
              {contact.name} - ({contact.number})
            </b>
          </div>
          <div className={css.answersWrapper}>
            <button className={css.btn} onClick={handleDeleteContact}>
              Yes
            </button>
            <button className={css.btn} onClick={handleCancel}>
              No
            </button>
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}