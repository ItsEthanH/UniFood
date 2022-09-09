/**
 * Orders an array of days, setting the first item as the chosen day
 * @param {number} firstDay The desired first day of the week, where 0 = Sunday
 * @param {boolean} [returnNumber] Optionally pass whether the desired output should be number or string (capitalised) version of the day
 * @returns {Array} Returns a sorted array of the days. Format is determined by returnNumber
 */

function orderByFirstDayOfWeek(firstDay, returnNumber = true) {
  const numberDays = [0, 1, 2, 3, 4, 5, 6];
  const stringDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (returnNumber) {
    return [...numberDays.slice(firstDay), ...numberDays.slice(0, firstDay)];
  }

  return [...stringDays.slice(firstDay), ...stringDays.slice(0, firstDay)];
}

export default orderByFirstDayOfWeek;
