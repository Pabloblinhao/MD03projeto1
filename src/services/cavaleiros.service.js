const cavaleiros = [
    {
      id: 1,
      nome: 'Saga de Gêmeos',
      idade: 35,
      descricao:
        'É o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física.',
      foto: 'assets/images/acai-com-leite-condensado.png',
      habilidade: 'consegue atacar com poder suficiente para destruir estrelas ao usar a técnica Explosão Galática.',
      armadura:'Ouro'
    },
    {
      id: 2,
      nome: 'Algol de Perseu',
      idade: 25,
      descricao:
        'É um Cavaleiros de Prata do século XX. É o nome da estrela beta da constelação de Perseus (Algol), ela representa a cabeça da Medusa górgona da lenda do herói Perseus, Demonstra uma notável confiança em seu poder. .',
      foto: 'assets/images/acai-com-leite-condensado.png',
      habilidade: 'como sua habilidade é transformar as pessoas em pedra através da visão, ele se torna extremamente letal.',
      armadura:'Prata'
    },
    {
      id: 3,
      nome: 'Shiryu de Dragão',
      idade: 17,
      descricao:
        'Shiryu de Dragão é um Cavaleiro de Bronze do século XX, incumbido com a missão de proteger a deusa Atena. Teve seu treinamento realizado pelo Mestre Ancião nos Cinco Picos Antigos de Rozan, na China. ',
      foto: 'assets/images/acai-com-leite-condensado.png',
      habilidade: 'Cólera do Dragão, é basicamente um soco direto no adversário, com um cosmo parecido como uma rajada, se esta habilidade é acertada no oponente o mesmo é levado pelos ares.',
      armadura:'Bronze'
    },
  ];
  
 const findAllCavaleirosService = () => {
    return cavaleiros;
 }; 

 const findByIdCavaleirosService = (id) => {
    return cavaleiros.find((cavaleiro) => cavaleiro.id === id);
 };

 
 const createCavaleiroService = (newCavaleiro) => {
    const newId = cavaleiros.length + 1;
    newCavaleiro.id = newId;
    cavaleiros.push(newCavaleiro);
    return newCavaleiro;
};


 const updateCavaleiroService = (id, cavaleiroEdited) => {
    cavaleiroEdited['id'] = id;
    const cavaleiroIndex = cavaleiros.findIndex((cavaleiro) => cavaleiro.id == id);
    cavaleiros[cavaleiroIndex] = cavaleiroEdited;
    return cavaleiroEdited;
 };


 const deleteCavaleiroService = (id) => {
    const cavaleiroIndex = cavaleiros.findIndex((cavaleiro) => cavaleiro.id == id);
    return cavaleiros.splice(cavaleiroIndex, 1)

 };

 module.exports = {
    findAllCavaleirosService,
    findByIdCavaleirosService,
    createCavaleiroService,
    updateCavaleiroService,
    deleteCavaleiroService,
 }