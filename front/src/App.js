
import './App.css';
import CardPlayers from  './cards/cards';

let arrayPrueba = [
  {title:'titulo 1', text:'card 1', button:'seleccionar'},
  {title:'titulo 2', text:'card 2', button:'seleccionar'},
  {title:'titulo 3', text:'card 3', button:'seleccionar'},
  {title:'titulo 4', text:'card 4', button:'seleccionar'},
  {title:'titulo 5', text:'card 5', button:'seleccionar'},
  
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='cards'>
        {arrayPrueba.map((element,index) => (
          <CardPlayers key={index} title={element.title} text={element.text} btn={element.button}/>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
