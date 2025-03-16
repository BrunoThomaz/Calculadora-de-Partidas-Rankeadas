let saldoVitorias = 0
let vitorias = 10
let derrotas = 2
let nivel = ""
const errMsg = "Erro na Classificação de Nível."

function calculaNivel (vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas
  if (typeof(vitorias) != 'number' || typeof(derrotas) != 'number') {
      return 'Não foi possível calcular o nível'
  }

  if (saldoVitorias <=10) {
    nivel = "Ferro"
  } else if ( 11 <= saldoVitorias && saldoVitorias <= 20) {
    nivel = "Bronze"
  } else if ( 21 <= saldoVitorias && saldoVitorias <= 50) {
    nivel = "Prata"
  } else if ( 51 <= saldoVitorias && saldoVitorias <= 80) {
    nivel = "Ouro"
  } else if ( 81 <= saldoVitorias && saldoVitorias <= 90) {
    nivel = "Diamante"
  } else if ( 91 <= saldoVitorias && saldoVitorias <= 100) {
    nivel = "Lendário"
  } else if ( 101 <= saldoVitorias) {
    nivel = "Imortal"
  }

  if (nivel != "") {
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`
  } else {
    console.log(errMsg)
  }
}
msg = calculaNivel(vitorias, derrotas)
console.log(msg)
