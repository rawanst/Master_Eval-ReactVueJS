import React, { useState, useEffect } from 'react';
import moment from 'moment';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function Calendar () {
    const [ calendar , setCalendar ] = useState([]);
    const [ now , setNow ] = useState(moment());

    const start = now.clone().startOf("month").startOf("week").add(1, 'day');
    const end = now.clone().endOf('month').endOf('week').add(1, 'day');
    
    useEffect( () => {
        const day = start.clone().subtract(1, 'day');
        const newCalendar = [];
        while( day.isBefore(end, 'day')){
            newCalendar.push(
                Array(7).fill(0).map( () => day.add(1,'day').clone() )
            )
        }
        setCalendar(newCalendar);
    }, [now] );

    return <>
        <h1>Calendar</h1>
        <p>{now.format("MM/DD/YYYY")}</p> 
        
        <button
            type="button" 
            className="btn btn-dark" 
            style={{'margin':'2px'}}
            onClick={() => setNow(now.clone().subtract(1,'day'))}>
            hier
        </button>
        <button 
            type="button" 
            className="btn btn-dark" 
            style={{'margin':'2px'}}
            onClick={() => setNow(now.clone().add(1,'day'))}>
                demain
        </button>
        <br/><br/>

        <button 
            type="button" 
            className="btn btn-dark" 
            style={{'margin':'2px'}}
            onClick={() => setNow(now.clone().subtract(1,'month'))}>
                mois précedent
        </button>
        <button 
            type="button" 
            className="btn btn-dark" 
            style={{'margin':'2px'}}
            onClick={() => setNow(now.clone().add(1,'month'))}>
                mois suivant
        </button>

        <div className="container-sm" style={{"maxWidth":"600px", 'marginTop':'50px'}}>
            <div className="row">
                <div className="col">L</div> 
                <div className="col">M</div> 
                <div className="col">M</div> 
                <div className="col">J</div> 
                <div className="col">V</div> 
                <div className="col">S</div> 
                <div className="col">D</div> 
            </div>
        </div>
        <hr style={{"maxWidth":"600px", 'marginLeft':"550px"}}/>
        <div className="container-sm" style={{"maxWidth":"600px"}}>
            {calendar.map(week => (
                <div className="row">
                    {week.map( day => (
                        <div 
                            className="col" 
                            onClick={() => setNow(day)} >
                            {day.format('D')}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        
    </>
}