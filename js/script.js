function convertTemperature() {
  var temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  var unit = document.getElementById("unitSelect").value;
  var result = document.getElementById("result");
  var explanation = document.getElementById("explanation");

  if (isNaN(temperature)) {
    result.textContent =
      "Anda belum memasukkan temperatur suhu. Silahkan masukkan terlebih dahulu.";
    explanation.textContent = "";
    return;
  }

  var convertedTemperature;
  var explanationText;

  if (unit === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    explanationText =
      "Cara Perhitungan: (" +
      temperature +
      " * 9/5) + 32 = " +
      convertedTemperature.toFixed(2) +
      " Fahrenheit.";
  } else {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    explanationText =
      "Cara Perhitungan: (" +
      temperature +
      " - 32) * 5/9 = " +
      convertedTemperature.toFixed(2) +
      " Celsius.";
  }

  result.textContent = convertedTemperature.toFixed(2);
  explanation.textContent = explanationText;
}

function resetForm() {
  document.getElementById("temperatureInput").value = "";
  document.getElementById("unitSelect").value = "celsius";
  document.getElementById("result").textContent = "";
  document.getElementById("explanation").textContent = "";
}

function reverseUnit() {
  var unitSelect = document.getElementById("unitSelect");
  if (unitSelect.value === "celsius") {
    unitSelect.value = "fahrenheit";
  } else {
    unitSelect.value = "celsius";
  }
}
