import React from 'react';
import Select from '../../components/Select';

export default function SelectWeekday() {
  return (
    <Select
      name="weekday"
      label="Dia da semana"
      options={[
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-feira' },
        { value: '2', label: 'Terça-feira' },
        { value: '3', label: 'Quarta-feira' },
        { value: '4', label: 'Quinta-feira' },
        { value: '5', label: 'Sexta-feira' },
        { value: '6', label: 'Sábado' }
      ]}
    />
  )
}
