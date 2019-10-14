# API Project: Timestamp Microservice for freeCodeCamp

## User stories:

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`.
2. A date string is valid if it can be successfully parsed by
   `new Date(date_string)` (JS). Note that unix timestamp needs to be an
   **integer** (not a string) specifying **milliseconds**. The date string is
   assumed to be compliant with ISO-8601.
3. If the date string is **empty** it should use the current timestamp.
4. If the date string is **valid** the API returns a JSON that looks like
   `{"unix": <date.getTime()>, "utc": <date.toUTCString()>}`.
5. If the date string is **invalid** the API returns
   `{"unix": null, "utc": "Invalid Date"}`.

## Example usage:

- `/api/timestamp/2015-12-15`
- `/api/timestamp/1450137600000`
    - `{ "unix": 1450137600, "natural": "December 15, 2015" }`
