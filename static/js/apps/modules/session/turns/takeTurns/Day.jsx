import React from 'react';
import Hour from './Hour';

const Day = ({
 data,
 position,
 statusTurns,
 onActionHour,
 boxes,
 collapse,
 name
}) => {

 const hours = data
  .filter(turn => turn.id_d == position)
  .map((thisHour, index) =>
  (
   <Hour key={index}
   data={thisHour}
   statusTurns={statusTurns}
   onActionHour={onActionHour}
   boxes={boxes} />)
  );

 return (
  <div>
   <div className="panel panel-default">
    <div className="panel-heading">
     <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href={`#${collapse}`} > { name } </a>
      </h4>
    </div>
   </div>
   <div id={collapse} className="panel-collapse collapse in">
    <div className="panel-body">
     { hours }
    </div>
   </div>
  </div>
 )
};

export default Day;
