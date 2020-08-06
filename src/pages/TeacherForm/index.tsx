import React from 'react'
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm = () => {
 return (
  <div id="page-teacher-form" className="container">
   <PageHeader
    title="Que incrível que você quer dar aulas."
    description="O primeiro passo é preencher esse formulário de inscrição" />
   <main>
    <fieldset>
     <legend> Seus dados</legend>
     <Input label={ "Nome completo" } name={ "name" } type={ "text" } />
     <Input label={ "Avatar" } name={ "avatar" } type={ "text" } />
     <Input label={ "WhatsApp" } name={ "whatsapp" } type={ "tel" } />   
    </fieldset>

    <fieldset>
     <legend> Sobre a aula</legend>
     <Input label={ "Matéria" } name={ "subject" }/>
     <Input label={ "Custo da sua hora por aula" } name={ "cost" } />
    </fieldset>

    <fieldset>
     <legend> Horários disponíveis</legend>
     <Input label={ "Matéria" } name={ "subject" } />
     <Input label={ "Custo da sua hora por aula" } name={ "cost" } />
    </fieldset>

    <footer>
     <p>
      <img src={ warningIcon } alt="Aviso importante" />
      Importante!<br />
      Preencha todos os dados
     </p>
     <button type={"button"}>
      Salvar cadastro
     </button>
    </footer>
   </main>
  </div>
 )
}

export default TeacherForm;