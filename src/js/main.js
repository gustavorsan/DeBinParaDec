const output = document.getElementById('output');
const message = document.getElementById('message');
const input = document.getElementById('binary-input');

let timeoutId;

input.focus()

function convertBinary(num){
  // parseint(num,2)
  let len = num.length;
  var sum = 0;
  //a cada iteração o fator é multiplicado por 2 e depois multiplicado pelo item em ordem decrescente
  for (var i  = 0 , fac = 1 ; i < len; ++i , fac *= 2){   
    sum += fac * num[len - 1 - i]
  }
  return sum
}

function validateBinary(num){
  var reg = /^[01]+$/g
  if (!num.match(reg)) {
    input.value = input.value.slice(0, -1);
    message.innerText = `Insira apenas 0 ou 1`
    setTimeout(async()=>{
      message.innerText = ``
    },1500)
  }
}

function inputHandler(e){
  
  validateBinary(e.target.value)

  if(timeoutId){
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(async () => {
   let decimalNumber = convertBinary(e.target.value)
   output.innerText = `Decimal: ${decimalNumber}`
  },1200)
}

input.addEventListener('input', inputHandler);


