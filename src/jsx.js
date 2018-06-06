function SimplePage() {
  const name = 'Rob'
  const sections = [1, 2, 3]
  return (
    <div className="Main">
      <p> This is a P</p>
      <button> Sou um botão</button>
      <p> o nome da variável é {name}</p>
      <p>{10 + 1}</p>
      <h1>{ name === 'Rob' ? 'Rob Personal Info' : 'Other Personal Info' }</h1>
        {
            sections.length > 0
              ? sections.map(n => <div>Section {n}</div>)
              : null
          }
    </div>
  )
}
