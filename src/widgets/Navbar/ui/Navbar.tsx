import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

// The Navbar component accepts an additional className prop if it's necessary to change styles from outside
export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          About
        </AppLink>
      </div>
    </div>
  );
};
