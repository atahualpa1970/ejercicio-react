import './InputBox.css';

const InputBox = (props) => {

  const handleOnChange = (e) => {
    props.return(valueToNumber(e.target.value));
  }

  const handleOnBlur = (e) => {
    var value = valueToNumber(e.target.value);
    if (value < props.min) value = props.min;
    if (value > props.max) value = props.max;
    props.return(value);
  }

  const valueToNumber = (value) => {
    value = value.replace(/[$. ]/g, '');
    if (parseInt(value)) value = parseInt(value);
    else value = 0;
    return value;
  }

  const formatToCurrency = (value) => {
    if (value)
      return value.toLocaleString(
        'es-AR',
        { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }
      )
  }

  var formattedValue = props.value
  if (props.type === 'currency') formattedValue = formatToCurrency(props.value)

  return (
    <div style={{ display: 'inline-block' }}>
      <input
        id='inputbox'
        type='text'
        className='outlineInput'
        defaultValue={formattedValue}
        value={formattedValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </div>
  )
};

export default InputBox