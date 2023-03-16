function roundToNearest15(date = new Date()) {
  const minutes = 15
  const ms = 1000 * 60 * minutes

  // 👇️ replace Math.round with Math.ceil to always round UP
  return new Date(Math.round(date.getTime() / ms) * ms)
}

export {roundToNearest15}
