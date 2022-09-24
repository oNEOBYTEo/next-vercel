import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

interface MenuItems {
  text: string;
  href: string;
}

const menuItems: MenuItems[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={text} text={text} href={href} />
      ))}
    </nav>
  );
};
