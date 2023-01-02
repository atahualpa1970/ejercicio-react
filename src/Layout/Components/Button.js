import './Button.css';

const Button = (props) => {

  var fontSize = '16px';
  if (props.sizeName === 'big') fontSize = '24px';
  if (props.sizeName === 'small') fontSize = '12px';

  return (
    <button className={props.sizeName}>
      <span>{props.title}</span>
    </button>
  )
};

export default Button