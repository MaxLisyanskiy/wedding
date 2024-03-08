import { useMediaQuery } from 'react-responsive';
import classes from './invitation.module.scss';

const Invitation = () => {
  const isMob = useMediaQuery({
    query: '(max-width: 797px)',
  });

  return (
    <section id="invitation" className={classes.invitation}>
      <div className={classes.content}>
        <h2 className={classes.title}>Дорогие родные, {isMob && <br />} друзья и коллеги!</h2>
        <p className={classes.subtitle}>
          Мы хотим пригласить Вас, чтобы Вы разделили с нами радость в самый лучший и трогательный день нашей жизни!
        </p>
        <p className={classes.dateLabel}>Ждём Вас на нашей свадьбе</p>
        <p className={classes.date}>27 июля 2024</p>
      </div>
    </section>
  );
};

export default Invitation;
