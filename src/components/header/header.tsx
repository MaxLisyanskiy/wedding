import classes from './header.module.scss';
import { useMediaQuery } from 'react-responsive';
import HeaderMob from './header-mob/header-mob';

const Header = () => {
  const menu = [
    {
      link: '#invitation',
      text: 'Приглашение',
    },
    {
      link: '#program',
      text: 'Программа',
    },
    {
      link: '#place',
      text: 'Адреса',
    },
    {
      link: '#survey',
      text: 'Предпочтения',
    },
    {
      link: '#dressCode',
      text: 'Дресс код',
    },
    {
      link: '#contacts',
      text: 'Контакты',
    },
  ];

  const isMob = useMediaQuery({
    query: '(max-width: 797px)',
  });

  return (
    <header className={classes.header}>
      <div className={classes.headerMenu}>
        {!isMob && (
          <nav>
            <ul className={classes.headerList}>
              {menu.map((item) => {
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
