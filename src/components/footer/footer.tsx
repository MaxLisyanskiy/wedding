import classes from './footer.module.scss';

import FooterBg from '../../assets/footer-bg.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerBg}>
        <img src={FooterBg} alt="footer-bg" />
      </div>
      <div className={classes.footerContainer}>
        <div className={classes.footerInner}>
          <h2 className={classes.footerTitle}>До скорой встречи!</h2>

          <div className={classes.footerText}>
            <span className={classes.footerTextFirst}>With Love</span>
            <span className={classes.footerTextSecond}>Максим & Дарья</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
