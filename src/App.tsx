import { useState } from 'react'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const [activeTab, setActivetab] = useState<string>("Yesterday")


  return (
    <div className="App">
     <Dashboard activeTab={activeTab} setActivetab={setActivetab}/>
    </div>
  )
}

export default App
