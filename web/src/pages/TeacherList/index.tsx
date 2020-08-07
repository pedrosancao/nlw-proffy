import React, { useState } from 'react';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
// import SelectSubject from '../../components/SelectSubject';
// import SelectWeekday from '../../components/SelectWeekday';

import './styles.scss';

export default function TeacherList() {
  const [searched, setSearched] = useState(false);
  const [classes, setClasses]   = useState([]);
  const [subject, setSubject]   = useState('');
  const [weekday, setWeekday]   = useState('');
  const [time, setTime]         = useState('');

  async function searchClasses() {
    if (!subject || !weekday || !time) {
      alert('Selecione todos os filtros para pesquisar.');
      return;
    }

    setClasses([]);
    setSearched(false);
    api.get('classes', { params: {
      subject,
      weekday,
      time
    } }).then(({ data }) => {
      setClasses(data);
    }, error => {
      console.warn(error);
      alert('Ocorreu um erro ao buscar, tente novamente.');
    }).then(() => {
      setSearched(true);
    });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <div id="search-teachers">
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
            value={subject}
            onChange={ event => { setSubject(event.target.value) } }
          />
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
            value={weekday}
            onChange={ event => { setWeekday(event.target.value) } }
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={ event => { setTime(event.target.value) } }
          />
          <button onClick={searchClasses}>Buscar</button>
        </div>
      </PageHeader>
      <main className="container">
        {classes.map((classItem, index) => {
          return (
            <TeacherItem key={index} classInfo={classItem}/>
          );
        })}
        {searched && classes.length === 0 && (
          <div className="no-results">
            <p>Nenhum proffy encontrado<br/>para sua pesquisa.</p>
          </div>
        )}
      </main>
    </div>
  )
}