import React, { useState } from 'react';
import SliderBox from './SliderBox';
import MontlyFeeBox from './MonthlyFeeBox';
import Button from './Button';
import './CreditFrame.css'

const CreditFrame = (props) => {

  const [amount, setAmount] = useState(props.amountMin);
  const [months, setMonths] = useState(props.monthMin);

  return (
    <div >
      <h2 className='noMargin'>Simulá tu crédito</h2>
      <h5 className='noMargin'>Tasa: {props.rate}%</h5>
      <SliderBox
        type='currency'
        title='MONTO TOTAL'
        min={props.amountMin}
        max={props.amountMax}
        step={1000}
        value={amount}
        return={setAmount}
      />
      <SliderBox
        type='number'
        title='PLAZO'
        min={props.monthMin}
        max={props.monthMax}
        step={1}
        value={months}
        return={setMonths}
      />
      <MontlyFeeBox
        title='CUOTA FIJA POR MES'
        amount={amount}
        months={months}
        rate={props.rate}
      />
      <div className='justifyContentBetween'>
        <Button
          title='OBTENÉ CRÉDITO'
          sizeName='big'
        />
        <Button
          title='VER DETALLE DE CUOTAS'
          sizeName='normal'
        />
      </div>
    </div>
  )
};

export default CreditFrame