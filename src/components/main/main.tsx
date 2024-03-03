import classes from './main.module.scss';

import MainPhoto from '../../assets/main-photo_edit.png';

const Main = () => {
  return (
    <section className={classes.main}>
      <div className={classes.names}>
        <p>Максим</p>
        <p>Дарья</p>
        <p>Максим</p>
        <p>Дарья</p>
        {/* <p>Приглашаем</p>
        <p>на</p>
        <p>нашу</p>
        <p>свадьбу</p> */}
      </div>
      <div className={classes.container}>
        <div className={classes.imageBlock}>
          <div className={classes.image}>
            <img className={classes.photo} src={MainPhoto} alt="main-img" />
          </div>
        </div>
        <div className={classes.items}>
          <h1 className={classes.title}>Приглашение</h1>
          <div className={classes.item}>
            <div className={classes.initials}>М</div>
            <div className={classes.text}>
              <span>Максим </span>
              <span>&</span>
              <span>Дарья</span>
            </div>
            <div className={classes.initials}>Д</div>
          </div>
          <div className={classes.item}>
            <p className={classes.date}>27.07.2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
