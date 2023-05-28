// Функция, вычисляет кол-во элементов кратным 3
export const multiplicityCalculation = (ArrayToCalc) => {
    let calc_array = [];
    ArrayToCalc.forEach(element => {
        (element % 3 == 0) ? calc_array.push(element) : 1 ;
    });
    return calc_array;
}
// Функция, вычисляет кол-во элементов кратным 3 