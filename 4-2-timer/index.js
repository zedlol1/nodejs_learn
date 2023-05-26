const seconds = process.argv[2];

if (isNaN(+seconds)) {
    console.log("Значение не равно числу.");
    return false;
}

let i = seconds * 1;
const TimesInterval = setInterval (() => {
    if (i != 0) {
        console.log("Секунд осталось: "+i);
    }
    else {
        clearInterval(TimesInterval);
        console.log("Таймер окончен");
    }
    i--;
}, 1000 );
