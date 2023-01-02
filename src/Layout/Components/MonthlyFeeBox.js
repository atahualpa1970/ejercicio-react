import './MonthlyFeeBox.css';

const MontlyFeeBox = (props) => {

  const calculateFee = (amount, months, rate) => {
    return amount * (1 + rate / 100) / months;
  };

  const formatToCurrency = (value) => {
    if (value)
      return value.toLocaleString(
        'es-AR',
        { style: 'currency', currency: 'ARS', maximumFractionDigits: 2 }
      )
  }
  
  const value=calculateFee(props.amount, props.months, props.rate)
  
  return (
    <div className='darkBlueBox justifyContentAround'>
      <span><h4>{props.title}</h4></span>
      <span><h2>{formatToCurrency(value)}</h2></span>
    </div>
  )
};

export default MontlyFeeBox