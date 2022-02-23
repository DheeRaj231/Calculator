"use strict";

// console.log(document.querySelector(".ip").textContent);
// document.querySelector(".ans").textContent = "Your Percentage is 76.5";
const number = 9.5;
// console.log(number);

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  const sgpa = Number(document.querySelector(".ip").value);
  // console.log(typeof sgpa);

  if (!sgpa) {
    alert("There is no Input�");
  } else {
    let ans = sgpa * number;
    ans = ans.toFixed(2);
    // console.log(ans);
    document.querySelector(
      ".ans"
    ).textContent = `Your Percentage is ${ans}% �`;
  }
});
