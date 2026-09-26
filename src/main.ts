import { Livro } from './classes/aula1/Livro.ts';
import { Biblioteca } from './classes/aula2/Biblioteca.ts';
import { Contador } from './classes/aula1/Contador.ts';
import { Vampiro } from './classes/aula2/Vampiro.ts';
import { Professor } from './classes/aula3/Professor.ts';
import { Coordenador } from './classes/aula3/Coordenador.ts';

const professor = new Professor('01', 'Daniel', 'danielvalmeida@gmail.com', 100);
const coordenador = new Coordenador('01', 'Daniel', 'danielvalmeida@gmail.com', 100);

coordenador.calcularAulas(2, 5);