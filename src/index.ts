import Ave from "./Ave";
import Cachorro from "./Cachorro";
import Clinica from "./Clinica";
import Consulta from "./Consulta";
import Gato from "./Gato";
import Recepcionista from "./Recepcionista";
import Veterinario from "./Veterinario";

const tutorCarlos = "Carlos Silva";
const rex = new Cachorro("Rex", 4, tutorCarlos);
const mimi = new Gato("Mimi", 2, tutorCarlos);
const loro = new Ave("Loro", 5, tutorCarlos);

const draAna = new Veterinario("Ana Paula", "veterinário", 5000);
const joao = new Recepcionista("João Pedro", "recepcionista", 2000);
const clinicaMarta = new Clinica("Clínica Veterinária Dona Marta");

clinicaMarta.adicionarFuncionario(draAna);
clinicaMarta.adicionarFuncionario(joao);
clinicaMarta.cadastrarAnimal(rex);
clinicaMarta.cadastrarAnimal(mimi);
clinicaMarta.cadastrarAnimal(loro);

joao.agendarAtendimento(rex, new Date());
joao.agendarAtendimento(mimi, new Date());

const consulta = new Consulta(rex, draAna, new Date(), "Check-up anual");
draAna.prescreverTratamento(rex, "Vitamina C por 10 dias");
clinicaMarta.registrarConsulta(consulta);

clinicaMarta.listarAnimaisECuidados();
clinicaMarta.exibirFolhaBonus();

draAna.atualizarSalario(5500);
console.log(` \ Novo salário da Dra. Ana: R$ ${draAna.salario.toFixed(2)}`);
