const formatTime = (date,formatter) => {
  date = date || new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  formatter = formatter || 'YYYY/MM/DD HH:ii:ss'
  formatter = formatter.replace('YYYY', formatNumber(year))
  formatter = formatter.replace('MM', formatNumber(month))
  formatter = formatter.replace('DD', formatNumber(day))
  formatter = formatter.replace('HH', formatNumber(hour))
  formatter = formatter.replace('ii', formatNumber(minute))
  formatter = formatter.replace('ss', formatNumber(second))

  return formatter
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
