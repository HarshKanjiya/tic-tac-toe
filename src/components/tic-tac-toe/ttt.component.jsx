import { useState } from 'react';
import {motion} from 'framer-motion';
import './ttt.css';
const TicTacToe = () => {
    const [player,setPlayer] = useState('X');
    const [cells,setCells] = useState(Array(9).fill(''))
    const [winner,setWinner] = useState('');
    const combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    

    const onClickHelper = (num) => {
        if(cells[num] !== ''){
            return
        }
        if(player === 'X'){
            var cell=cells;
            cell[num]='X';
            setPlayer('O')
        }
        else{
            var cell=cells;
            cell[num]='O';
            setPlayer('X')
        }

        for (let i=0 ; i<8 ; i++){
            let [a,b,c] = combination[i];

            // console.log(a,b,c)
            if( cells[a] === '' || cells[b] === '' || cells[c] === ''){
              continue;
            }
            if( cells[a] ===  cells[b] &&  cells[b] ===  cells[c]){
                setWinner(cells[a]);
                console.log('cells[a]', cells[a])
                var cellWin = cells;
                for(let j =0; j<9 ; j++){
                    if(cellWin[j]===''){
                        // console.log('entering')
                        cellWin[j] = ' '
                    }
                }
                // console.log('cellWin', cellWin)
                setCells(cellWin)
                setPlayer('Match OVER')
            }
        }
    }


    // console.log('cells', cells)
    const Cell = ({num}) => {
        return ( 
        <div className='cell' onClick={()=>onClickHelper(num)}>{cells[num]}</div>
         );
    }



    const resetButton = () => {
        setCells(cells.fill(''))
        window.location.reload();
    }
    return ( 
        <div className='container'>
        <div className='header'>
          <p>TIC TAC TOE</p>
        </div>
    
        <div className='turn-of'>
            <p>Turn of : {player}</p>
        </div>
        <div className='middle'>
        <div className='grid-row-1'></div>
        <div className='grid-clm-1'></div>
        <div className='grid-row-2'></div>
        <div className='grid-clm-2'></div>

            <motion.div 
            className='grid'
            initial={{opacity:0}}
            animate={{opacity:1}}
            
            >
                <Cell num={0}/>
                <Cell num={1}/>
                <Cell num={2}/>
                <Cell num={3}/>
                <Cell num={4}/>
                <Cell num={5}/>
                <Cell num={6}/>
                <Cell num={7}/>
                <Cell num={8}/>
            </motion.div>
        </div>
        <div className='footer'>
            <div className='win'>&nbsp;&nbsp;&nbsp;{winner && <>winner is {winner}</>}</div>
            <button onClick={resetButton}>RESET</button>
        </div>
      </div>
     );
}
 
export default TicTacToe;