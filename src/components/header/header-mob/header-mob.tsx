import { useState } from 'react';
import classes from './header-mob.module.scss';
import clsx from 'clsx';

const HeaderMob = () => {
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

  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={clsx(classes.headerMobMenu, active && classes.headerMobMenuActvie)}
        onClick={() => setActive(!active)}
      >
        <span className={classes.headerMobItemFirst}></span>
        <span className={classes.headerMobItemSecond}></span>
        <span className={classes.headerMobItemThird}></span>
      </div>
      <nav className={clsx(classes.headerMobNav, active && classes.headerMobNavActvie)}>
        <ul className={classes.headerMobList}>
          {menu.map((item) => {
            return (
              <li className={classes.headerItem} key={item.text}>
                <a href={item.link} onClick={() => setActive(false)}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderMob;
