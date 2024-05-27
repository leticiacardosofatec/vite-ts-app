import './App.css'
import ButtonFatec from './components/buttonfatec/ButtonFatec'

function App() {
  return (
    <div>
      <h2>Entre em contato</h2>
      <hr/>
      <p>
      <input defaultValue='' type="text" placeholder='Nome' />
      </p>
      <p>
      <input defaultValue='' type="text" placeholder='E-mail' />
      </p>
      <p>
      <input defaultValue='' type="text" placeholder='Telefone' />
      </p>
      <hr />
      <ButtonFatec label="Fatec: Enviar mensagem" type="button" />
      
    </div>
  )
}

export default App
