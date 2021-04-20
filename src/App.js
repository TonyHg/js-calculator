import './App.css';
import Calculator from './Calculator'

const GITHUB_LINK = "https://github.com/TonyHg"
function App() {
  return (
    <div id="wrapper">
      <Calculator />
      <div id="credit">Tony Heng - <a href={GITHUB_LINK}>Github</a></div>
    </div>
  );
}

export default App;
