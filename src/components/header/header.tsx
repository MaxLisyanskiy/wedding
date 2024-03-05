import classes from './header.module.scss';

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

  return (
    <header className={classes.header}>
      <nav className={classes.headerMenu}>
        <ul className={classes.headerList}>
          {menu.map((item) => {
            return (
              <li className={classes.headerItem} key={item.text}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
        <div className={classes.headerMobMenu}>
          <span className={classes.headerMobItemFirst}></span>
          <span className={classes.headerMobItemSecond}></span>
          <span className={classes.headerMobItemThird}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
