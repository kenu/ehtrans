const ekmap = {
  's': 'ㄴ',
  'k': 'ㅏ',
  'a': 'ㅁ',
  'e': 'ㄷ',
  'm': 'ㅡ',
  'f': 'ㄹ',
  'd': 'ㅇ',
  'l': 'ㅣ',
  't': 'ㅅ',
  'o': 'ㅐ'
};

const ehtrans = {
  translate(enged) {
    let kored = '';
    enged.split('').forEach(e => {
      kored += ekmap[e];
    });
    return kored;
  }
};

export default ehtrans;
