import React, { SelectHTMLAttributes } from 'react';

import './styles.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  description?: string;
  options: Array<{
    value: string;
    label?: string;
  }>;
}

const Select: React.FunctionComponent<SelectProps> = ({
  label,
  description,
  options,
  ...selectAttributes
}) =>  {
  return (
    <div className="select-block">
      <label htmlFor={selectAttributes.id || selectAttributes.name}>
        {label}
        {description && <small>{description}</small> }
      </label>
      <select defaultValue="" {...selectAttributes}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label || option.value}</option>
        })}
      </select>
    </div>
  )
}

export default Select;
