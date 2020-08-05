import React, { useState, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
// import SelectSubject from '../../components/SelectSubject';
// import SelectWeekday from '../../components/SelectWeekday';

import iconWarning from '../../assets/images/icons/warning.svg';

import './styles.scss';

export default function TeacherForm ({ history }: RouteComponentProps) {
  const defaultScheduleItem = { weekday: '', timeFrom: '', timeTo: '' };
  const [scheduleItems, setScheduleItems] = useState([defaultScheduleItem]);
  const [mayAddSchedule, setMayAddSchedule] = useState(true);

  const [name, setName]         = useState('');
  const [avatar, setAvatar]     = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [title, setTitle]       = useState('');
  const [bio, setBio]           = useState('');
  const [subject, setSubject]   = useState('');
  const [cost, setCost]         = useState('');


  function addScheduleItem() {
    if (scheduleItems.length >= 6) {
      setMayAddSchedule(false);
    }
    setScheduleItems([...scheduleItems, defaultScheduleItem]);
  }

  function setScheduleItemValue(itemIndex: Number, field: string, value: string) {
    setScheduleItems(scheduleItems.map((scheduleItem, index) => {
      return index === itemIndex ? { ...scheduleItem, [field]: value } : scheduleItem;
    }));
  }

  function submitTeacherForm(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      title,
      bio,
      subject,
      cost,
      schedule: scheduleItems
    }).then(({ data }) => {
      history.push('/');
    }, error => {
      console.warn(error);
      alert('Ocorreu um erro ao salvar, tente novamente');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        subtitle="O primeiro passo é preencher esse formulário de inscrição."
      />
      <form onSubmit={submitTeacherForm}>
        <main className="container">
          <fieldset aria-labelledby="user-legend">
            <div id="user-legend" className="legend">Seus dados</div>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input
              name="avatar"
              label="Link da sua foto"
              description="comece com http://"
              value={avatar}
              onChange={event => setAvatar(event.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              description="somente números"
              value={whatsapp}
              onChange={event => setWhatsapp(event.target.value)}
            />
            <Input
              name="title"
              label="Título do perfil"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={event => setBio(event.target.value)}
            />
          </fieldset>
          <fieldset aria-labelledby="class-legend">
            <div id="class-legend" className="legend">Sobre a aula</div>
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
              onChange={event => setSubject(event.target.value)}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              description="em R$"
              type="number"
              value={cost}
              onChange={event => setCost(event.target.value)}
            />
          </fieldset>
          <fieldset aria-labelledby="schedule-legend">
            <div id="schedule-legend" className="legend">
              Horários disponíveis
              {mayAddSchedule && <button type="button" onClick={addScheduleItem}>+ Novo horário</button>}
            </div>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div className="schedule-form" key={index}>
                  <div className="weekday-container">
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
                      value={scheduleItem.weekday}
                      onChange={event => { setScheduleItemValue(index, 'weekday', event.target.value) }}
                    />
                  </div>
                  <div className="time-from-container">
                    <Input
                      name="time-from"
                      label="Das"
                      description="hh:mm"
                      type="time"
                      value={scheduleItem.timeFrom}
                      onChange={event => { setScheduleItemValue(index, 'timeFrom', event.target.value) }}
                    />
                  </div>
                  <div className="time-to-container">
                    <Input
                      name="time-to"
                      label="Até"
                      description="hh:mm"
                      type="time"
                      value={scheduleItem.timeTo}
                      onChange={event => { setScheduleItemValue(index, 'timeTo', event.target.value) }}
                    />
                  </div>
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={iconWarning} alt="Ícone de exclamação"/>
              Importante!<br/>
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </main>
      </form>
    </div>
  )
}