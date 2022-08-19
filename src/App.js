import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainConteiner } from './Components/MainConteiner';
import { RightMenu } from './Components/RightMenu';

function App() {
  return (
    <div className="App">
       <LeftMenu/>
       <MainConteiner/>
       <RightMenu/>

       <div className='background'></div>
    </div>
  );
}

export default App;
