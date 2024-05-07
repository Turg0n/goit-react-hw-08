import css from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';


export default function RegistrationPage() {
  return (
    <div>
      <RegistrationForm />
      <p className={css.tools}>
        Already have an account?{' '}
        <Link to={'/login'} className={css.login}>
          Sign In.
        </Link>
      </p>
    </div>
  );
}