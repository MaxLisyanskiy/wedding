import classes from './header.module.scss';
import { useMediaQuery } from 'react-responsive';
import HeaderMob from './header-mob/header-mob';
import { Menu } from '../../shared/menu';

const Header = () => {
  const isMob = useMediaQuery({
    query: '(max-width: 797px)',
  });

  return (
    <header className={classes.header}>
      <div className={classes.headerMenu}>
        {!isMob && (
          <nav>
            <ul className={classes.headerList}>
              {Menu.map((item) => {
                return (
                  <li className={classes.headerItem} key={item.text}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {isMob && <HeaderMob />}
      </div>
    </header>
  );
};

export default Header;
