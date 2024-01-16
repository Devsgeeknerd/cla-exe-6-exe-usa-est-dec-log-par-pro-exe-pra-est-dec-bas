let n1: number = 5;
let n2: number = 7;
let n3: number = 8;
let n4: number = 6;

let mediaNotas: number = (n1 + n2 + n3 + n4) / 4;

if (mediaNotas >= 6) {
  console.log(
    "Parabéns, você foi aprovado! Sua média final é de " + mediaNotas
  );
} else {
  console.log(
    "Infelizmente você não atingiu a média mínima, sua média foi de " +
      mediaNotas
  );
}
