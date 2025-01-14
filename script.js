import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');

const validarcpf = new ValidarCpf(cpf).iniciar();

console.log(validarcpf);