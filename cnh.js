const idade = 18;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = Maioridade && possuiCNH;
console.log('Pode viajar sozinho?', podeDirigir)

const podeViajarSozinho = Maioridade || possuiCNH;
console.log ('Pode viajar sozinho?', podeViajarSozinho);

const precisaDeAcompanhante = !Maioridade
console.log('Preciso de Acompanhante?', precisaDeAcompanhante);