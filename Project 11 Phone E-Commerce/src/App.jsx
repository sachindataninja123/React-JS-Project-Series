import React from 'react'
import Data from "./components/Data.json"
import Card from './components/Card'

const App = () => {
  return (
    <div>
      {Data.map((phData , idx) => {
        return(
          <Card key={idx} data={phData} />
        )
      })}
    </div>
  )
}

export default App
