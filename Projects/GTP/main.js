const [numzero, numone, numtwo, numthree, numfour, numfive] = [Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString()];
const [n1c, n2c, n3c, n4c, n5c, n6c] = [document.getElementById('n1'), document.getElementById('n2'), document.getElementById('n3'), document.getElementById('n4'), document.getElementById('n5'), document.getElementById('n6')]; 
const [n1a, n2a, n3a, n4a, n5a, n6a] = [document.getElementById('na1'), document.getElementById('na2'), document.getElementById('na3'), document.getElementById('na4'), document.getElementById('na5'), document.getElementById('na6')];
const pass = numzero + numone + numtwo + numthree + numfour + numfive;
const passc = parseInt(pass)
const resultwp = document.getElementById('resultwp')
const result = document.getElementById('result')
const resultsd = document.getElementById('resultsd')


function n1() {
    n1c.style.display = "block";n2c.style.display = "none";n3c.style.display = "none";n4c.style.display = "none";n5c.style.display = "none";n6c.style.display = "none";n1a.style.display = "block";n2a.style.display = "none";n3a.style.display = "none";n4a.style.display = "none";n5a.style.display = "none";n6a.style.display = "none";
}
function n2() {
    n1c.style.display = "none";n2c.style.display = "block";n3c.style.display = "none";n4c.style.display = "none";n5c.style.display = "none";n6c.style.display = "none";n1a.style.display = "none";n2a.style.display = "block";n3a.style.display = "none";n4a.style.display = "none";n5a.style.display = "none";n6a.style.display = "none";
}
function n3() {
    n1c.style.display = "none";n2c.style.display = "none";n3c.style.display = "block";n4c.style.display = "none";n5c.style.display = "none";n6c.style.display = "none";n1a.style.display = "none";n2a.style.display = "none";n3a.style.display = "block";n4a.style.display = "none";n5a.style.display = "none";n6a.style.display = "none";
}
function n4() {
    n1c.style.display = "none";n2c.style.display = "none";n3c.style.display = "none";n4c.style.display = "block";n5c.style.display = "none";n6c.style.display = "none";n1a.style.display = "none";n2a.style.display = "none";n3a.style.display = "none";n4a.style.display = "block";n5a.style.display = "none";n6a.style.display = "none";
}
function n5() {
    n1c.style.display = "none";n2c.style.display = "none";n3c.style.display = "none";n4c.style.display = "none";n5c.style.display = "block";n6c.style.display = "none";n1a.style.display = "none";n2a.style.display = "none";n3a.style.display = "none";n4a.style.display = "none";n5a.style.display = "block";n6a.style.display = "none";
}
function n6() {
    n1c.style.display = "none";n2c.style.display = "none";n3c.style.display = "none";n4c.style.display = "none";n5c.style.display = "none";n6c.style.display = "block";n1a.style.display = "none";n2a.style.display = "none";n3a.style.display = "none";n4a.style.display = "none";n5a.style.display = "none";n6a.style.display = "block";
}

function chk4num1() {
  if (n1c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n1c.value) == numzero) {
    resultsd.innerHTML = "You guessed num1.";
  } else if (Number(n1c.value) < numzero) {
    resultsd.innerHTML = n1c.value + " is less than num1";
  } else if (Number(n1c.value) > numzero) {
    resultsd.innerHTML = n1c.value + " is more than num1";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}
function chk4num2() {
  if (n2c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n2c.value) == numone) {
    resultsd.innerHTML = "You guessed num2.";
  } else if (Number(n2c.value) < numone) {
    resultsd.innerHTML = n2c.value + " is less than num2";
  } else if (Number(n2c.value) > numone) {
    resultsd.innerHTML = n2c.value + " is more than num2";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}
function chk4num3() {
  if (n3c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n3c.value) == numtwo) {
    resultsd.innerHTML = "You guessed num3.";
  } else if (Number(n3c.value) < numtwo) {
    resultsd.innerHTML = n3c.value + " is less than num3";
  } else if (Number(n3c.value) > numtwo) {
    resultsd.innerHTML = n3c.value + " is more than num3";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}
function chk4num4() {
  if (n4c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n4c.value) == numthree) {
    resultsd.innerHTML = "You guessed num4.";
  } else if (Number(n4c.value) < numthree) {
    resultsd.innerHTML = n4c.value + " is less than num4";
  } else if (Number(n4c.value) > numthree) {
    resultsd.innerHTML = n4c.value + " is more than num4";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}
function chk4num5() {
  if (n5c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n5c.value) == numfour) {
    resultsd.innerHTML = "You guessed num5.";
  } else if (Number(n5c.value) < numfour) {
    resultsd.innerHTML = n5c.value + " is less than num5";
  } else if (Number(n5c.value) > numfour) {
    resultsd.innerHTML = n5c.value + " is more than num5";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}

function chk4num6() {
  if (n6c.value.trim() == "") {
    resultsd.innerHTML = "Please enter a digit.";
  } else if (Number(n6c.value) == numfive) {
    resultsd.innerHTML = "You guessed num6.";
  } else if (Number(n6c.value) < numfive) {
    resultsd.innerHTML = n6c.value + " is less than num6";
  } else if (Number(n6c.value) > numfive) {
    resultsd.innerHTML = n6c.value + " is more than num6";
  } else {
    resultsd.innerHTML = "Please enter a digit.";
  }
}

function check() {
  if (document.getElementById('passwordinput').value.trim() == "") {
    result.innerHTML = "Please enter a digit."
  } else {
    if (document.getElementById('passwordinput').value.length == 6) {
     if (Number(document.getElementById('passwordinput').value) == pass) {
          result.innerHTML = "Correct Password!"
      } else if (Number(document.getElementById('passwordinput').value) != pass) {
          result.innerHTML = "Wrong Password!"
      }
    } else if (isNaN(document.getElementById('passwordinput').value) == true) {
      result.innerHTML = "Please enter a digit."
    } else if (document.getElementById('passwordinput').value.length < 6) {
      result.innerHTML = "Please enter a 6-Digit password."
    }
  }
}


function gtwn() {
    document.getElementById('gtwn').style.display = 'block';
    document.getElementById('gen').style.display = 'none';
}

function gen() {
    document.getElementById('gen').style.display = 'block';
    document.getElementById('gtwn').style.display = 'none';
}

function boswn() {
  let inputValue = parseInt(document.getElementById('gtwnput').value);
  if (document.getElementById('gtwnput').value.length == 6) {
    if (inputValue > passc) {
        resultwp.innerHTML = inputValue + " is more than the number";
    } else if (inputValue < passc) {
        resultwp.innerHTML = inputValue + " is less than the number";
    } else if (inputValue == passc) {
        resultwp.innerHTML = "You got the right password!"
    }
  } else if (isNaN(inputValue) == true) {
    resultwp.innerHTML = "Please enter a digit"
  } else if (document.getElementById('gtwnput').value.length < 6) {
      resultwp.innerHTML = "Please enter a 6-Digit password."
  }
}