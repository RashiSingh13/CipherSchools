import logo from './logo.svg';
import './App.css';

function App() {
  const name ="Rashi Singh";
  return (
   <>
    <div>
      <h1 style = {
        {
          color: "Blue",
          textAlign: "center"
        }
      }>Hello from {name}!</h1>
    </div>
    <div>
      <p>This is {name}.</p>
    </div>
   </>
  );
}

export default App;
