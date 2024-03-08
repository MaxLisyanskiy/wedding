import clsx from 'clsx';

import classes from './wishes.module.scss';
import { Carousel } from 'flowbite-react';

const Wishes = () => {
  return (
    <section id="wishey" className={classes.wishes}>
      <div className={classes.wishesContainer}>
        <h2 className={clsx(classes.title, 'title')}>Пожелания</h2>
        <p className={classes.subTitle}>дорогие гости</p>

        <div className={classes.wrapp}>
          <Carousel className={classes.carousel} indicators={false}>
            <div className={classes.content}>
              <p className={classes.text}>
                Будем очень признательны, если Вы воздержитесь от криков «Горько». <br />
                <br /> Ведь поцелуй – это знак выражения чувств, и он не может быть по заказу.
              </p>
            </div>
            <div className={classes.content}>
              <p className={classes.text}>
                Знаем, что на свадьбах принято дарить цветы. <br />
                <br /> Однако, по желанию, вместо цветов Вы можете подарить бутылку вина, которая точно не завянет и
                будет напоминать об этом дне.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
