import classes from './program.module.scss';
import WeddingLocation from '../../assets/program/wedding-location.png';
import WeddingRings from '../../assets/program/wedding-rings.png';
import WeddingGlasses from '../../assets/program/wedding-glasses.png';
import WeddingBanquet from '../../assets/program/wedding-banquet.png';
import WeddingEnd from '../../assets/program/wedding-end.png';
import clsx from 'clsx';

const Program = () => {
  const program = [
    {
      icon: WeddingLocation,
      title: 'Сбор в ЗАГСе',
      time: '12:20',
      descr: 'Сбор гостей в Приморском ЗАГСе',
      placeName: 'Приморский ЗАГС',
      adress: 'Стародеревенская ул., 5, Санкт-Петербург',
    },
    {
      icon: WeddingRings,
      title: 'Церемония регистрации',
      time: '12:40',
      descr:
        'В ЗАГСе пройдет официальная часть нашей праздничной программы. Здесь мы распишемся и получим Свидетельство о браке',
      placeName: 'Приморский ЗАГС',
      adress: 'Стародеревенская ул., 5, Санкт-Петербург',
    },
    {
      icon: WeddingGlasses,
      title: 'Фуршет',
      time: '14:00',
      descr: 'Сбор гостей в ресторане, знакомство, легкое закусочное меню',
      placeName: 'Ресторан "BALI"',
      adress: 'ул. Савушкина, 98, Санкт-Петербург',
    },
    {
      icon: WeddingBanquet,
      title: 'Начало банкета',
      time: '15:00',
      descr: 'Здесь Вас ожидают праздничный стол и напитки, увеселительная программа от нашего ведущего и танцы.',
      placeName: 'Ресторан "BALI"',
      adress: 'ул. Савушкина, 98, Санкт-Петербург',
    },
    {
      icon: WeddingEnd,
      title: 'Завершение банкета',
      time: '23:00',
      placeName: 'Ресторан "BALI"',
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
          {program.map((item, index) => {
            return (
              <div className={classes.item} key={item.title}>
                <div className={clsx(classes.img, index % 2 && classes.img2)}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className={classes.titleWrapp}>
                  <h4>{item.title}</h4>
                  <span className={clsx(classes.span, index % 2 && classes.span2)}>{item.time}</span>
                </div>
                <div className={classes.text}>
                  <p>{item.descr}</p>
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
