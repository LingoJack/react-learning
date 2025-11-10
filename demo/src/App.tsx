function App() {

  const str: string = "WenJunjie"

  const lover: Array<string> = [
    "LiQingYang",
    "XuYaPing",
  ]

  const talk = (somebody: Array<string>): string => {
    return "talk " + somebody.join(" and ")
  }

  return (
    <div className="App">
      <button onClick={() => { alert(str + " " + talk(lover)); }}> say </button>
    </div>
  )
}

export default App
