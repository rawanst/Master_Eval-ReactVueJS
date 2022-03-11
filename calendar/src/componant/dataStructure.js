export function dataStructure (now){
    const start = now.clone().startOf("month").startOf("week").add(1, 'day');
    const end = now.clone().endOf('month').endOf('week').add(1, 'day');
    const day = start.clone().subtract(1, 'day');
    const newCalendar = [];
    while( day.isBefore(end, 'day')){
        newCalendar.push(
            Array(7).fill(0).map( () => day.add(1,'day').clone() )
        )
    }
    return newCalendar;
}