import DressMan from '../../assets/dress-code/dress-man.png';
import DressWoman from '../../assets/dress-code/dress-woman.png';

import classes from './dress-code.module.scss';

const DressCode = () => {
  return (
    <section id="dressCode" className={classes.dressCode}>
      <h2 className="title">
        Дресс-код <span></span>
      </h2>

      <p className={classes.dressCodeSubtitle}>
        Во время нашего торжества мы хотим, чтобы каждый из вас чувствовал себя комфортно и свободно выражать свою
        индивидуальность. Поэтому, с радостью объявляем, что на нашей свадьбе не будет строгого дресс-кода.
      </p>

      <div className={classes.dressCodeWrapp}>
        <div className={classes.dressCodeItem}>
          <div className={classes.imgWrapp}>
            <img src={DressMan} alt="men-clothing" />
          </div>
          <p className={classes.dressCodeItemText}>
            Мы просим мужчин одеться в стильные и элегантные костюмы, сопровождаемые прекрасной сорочкой. Эта простая,
            но элегантная комбинация поможет создать изысканный образ для важного события, придавая особый шарм нашей
            свадьбе.
          </p>
        </div>

        <div className={classes.dressCodeItem}>
          <div className={classes.imgWrapp}>
            <img src={DressWoman} alt="men-clothing" />
          </div>
          <p className={classes.dressCodeItemText}>
            Для наших прекрасных женщин мы рекомендуем надеть платья, которые отражают вашу уникальность и прекрасный
            вкус. Будь то воздушное платье или элегантное гламурное облегающее платье, приглашаем вас подчеркнуть свою
            женственность и яркость в этот особый день.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
