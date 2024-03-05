import classes from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={classes.contacts} id="contacts">
      <h2 className="title">
        Контакты <span></span>
      </h2>
      <p className={classes.contactsTitle}>По всем вопросам, связанным с мероприятием, вы можете связаться с нами:</p>
      <div className={classes.contactsWrapp}>
        <div className={classes.contactItem}>
          <p>Дарья</p>
          <a>+7 (904) 510-70-19</a>
        </div>
        <div className={classes.contactItem}>
          <p>Максим</p>
          <a>+7 (921) 426-73-61</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
