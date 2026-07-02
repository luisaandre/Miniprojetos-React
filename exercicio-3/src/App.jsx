import Card from './Components/Card/Card.jsx'
import Perfil from './assets/perfil.JPEG'

export default function App() {
  return(
    <>
      <Card 
        profile={Perfil}
        name='Luísa André Mello'
        position='Estagiária Front-End | IndustriALL'
        phone='(22)981830066'
        mail='luisaandrecontato@gmail.com'

        githuburl='https://github.com/luisaandre'
        linkedinurl='https://www.linkedin.com/in/luisaandre'
        instaurl='https://www.instagram.com/luisamellx/'
      />
    </>
  )
}
