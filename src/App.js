import Header from './components/Header'

function App() {
  const name = 'Kelly';
  const x = false;
  return (
    <div className="container">
      {/* <Header title='Jaba'/> */}
      <Header />
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
