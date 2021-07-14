import './scss/App.scss';
import {Frame} from './Components/Frame.js';
import {initialize_key_events} from './Components/KeyEvents';

const App=()=>{
  initialize_key_events();
  return(
    <>
    <Frame/>
    </>
  );
}

export default App;
