export const formatNumber = (value: number | bigint) => {
  try {
    let v = Intl.NumberFormat().format(value)
    if (v === 'NaN') {
      v = String(value)
    }
    return v
  } catch (e) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
