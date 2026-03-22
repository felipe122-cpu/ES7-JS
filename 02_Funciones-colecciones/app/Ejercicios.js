print = "Hola mundo";

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function restar(a, b) {
  return a - b;
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function greet(name = "Invitado") {
  return `Hola, ${name}!`;
}

const values = [10, 20, 30, 40, 50];
const doubled = values.map((x) => x * 2);
const expenses = [
  { description: "Alquiler", amount: 1200 },
  { description: "Comida", amount: 300 },
  { description: "Transporte", amount: 150 },
  { description: "Entretenimiento", amount: 200 },
  { description: "Comida", amount: 100 },
];

const food = expenses.filter((e) => e.description === "Comida");
const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
const transportExpense = expenses.find((e) => e.description === "Transporte"); 

printReport(expenses);

function printReport(expenses) {
  const stats = calStats(expenses);
  const max = maxExpense(expenses);

  console.group("Reporte de gastos");
  console.log("Resumen:");
  console.table([
    {
      Total: formatCop(stats.total),
      Promedio: formatCop(stats.promedio),
      Maximo: formatCop(stats.maximo),
      Minimo: formatCop(stats.minimo),
    },
  ]);
  console.log("Gastos más altos:");
  console.table([
    {
      id: max.id,
      fecha: max.fecha,
      categoria: max.categoria,
      monto: formatCop(max.monto),
    },
  ]);
  console.groupEnd();
}