document.getElementById("matrixForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;

  if (!name || !birthdate) {
    alert("Будь ласка, введіть ім’я та дату народження");
    return;
  }

  // 🔢 ТУТ будуть формули для обчислення матриці
  const numbers = calculateMatrix(name, birthdate);

  // Показуємо результат
  document.getElementById("result").innerHTML = `
    <h2>Результат для ${name}</h2>
    <p>Дата народження: ${birthdate}</p>
    <pre>${JSON.stringify(numbers, null, 2)}</pre>
  `;
});

function calculateMatrix(name, birthdate) {
  // приклад: розрахунок по даті народження
  const digits = birthdate.replace(/-/g, "").split("").map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);

  return {
    digits: digits,
    sum: sum,
    nameLength: name.length
  };
}
