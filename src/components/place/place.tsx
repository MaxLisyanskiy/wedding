import classes from './place.module.scss';

const Place = () => {
  return (
    <section id="place" className={classes.place}>
      <h2 className="title">
        Адреса <span></span>
      </h2>

      <div>
        <ul className={classes.list}>
          <li className={classes.item}>
            <h3>ЗАГС Приморского Района</h3>
            <p>Стародеревенская ул., 5, Санкт-Петербург</p>
          </li>
          <li className={classes.item}>
            <h3>Ресторан "BALI"</h3>
            <p>ул. Савушкина, 98, Санкт-Петербург</p>
          </li>
        </ul>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecdf131e9100e4717b1a508861990168f2bb18f98aa5e348969723777107a292&amp;source=constructor"
          width="100%"
          height="500"
          className={classes.map}
        />
      </div>
    </section>
  );
};

export default Place;
