const formatFlightTime = (hour, min) => {
  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`
}

export const formatDurationTime = (int) => {
  const hours = Math.floor(int / 60)
  const min = int % 60
  return `${hours}ч ${min}м`
}

const getDepartureTime = (departureDate) => {
  const date = new Date(departureDate)
  const hours = date.getHours()
  const min = date.getMinutes()
  return formatFlightTime(hours, min)
}

const getArrival = (departure, duration) => {
  const date = new Date(departure)
  let hours = date.getHours() + Math.trunc(duration / 60)
  const min = (date.getMinutes() + duration) % 60
  if (hours >= 24) {
    hours -= 24
  }
  return formatFlightTime(hours, min)
}

export const showDepartureArrival = (departure, arrival) => {
  const departureTime = getDepartureTime(departure)
  const arrivalTime = getArrival(departure, arrival)
  return `${departureTime} - ${arrivalTime}`
}
