
function unlock() {
  const code = document.getElementById("passcode").value;
  if (code === "inshutrader25") {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("main-dashboard").style.display = "block";
  } else {
    alert("Incorrect passcode!");
  }
}

function generateSignal() {
  const result = document.getElementById("signal-result");
  result.innerHTML = "<h3>Signal: BUY 📈<br/>Confidence: 93%</h3><p>Strategy: RSI + MACD + MA</p>";
}
