import './App.css'
import { Sinalizacao } from './components/Sinalizacao';

function App() {
  return (
    <div className="App">
      <Sinalizacao colors={[
        {id: '1', color: 'red', colorName: 'red'},
        {id: '2', color: 'yellow', colorName: 'yellow'},
        {id: '3', color: 'lime', colorName: 'lime'},
      ]}/>
    </div>
  )
}

export default App