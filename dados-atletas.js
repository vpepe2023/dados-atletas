class Atleta {
    constructor(Nome, Idade, Peso, Altura, Notas) {
        this.Nome = Nome;
        this.Idade = Idade;
        this.Peso = Peso;
        this.Altura = Altura;
        this.Notas = Notas;
    }
  
    get obtemNomeAtleta() {return this.Nome;}
    get obtemIdadeAtleta() {return this.Idade;}
    get obtemPesoAtleta() {return this.Peso;}
    get obtemAlturaAtleta() {return this.Altura;}
    get obtemNotasAtleta() {return this.Notas.toString();}
    get obtemCategoria() {return this.calculaCategoria();}
    get obtemIMC() {return this.definirIMC();}
    get obtemMediaValida() {return this.calculaMediaValida();}
  
    calculaCategoria() {
      if (this.Idade >= 9 && this.Idade < 11) {return "Infantil"}
      else if (this.Idade == 12 || this.Idade == 13) {return "Juvenil"}
      else if (this.Idade == 14 || this.Idade == 15) {return "Intermediário"}
      else if (this.Idade >= 16 && this.Idade <=30) {return "Adulto"}
      else {return "Sem categoria"}
      }
  
    definirIMC() {
      return +(this.Peso / (this.Altura * this.Altura)).toFixed(2)
    }
  
    calculaMediaValida() {
      let notasCortadas = this.Notas.sort().slice(1,4)
      return (notasCortadas.reduce(function (total, atual) {return total + atual}, 0) / notasCortadas.length).toFixed(2)
    }
  }
  
  const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
  
  const atleta1Completo = {
  Nome: atleta1.obtemNomeAtleta,
  Idade: atleta1.obtemIdadeAtleta,
  Altura: atleta1.obtemAlturaAtleta,
  Peso: atleta1.obtemPesoAtleta,
  Notas: atleta1.obtemNotasAtleta,
  Categoria: atleta1.obtemCategoria,
  IMC: atleta1.obtemIMC,
  Media: atleta1.obtemMediaValida
  }
  
  console.log(atleta1Completo)
   