import Card from './components/Card.jsx'
import poster1 from './assets/poster.jpg'
import poster2 from './assets/poster-empire.jpg'
import poster3 from './assets/poster-return.jpg'

export default function App() {
  return(
    /* Era pra ter o Fragment dentro dos menor e maior que, mas funciona sem nada. Ele substitui as divs que "nao servem pra nada"*/
    <>
      <Card 
        img={poster1}

        title='Pôster: Star Wars (1977)'
        
        description='Um pôster épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia, e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!'
        
        />

      <Card 
        img={poster2}

        title='Pôster: Empire Strikes Back (1980)'
        
        description='Um pôster épico do filme Empire Strikes Back, com moldura de MDF e tamanho A3. Este clássico pôster trará aventura, nostalgia, e a magia de Empire Strikes Back para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!'

        />
        
      <Card 
        img={poster3}
      
        title='Pôster: Return of the Jedi (1983)'
        
        description='Um pôster épico do filme Return of the Jedi, com moldura de MDF e tamanho A3. Não perca a chance de adicionar essa linda memória ao seu acervo!'
        
        />
    </> 
  )
}