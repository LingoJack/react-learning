interface Human {
  name: string
}

function App() {

  const str: string = "WenJunjie"

  const lover: Array<string> = [
    
  ]

  const talk = (somebody: Array<string>): string => {
    return "talk " + somebody.join(" and ")
  }

  return (
    <div className="App">
      <picture></picture>
      <button onClick={() => { alert(str + " " + talk(lover)); }}> love </button>
    </div>
  )
}

export default App
