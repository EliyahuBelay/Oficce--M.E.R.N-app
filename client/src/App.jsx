import { GetAllWorkers } from './services/worker.service'
import './App.css'

function App() {
  const GetWorker = ()=>{
    GetAllWorkers()
    .then((worker)=> worker && console.log(`then: ${worker}`))

  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={GetWorker}>Go</button>
      </header>
    </div>
  )
}

export default App
