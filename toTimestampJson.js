function toTimestampJson(dateString) {
  let dateArg

  if (!dateString) {
    dateArg = null
  } else if (/^\d+$/.test(dateString)) {
    // UNIX timestamp with milliseconds
    dateArg = +dateString
  } else {
    // ISO 8601 date format is YYYY-MM-DD; 10 characters.
    // We'll ignore subsequent characters.
    dateArg = dateString.slice(0, 10)
  }

  const date = new Date(dateArg)
  const unix = date.getTime()
  const utc = date.toUTCString()

  if (utc == 'Invalid Date') {
    return {error: utc}
  } else {
    return { unix, utc }
  }
}

module.exports = toTimestampJson
