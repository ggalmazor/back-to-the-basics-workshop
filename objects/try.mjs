class Try {
  constructor(fn) {
    this.fn = fn;
  }

  static of(fn) {
    return new Try(fn);
  }

  map(mapper, default_value) {
    try {
      const resultado = this.fn();
      return resultado;
    } catch (e) {
      return default_value
    }
  }
}

const try1 = new Try(() => "cocotero");
const try2 = new Try(() => {
  throw new Error("boom!");
});

function mostrar(fn_que_produce_resultado) {

}

const resultado = Try.of(servicio.metodo()).map(resultado => `El dato es: ${resultado}`, "La funcion ha petado");


class Controller {
  cocotero() {
    try {
      const s1 = servicio1.metodo();
      const s2 = servicio2.metodo();
      const s3 = servicio3.metodo();
      render(vista, {s1, s2, s3})
    }catch (Chuchu e) {
      render(vista, {s1: "no hay dato en servicio1", s2, s3})
    }catch (Blabla e) {
      render(vista, {s1, s2: "no hay dato en servicio2", s3})
    }catch (Cocotero e) {
    }
  }

  cocotero2() {
    const s1 = Try.of(servicio1.metodo()).map(r => r, "no hay dato en servicio1")
    const s2 = Try.of(servicio2.metodo()).map(r => r, "no hay dato en servicio2")
    const s3 = Try.of(servicio2.metodo()).map(r => r, "no hay dato en servicio3")
    render(vista, {s1, s2, s3})
  }
}













