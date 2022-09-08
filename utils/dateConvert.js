const dateConvert = (date, mark) => {
  const yyyy = date.getFullYear().toString(10)
  const mm = (date.getMonth() + 1).toString(10).padStart(2, '0')
  const dd = date.getDate().toString(10).padStart(2, '0')
  const yyyymmdd = [yyyy, mm, dd]
  const withSlash = yyyymmdd.join(mark)
  return withSlash
}
module.exports = dateConvert