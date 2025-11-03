let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartEl = document.getElementById("heartCount");
const coinEl = document.getElementById("coinCount");
const copyEl = document.getElementById("copyCount");
const historyEl = document.getElementById("callHistory");

// Heart Increase
function increaseHeart() {
  heartCount++;
  heartEl.innerText = heartCount;
}

// Copy Function
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert("Copied: " + number);
    copyCount++;
    copyEl.innerText = copyCount;
  });
}

// Call Function
function makeCall(service, number) {
  if (coinCount < 20) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }
  coinCount -= 20;
  coinEl.innerText = coinCount;

  let time = new Date().toLocaleTimeString();
  alert(`Calling ${service} at ${number}`);

  let li = document.createElement("li");
  li.textContent = `${service} (${number}) - ${time}`;
  historyEl.appendChild(li);
}

// Clear History
function clearHistory() {
  historyEl.innerHTML = "";
}
