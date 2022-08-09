import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = (props) => {
  const { text, onValueChange, extra } = props;
  const clickHandler = (e) => {
    onValueChange(e.target.textContent);
  };

  const classes = `${styles.btn} ${styles[extra]}`;

  return (
    <button type="button" className={classes} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  extra: PropTypes.string,
};

Button.defaultProps = {
  extra: '',
};

export default Button;
