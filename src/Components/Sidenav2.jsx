import React, { useContext } from 'react';
import Comments from './Comments/';
import Yourtasks from './Yourtasks';
import Calendar from './Calendar';
import { Context2 } from '../Context2/Context2';
import '../Pages/Notification.css'
// Main nav
export default function Mainnav2() {
  const { navigator } = useContext(Context2);
  // main nav
  return (
    <div className='main-nav'>
      <div className='Main'>
        <h1>Welcome</h1>

        {navigator == 'Comments' ? (
          <Comments />
        ) : navigator == 'Yourtasks' ? (
          <Yourtasks />
        ) : navigator == 'Calendar' ? (
          <Calendar />
        ) : null}
      </div>
    </div>
  );
}
