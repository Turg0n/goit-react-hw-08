import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

export default function Layout({ children }) {
  return (
    <div >
      <AppBar />
      <main className={css.mainWrapper}>{children}</main>
    </div>
  );
}