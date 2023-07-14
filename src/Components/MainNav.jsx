import { useContext } from 'react';
import Pendingtask from './Pendingtask';
import Previoustasks from './Previostasks'
import Currenttask from './Currenttask'
import Nexttask from './Nexttask'
import Completedtask from './Completedtask'
import { Context } from '../Context/Context'
import '../Pages/Tracktask.css'


export default function Mainnav() {
  const { navigator } = useContext(Context);
  return (
    <div className='mainnav'>
      {/* <h1>Task Dashboard</h1> */}
      {
        navigator == 'Previoustasks' ? (
            <Previoustasks />
          
        ) : navigator == 'Pendingtask' ? (
        
            <Pendingtask />
      
        ) : navigator == 'Currenttask' ? (
            <Currenttask />
    
        ) : navigator == 'Nexttask' ? (
            <Nexttask />
        ) : navigator == 'Completedtask' ? (
          
            <Completedtask />

        ) : null
      }
    </div>
  );
}
