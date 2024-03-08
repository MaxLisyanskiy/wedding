import { useEffect, useState } from 'react';
import classes from './header-mob.module.scss';
import clsx from 'clsx';
import { Menu } from '../../../shared/menu';

const HeaderMob = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [active]);

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
          {Menu.map((item) => {
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
