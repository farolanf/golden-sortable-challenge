export const isCSV = data => {
  const lines = data.split('\n')
  if (lines.length < 2) return false
  
  const delimiters = [' ', ',', '\t']
  const quotes = ["'", '"']
  
  return delimiters.find(delimiter => {
    return quotes.find(quote => _isCSV(lines, delimiter, quote))
  })

  function _isCSV (lines, delimiter, quote) {
    delimiter = delimiter.replace(/\//g, '\\\\')
    const pattern = `(?:(?:(${quote}[^${quote}]*?${quote})|(\\S+))(?:${delimiter}+|$))`
    const re = new RegExp(pattern, 'g')
    const m1 = lines[0].match(re)
    const m2 = lines[1].match(re)
    return m1 && m2 && m1.length === m2.length
  }
}
