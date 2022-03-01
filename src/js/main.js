const output = document.getElementById('output');
const input = document.getElementById('binary-input');

let timeoutId;

input.focus()

function convertBinary(num){
  // parseint(num,2)
  let len = num.length;
  var sum = 0;
  for (var i  = 0 , fac = 1 ; i < len; ++i , fac *= 2){   
    sum += fac * num[len - 1 - i]
  }
  return sum
}

function validateBinary(num){
  var reg = /^[01]+$/g
  if (!num.match(reg)) {
    input.value = input.value.slice(0, -1);
  }
}

function inputHandler(e){
  
  validateBinary(e.target.value)

  if(timeoutId){
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(async () => {
   let val = convertBinary(e.target.value)
   output.innerText = val
  },500)
}

input.addEventListener('input', inputHandler);


