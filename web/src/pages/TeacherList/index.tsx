import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import SelectSubject from '../../components/SelectSubject';
import SelectWeekday from '../../components/SelectWeekday';

import './styles.scss';

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <SelectSubject/>
          <SelectWeekday/>
          <Input name="time" label="Hora" type="time"/>
        </form>
      </PageHeader>
      <main className="container">
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}