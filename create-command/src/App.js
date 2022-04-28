import { useClipboard } from './useClipboard'

import './App.scss'

function App() {

  const {inputRef, buttonText, copy} = useClipboard()

  return (
    <div className="container">
      <input className="input" ref={inputRef} />
      <button onClick={copy} className="copy-button"> {buttonText} </button>
    </div>
  );
}

export default App;

// Controlled and Uncontrolled input in react