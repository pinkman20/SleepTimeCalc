const getSleepHours = (day) => {
    day=day.toLowerCase();
    if (day === 'monday') {
        return 8;   
    } else if (day==='tuesday') {
        return 7;
    } else if (day ==='wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 6;
    } else if (day ==='friday') {
        return 6;
    } else if (day ==='saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 9;
    }
}




const totalSleepHours = () => 
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') 
    + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

console.log('Total sleep time this week was: ' + totalSleepHours())


const idealSleepHours = () => {
    idealSleep = 8;
    return idealSleepWeekly = idealSleep * 7;
}
console.log('Ideal sleep time: ' + idealSleepHours())

const calculateSleepDebt = () => {
    
    getTotalSleepHours = totalSleepHours();
    getIdealSleepHours = idealSleepHours();

    if (getTotalSleepHours === getIdealSleepHours) {
        return console.log('Youve had just right amount time of sleep.')
    }else if(getTotalSleepHours > getIdealSleepHours) {
        return console.log(`Youve overslept by ${getTotalSleepHours-getIdealSleepHours}.`)
    }else{
        return console.log(`You lack sleep by ${getIdealSleepHours-getTotalSleepHours} hours.`)
    }
}
calculateSleepDebt();














