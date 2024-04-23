function convertTemperature() {
  var initialTemperature = parseFloat(
    document.getElementById("initialTemperatureInput").value
  );
  var initialUnit = document.getElementById("initialUnitSelect").value;
  var finalUnit = document.getElementById("finalUnitSelect").value;
  var result = document.getElementById("result");
  var explanation = document.getElementById("explanation");

  if (isNaN(initialTemperature)) {
    result.textContent =
      "Anda belum memasukkan suhu awal. Silakan masukkan terlebih dahulu.";
    explanation.textContent = "";
    return;
  }

  var convertedTemperature;
  var explanationText;

  if (initialUnit === finalUnit) {
    result.textContent =
      initialTemperature +
      "° " +
      finalUnit.charAt(0).toUpperCase() +
      finalUnit.slice(1);
    explanation.textContent =
      "Tidak ada konversi yang diperlukan karena satuan suhu awal dan akhir sama.";
    return;
  }

  if (initialUnit === "celsius") {
    if (finalUnit === "fahrenheit") {
      convertedTemperature = (initialTemperature * 9) / 5 + 32;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " * 9/5) + 32 = " +
        convertedTemperature.toFixed(2) +
        "° Fahrenheit.";
    } else if (finalUnit === "kelvin") {
      convertedTemperature = initialTemperature + 273.15;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " + 273.15 = " +
        convertedTemperature.toFixed(2) +
        "° Kelvin.";
    } else if (finalUnit === "reaumur") {
      convertedTemperature = (initialTemperature * 4) / 5;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " * 4/5 = " +
        convertedTemperature.toFixed(2) +
        "° Reaumur.";
    }
  } else if (initialUnit === "fahrenheit") {
    if (finalUnit === "celsius") {
      convertedTemperature = ((initialTemperature - 32) * 5) / 9;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " - 32) * 5/9 = " +
        convertedTemperature.toFixed(2) +
        "° Celsius.";
    } else if (finalUnit === "kelvin") {
      convertedTemperature = ((initialTemperature - 32) * 5) / 9 + 273.15;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " - 32) * 5/9 + 273.15 = " +
        convertedTemperature.toFixed(2) +
        "° Kelvin.";
    } else if (finalUnit === "reaumur") {
      convertedTemperature = ((initialTemperature - 32) * 4) / 9;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " - 32) * 4/9 = " +
        convertedTemperature.toFixed(2) +
        "° Reaumur.";
    }
  } else if (initialUnit === "kelvin") {
    if (finalUnit === "celsius") {
      convertedTemperature = initialTemperature - 273.15;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " - 273.15 = " +
        convertedTemperature.toFixed(2) +
        "° Celsius.";
    } else if (finalUnit === "fahrenheit") {
      convertedTemperature = ((initialTemperature - 273.15) * 9) / 5 + 32;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " - 273.15) * 9/5 + 32 = " +
        convertedTemperature.toFixed(2) +
        "° Fahrenheit.";
    } else if (finalUnit === "reaumur") {
      convertedTemperature = ((initialTemperature - 273.15) * 4) / 5;
      explanationText =
        "Cara Perhitungan: (" +
        initialTemperature +
        " - 273.15) * 4/5 = " +
        convertedTemperature.toFixed(2) +
        "° Reaumur.";
    }
  } else if (initialUnit === "reaumur") {
    if (finalUnit === "celsius") {
      convertedTemperature = (initialTemperature * 5) / 4;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " * 5/4 = " +
        convertedTemperature.toFixed(2) +
        "° Celsius.";
    } else if (finalUnit === "fahrenheit") {
      convertedTemperature = (initialTemperature * 9) / 4 + 32;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " * 9/4 + 32 = " +
        convertedTemperature.toFixed(2) +
        "° Fahrenheit.";
    } else if (finalUnit === "kelvin") {
      convertedTemperature = (initialTemperature * 5) / 4 + 273.15;
      explanationText =
        "Cara Perhitungan: " +
        initialTemperature +
        " * 5/4 + 273.15 = " +
        convertedTemperature.toFixed(2) +
        "° Kelvin.";
    }
  }

  result.textContent =
    convertedTemperature.toFixed(2) +
    "° " +
    finalUnit.charAt(0).toUpperCase() +
    finalUnit.slice(1);
  explanation.textContent = explanationText;
}
