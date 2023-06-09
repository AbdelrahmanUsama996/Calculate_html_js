var input1 = document.getElementById('inp1');
var input2 = document.getElementById('inp2');
var switches = document.getElementById('operators');
var submit_btn = document.getElementById('submit_btn');
var output = document.getElementById('output');
submit_btn.onclick = function () {
  switch (switches.value) {
    case '+':
      var result = parseInt(input1.value) + parseInt(input2.value);
      output.value = result;
      break;
    case '-':
      var result = input1.value - input2.value;
      output.value = result;
      break;
    case '*':
      var result = input1.value * input2.value;
      output.value = result;
      break;
    case '/':
      var result = input1.value / input2.value;
      output.value = result;
      break;
  }
};
