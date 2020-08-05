import React, { InputHTMLAttributes } from 'react';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  description,
  ...inputAttributes
}) =>  {
  inputAttributes.type = inputAttributes.type || 'text'
  return (
    <div className="input-block">
      <label htmlFor={inputAttributes.id || inputAttributes.name}>
        {label}
        {description && <small>{description}</small> }
      </label>
      <input {...inputAttributes}/>
    </div>
  )
}

export default Input;
