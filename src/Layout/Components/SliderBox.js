import React, { useEffect, useState } from 'react';
import './SliderBox.css';
import InputBox from './InputBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderBox = (props) => {
  const [value, setValue] = useState(props.value)

  useEffect(() => {
    props.return(value);
  }, [props, value]);


  var min = props.min;
  var max = props.max;
  if (props.type === 'currency') {
    min = `$ ${props.min}`;
    max = `$ ${props.max}`;
  }

  const handleSlide = (e) => {
    setValue(e)
    props.return(e)
  }

  return (
    <div className='alignCenter'>
      <div className='justifyContentBetween marginRow'>
        {props.title}
        <InputBox
          min={props.min}
          max={props.max}
          type={props.type}
          value={value}
          return={setValue}
        />
      </div>
      <div>
        <Slider
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          onChange={handleSlide}
        />
      </div>
      <div className='justifyContentBetween'>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
};

export default SliderBox