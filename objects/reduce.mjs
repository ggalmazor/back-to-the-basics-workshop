const json = [
  {concepto: 'foo 1', valor_unitario: 10, unidades: 4, iva: ".21"},
  {concepto: 'foo 2', valor_unitario: 20, unidades: 3, iva: ".10"},
  {concepto: 'foo 3', valor_unitario: 30, unidades: 2, iva: ".5"},
  {concepto: 'foo 4', valor_unitario: 40, unidades: 1, iva: ".21"}
];

let total = 0;
for (let linea of json) {
  const total_linea = linea.valor_unitario * linea.unidades * (1 + linea.iva);
  console.log(linea)
  console.log(`Total linea: ${total_linea}`);
  total += total_linea;
}

let total2 = json.reduce((running_total, linea) => {
  const total_linea = linea.valor_unitario * linea.unidades * (1 + linea.iva);
  return running_total + total_linea;
}, 0)

for (let linea of json) {
  resumenFactura.lineas++;
  const total_linea = linea.valor_unitario * linea.unidades * (1 + parseFloat(linea.iva));
  resumenFactura.ivas[linea.iva] += total_linea;
  resumenFactura.total += total_linea;
}

let resumenFactura = {
  total: 0,
  lineas: 0,
  ivas: {
    ".21": 0,
    ".10": 0,
    ".5": 0,
  }
};
json.reduce((resumen, linea) => {
  resumenFactura.lineas++;
  const total_linea = linea.valor_unitario * linea.unidades * (1 + parseFloat(linea.iva));
  resumenFactura.ivas[linea.iva] += total_linea;
  resumenFactura.total += total_linea;
}, resumenFactura)

class Factura {
  constructor(lineas) {
    this.lineas = lineas;
  }
}

class Linea {
  constructor(concepto, valor_unitario, cantidad, iva) {
    this.concepto = concepto;
    this.valor_unitario = valor_unitario;
    this.cantidad = cantidad;
    this.iva = iva;
  }
}

function fusionar_dos_facturas(a, b) {
  return new Factura(a.lineas.concat(b.lineas));
}

const factura_neutra = new Factura([])

json.map(linea => {
  return new Factura([new Linea(
    linea.concepto,
    linea.valor_unitario,
    linea.cantidad,
    linea.iva
  )]);
}).reduce(fusionar_dos_facturas, factura_neutra)



