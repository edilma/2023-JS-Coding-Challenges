function findNeedle(haystack) {
  const needle = "needle";
  if (haystack.includes("needle")) {
    index = haystack.indexOf(needle);
    return `found the needle at position ${index}`;
  } else {
    return undefined;
  }
}

const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const needle = "needle";
