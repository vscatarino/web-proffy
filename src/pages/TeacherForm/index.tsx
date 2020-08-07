import React from 'react'
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

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
     <Textarea label={ "Biografia" } name={"bio"} />
    </fieldset>

    <fieldset>
     <legend> Sobre a aula</legend>
     <Select
      label={ "Matéria" }
      name={ "subject" }
      options={ [
       { value: 'Artes', label: 'Artes' },
       { value: 'Biologia', label: 'Biologia' },
       { value: 'Ciências', label: 'Ciências' },
       { value: 'Educação física', label: 'Educação física' },
       { value: 'Geografia', label: 'Geografia' },
       { value: 'História', label: 'História' },
       { value: 'Matemática', label: 'Matemática' },
       { value: 'Português', label: 'Português' },
      ]}
     />
     <Input label={ "Custo da sua hora por aula" } name={ "cost" } />
    </fieldset>

    <fieldset>
     <legend> 
      Horários disponíveis
      <button type="submit">+ Novo horário</button>
     </legend>
     <div className="schedule-item">
      <Select
       label={ "MatérDia da Semanaia" }
       name={ "week_day" }
       options={ [
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-feira' },
        { value: '2', label: 'Terça-feira' },
        { value: '3', label: 'Quarta-feira' },
        { value: '4', label: 'Quinta-feira' },
        { value: '5', label: 'Sexta-feira' },
        { value: '6', label: 'Sábado' },

       ] }
      />
      <Input name="from" label="Das" type="time" />
      <Input name="to" label="Até" type="time" />
     </div>
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