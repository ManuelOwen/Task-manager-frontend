import { useContext } from 'react'
import { Context } from '../Context/Context'
import '../Pages/Tracktask.css'

export default function Sidenav() {
      const {dispatch} = useContext(Context)

      const handlePrevioustasks =()=>{

            dispatch({type: 'Previoustasks',payload:'Previoustasks'})
      }
      const  handlePendingtask = ()=>{
            dispatch({type:'Pendingtask',payload:'Pendingtask'})
      }
      const handleCurrenttask = ()=>{
            dispatch({type:'Currenttask',payload:'Currenttask'})
      }
      const handleNexttask =()=>{
            dispatch({type:'Nexttask',payload:'Nexttask'})
      }
      const handleCompletedtask =()=>{
            dispatch({type:'Completedtask',payload:'Completedtask'})
      }
  return (
    <div className='side-nav'>
     
      <div className='sidenav'>
      <h1>Dashboard</h1>
            <div className='nav' item onClick={handlePrevioustasks}>Previous task</div>
            <div className='nav' item onClick={handlePendingtask}>Pendingtask task</div>
            <div className='nav' item onClick={handleCurrenttask}>Current task</div>
            <div className='nav' item onClick={handleNexttask}>Next task</div>
            <div className='nav' item onClick={handleCompletedtask}>Completed task</div>
      </div>
    </div>
  )
}