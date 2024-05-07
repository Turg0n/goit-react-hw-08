import css from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';


export default function LoginPage() {
  return (
    <div>
      <LoginForm />
      <p className={css.tools}>
        Don&apos;t have an account?{' '}
        <Link to={'/register'} className={css.link}>
          Sign Up.
        </Link>
      </p>
    </div>
  );
}