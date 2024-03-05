import classes from './program.module.scss';

const Program = () => {
  const program = [
    {
      title: 'Сбор в ЗАГСе',
      time: '',
      placeName: 'Приморский ЗАГС',
      adress: 'Стародеревенская ул., 5, Санкт-Петербург',
    },
    {
      title: 'Торжественная церемония',
      time: '',
      placeName: 'Приморский ЗАГС',
      adress: 'Стародеревенская ул., 5, Санкт-Петербург',
    },
    {
      title: 'Фуршет',
      time: '',
      placeName: 'Ресторан "Бали"',
      adress: 'ул. Савушкина, 98, Санкт-Петербург',
    },
    {
      title: 'Банкет',
      time: '',
      placeName: 'Ресторан "Бали"',
      adress: 'ул. Савушкина, 98, Санкт-Петербург',
    },
    {
      title: 'Завершение банкета',
      time: '',
      placeName: 'Ресторан "Бали"',
      adress: 'ул. Савушкина, 98, Санкт-Петербург',
    },
  ];
  return (
    <section id="program" className={classes.program}>
      <div className="container">
        <h2 className="title">
          Программа дня <span></span>
        </h2>

        <div className={classes.row}>
          {program.map((item) => {
            return (
              <div className={classes.item} key={item.title}>
                <div className=" in10-program__image">
                  <img src="img/invitation_no_10/program01.svg" alt="" />
                </div>
                <div className=" in10-program__box">
                  <div className=" in10-program__subtitle">{item.title}</div>
                  <div className=" in10-program__time">{item.time}</div>
                </div>
                <div className=" in10-program__text">
                  <p>
                    В ЗАГСе пройдет официальная часть нашей праздничной программы. Здесь мы распишемся и получим
                    Свидетельство о браке
                  </p>
                  <p>
                    <b>{item.placeName}</b>
                  </p>
                  <p>{item.adress}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Program;
