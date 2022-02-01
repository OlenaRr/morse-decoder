const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = "";
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i,i+10);
        for (let k = 0; k < letter.length; k++) {
            if (letter[k] !== '0') {letter = letter.slice(k,10); break;}
        }
        letter =  letter.replaceAll('10','.').replaceAll('11','-');
        if (MORSE_TABLE[letter] === undefined) {res += ' ';}
        else {res += MORSE_TABLE[letter];}
    }
    return res
} 

module.exports = {
    decode
}