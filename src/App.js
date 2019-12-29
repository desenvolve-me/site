import React from 'react';
import './App.css';
import CoverImage from './resources/images/cover_image_2.jpg'
import CoverImage2 from './resources/images/cover_image_1.jpg'
import Cover from './components/cover/cover'
import SingleActionForm from './components/singleActionForm/singleActionForm'
import TopicList from './components/topicList/topicList'
import LeadForm from './components/leadForm/leadForm'

class App extends React.Component {

  render() {
    return (
      <div>
        <Cover backgroundImage={CoverImage}>

          <SingleActionForm
            title="Seja um programador"
            descriptionList={["Mais de 200 mil vagas não preenchidas", "Possibilidade de trabalhar de casa", "Salários de até R$10.000,00"]}
            callToActionText="Quero ser um programador"
            onClick={() => this.refs.leadForm.open()} />

        </Cover>

        <TopicList
          topics={objectionsTopicList}
          title="Transforme sua carreira" />

        <Cover backgroundImage={CoverImage2}>
          <SingleActionForm
            title="Reprograme seu futuro"
            description="As vagas são limitadas para que cada aluno tenha a atenção que precisa! Inscreva-se agora e não perca a change de transformar sua vida!"
            callToActionText="Quero ser um programador"
            onClick={() => this.refs.leadForm.open()} />
        </Cover>

        <LeadForm ref="leadForm" />

      </div >
    );
  }
}

const objectionsTopicList = [
  {
    title: "Estude sem sair de casa",
    subItens: [
      "Curso totalmente online",
      "Aulas em horários flexíveis"
    ]
  },
  {
    title: "Pague só quando entrar na área",
    subItens: [
      "Não tem dinheiro agora?",
      "Nós esperamos você entrar na área!"
    ]
  },
  {
    title: "Formado em 6 meses",
    subItens: [
      "Focamos no necessário",
      "Rápido e eficiente"
    ]
  },
  {
    title: "Você já sai com experiência na área",
    subItens: [
      "Trabalhe em sistemas reais!",
      "Ganhe experiência ajudando uma causa",
    ]
  },
  {
    title: "Te ensinamos tudo o que precisa",
    subItens: [
      "NÃO precisa saber programar",
      "NÃO precisa ser bom em matemática",
    ]
  },
  {
    title: "Instrutor para orientar nas aulas",
    subItens: [
      "Aprenda com quem trabalha no mercado",
      "Nada de aulas gravadas, aprenda com uma pessoa real!",
    ]
  },
]

export default App;