import './App.css';
import Left from './components/Left';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App screen">
    <div className='rts'><RightSide /></div>
    <div className='lts'> <Left/></div>
    </div>
  );
}

export default App;
