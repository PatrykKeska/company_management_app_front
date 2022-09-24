export const isTokenExpire = () => {
  const hours = 1 // Reset when storage is more than 24hours
  const now = new Date().getTime()
  const setupTime = localStorage.getItem('setupTime')
  if (setupTime == null) {
    localStorage.setItem('setupTime', JSON.stringify(now))
  } else {
    // Session = 6min
    if (now - JSON.parse(setupTime) > (hours * 60 * 60 * 1000) / 10) {
      localStorage.clear()
      localStorage.setItem('setupTime', JSON.stringify(now))
      return true
    }
  }
}
