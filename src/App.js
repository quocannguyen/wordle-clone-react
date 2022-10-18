import Keyboard from "./components/Keyboard";
import GuessBoard from "./components/GuessBoard";
import {NUMBER_OF_GUESSES, WORD_LENGTH, WordleContextProvider} from "./context/WordleContext";

function App() {
  return (
    <WordleContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Wordle</h1>
        </header>

        <GuessBoard rowCount={NUMBER_OF_GUESSES} columnCount={WORD_LENGTH}/>
        <Keyboard/>
      </div>
    </WordleContextProvider>
  );
}

export default App;
