module.exports = function toReadable (number) {
 
    let num = number.toString();
    
  
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];  
  
    if (num.length === 1) {
      return ones[+(num[0])]
  }
  
  else if (num.length === 2) {
    if (num[0] === '1') {
      return tenToNineteen[+(num[1])];
    }
    else if(num[0] !== '1' && num[1] === '0') {
      return tens[+(num[0]) - 2];
    }
    else if (num[0] !== '1' && num[1] !== '0') {
      return tens[+(num[0]) - 2] + ' ' + ones[+(num[1])];
    }
  }
  
  else if (num.length === 3) {
    if (num[1] === '0' && num[2] === '0') {
      return hundreds[+(num[0]) - 1];
    }
    else if (num[1] === '0' && num[2] !== '0') {
      return hundreds[+(num[0]) - 1] + ' ' + ones[+(num[2])];
    }
    else if (num[1] === '1') {
      return hundreds[+(num[0]) - 1] + ' ' + tenToNineteen[+(num[2])];
    }
    else if (num[1] !== '1' && num[2] === '0') {
      return hundreds[+(num[0]) - 1] + ' ' + tens[+(num[1]) - 2];
    }
    else if (num[1] !== '1' && num[2] !== '0') {
      return hundreds[+(num[0]) - 1] + ' ' + tens[+(num[1]) - 2] + ' ' + ones[+(num[2])];
    }
  }
  }
