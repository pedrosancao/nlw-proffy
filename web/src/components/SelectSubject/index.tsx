import React from 'react';
import Select from '../../components/Select';

export default function SelectSubject() {
  return (
    <Select
      name="subject"
      label="Matéria"
      options={[
        { value: 'Artes' },
        { value: 'Biologia' },
        { value: 'Desenho Geométrico' },
        { value: 'Educação Física' },
        { value: 'Espanhol' },
        { value: 'Filosofia' },
        { value: 'Física' },
        { value: 'Geografia' },
        { value: 'História' },
        { value: 'Inglês' },
        { value: 'Língua Portuguesa e Literatura' },
        { value: 'Matemática' },
        { value: 'Química' },
        { value: 'Sociologia' }
      ]}
    />
  )
}
