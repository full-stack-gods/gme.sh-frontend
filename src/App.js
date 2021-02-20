import Form from "./Form/Form"
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="shortHeading">GME
          <span className="ShortenerText">Shortener
            <span className="shadow">Shortener</span>
          </span>
        </h1>
      </header>
      <Form />
    </div>
  );
}

export default App;