exports.yearAndMonthAndDay = function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    let monthAndDay = ((month < 10) ? '0' + month.toString() : month);
    monthAndDay += ((day < 10) ? '0' + day.toString() : day);
    return `${year}${monthAndDay}`;
}