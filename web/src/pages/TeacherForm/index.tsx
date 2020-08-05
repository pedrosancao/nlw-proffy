import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import SelectSubject from '../../components/SelectSubject';
import SelectWeekday from '../../components/SelectWeekday';

import iconWarning from '../../assets/images/icons/warning.svg';

import './styles.scss';

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        subtitle="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main className="container">
        <fieldset aria-labelledby="user-legend">
          <div id="user-legend" className="legend">Seus dados</div>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Link da sua foto" description="comece com http://"/>
          <Input name="whatsapp" label="Whatsapp" description="somente números"/>
          <Input name="title" label="Título do perfil"/>
          <Textarea name="bio" label="Biografia"/>
        </fieldset>
        <fieldset aria-labelledby="class-legend">
          <div id="class-legend" className="legend">Sobre a aula</div>
          <SelectSubject/>
          <Input name="name" label="Custo da sua hora por aula" description="em R$" type="number"/>
        </fieldset>
        <fieldset aria-labelledby="schedule-legend">
          <div id="schedule-legend" className="legend">
            Horários disponíveis
            <button>+ Novo horário</button>
          </div>
          <div className="schedule-form">
            <div className="weekday-container">
              <SelectWeekday/>
            </div>
            <div className="time-form-container">
              <Input name="time-form" label="Das" description="hh:mm" type="time"/>
            </div>
            <div className="time-to-container">
              <Input name="time-to" label="Até" description="hh:mm" type="time"/>
            </div>
          </div>
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
    </div>
  )
}