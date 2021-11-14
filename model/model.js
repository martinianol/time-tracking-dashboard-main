const data = require('./data.json');

const dataDaily = data.map(element => {
  return {
    title: element.title,
    type: 'day',
    icon: element.icon,
    current: element.timeframes.daily.current,
    previous: element.timeframes.daily.previous
  }
})
const dataWeekly = data.map(element => {
  return {
    title: element.title,
    type: 'week',
    icon: element.icon,
    current: element.timeframes.weekly.current,
    previous: element.timeframes.weekly.previous
  }
})
const dataMonthly = data.map(element => {
  return {
    title: element.title,
    type: 'month',
    icon: element.icon,
    current: element.timeframes.monthly.current,
    previous: element.timeframes.monthly.previous
  }
})

module.exports = {
  dataDaily,
  dataWeekly,
  dataMonthly
}