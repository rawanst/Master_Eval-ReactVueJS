import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DaysLetter } from './DaysLetter';
import { dataStructure } from './dataStructure';

export function Calendar () {
    const [ calendar , setCalendar ] = useState([]);
    const [ now , setNow ] = useState(moment());
    
    useEffect( () => {
        setCalendar(dataStructure(now));
    }, [now] );

    const months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
    
    return <>
        <div className="d-flex justify-content-center">
            <p>Aujourd'hui: {now.format("DD")} {months[Number(now.format("MM"))-1]} {now.format("YYYY")}</p> 
        </div>

        <div className='container'>
            <div className="d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-dark btn-sm" 
                    style={{'margin':'2px'}}
                    onClick={() => setNow(now.clone().subtract(1,'month'))}>
                        {`<<`}
                </button>
                <p>{months[Number(now.format("MM"))-1]}</p> 
                <button 
                    type="button" 
                    className="btn btn-dark btn-sm" 
                    style={{'margin':'2px'}}
                    onClick={() => setNow(now.clone().add(1,'month'))}>
                        {`>>`}
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <button
                    type="button" 
                    className="btn btn-dark btn-sm" 
                    style={{'margin':'2px'}}
                    onClick={() => setNow(now.clone().subtract(1,'day'))}>
                        {`<<`} 
                </button>
                <p>{now.format("DD")}</p> 
                <button 
                    type="button" 
                    className="btn btn-dark btn-sm" 
                    style={{'margin':'2px'}}
                    onClick={() => setNow(now.clone().add(1,'day'))}>
                        {`>>`}
                </button>
            </div>
        </div>
    
        <DaysLetter />

        <div className="container-sm bg-light border border-dark rounded" style={{"maxWidth":"600px"}}>
            {calendar.map(week => (
                <div className="row">
                    {week.map( day => (
                        <div className="col" onClick={() => setNow(day)} >
                            <div className={now.isSame(day,"day")? "p-2 mb-2 bg-dark text-white rounded": "p-2 mb-2"}>
                                <p className={now.isSame(day,"month") ? "" : "text-muted"}>{day.format('D')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        
    </>
}