const date = "2026-08-06";
const dateRegex = /(\d{4}) - (\d{2}) - (\d{2})/;
const match = date.match(dateRegex);
console.log(match[1], match[2], match[3]);      // 2026 08 06

// Named groups (ES2018)
const namedRegex = /(?<year>\d{4}) - (?<month>\d{2}) - (?<day>\d{2})/;
const m = date.match(namedRegex);
console.log(m.groups.year, m.groups.month, m.groups.day);

