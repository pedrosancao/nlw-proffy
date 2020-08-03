import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.scss';

export default function TeacherForm() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Que incrível que você quer dar aulas.">
        <p>O primeiro passo é preencher esse formulário de inscrição.</p>
      </PageHeader>
    </div>
  )
}