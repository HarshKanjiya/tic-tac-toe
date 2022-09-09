import {motion} from 'framer-motion'

import './App.css';
import TicTacToe from './components/tic-tac-toe/ttt.component';

function App() {


  return (
    <motion.div
    className="App"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.8}}>
      <TicTacToe/>
    </motion.div>
  );
}

export default App;
