class Verse {
  constructor(verse, text) {
    this.verse = verse;
    this.text = text;
  }
}

const input = ""

const data = input
  .replaceAll(/([ \t][0-9]?[0-9][a-zA-Z“(‘])/g, (target) => '||' + target.trim())
  .split('||')
  .map((record) => {
    return new Verse(
      verse = Number(record.match(/^(\d*)/)[0]),
      text = record.match(/^(\d*)(.*)/)[2]
    );
  });

data.forEach((row) => {
  console.log(JSON.stringify(row) + ',');
})

// data.forEach(d => {
//   if (d?.trim().length > 0) {
//     console.log(d.trim().replace(/\d+/, (verseNumber) => {
//       return '{\n\t\"verse\": ' + verseNumber + ', \n\t\"text\": \"';
//     }).replace(/\s/, (verseText) => {
//       return verseText;
//     }) + '\"\n},');
//   }
// })
