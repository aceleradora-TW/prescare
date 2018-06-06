<<<<<<< 0b31603be60ce589e88fa9244f47819a453d203d
const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
=======
<<<<<<< a2c8a15c26d4394979183bd1d933568e4512b1f7
<<<<<<< c2998168d9853e6436e0d63e75b3b966cbf2160b
=======
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
const listaAcolhidos = require('./acolhido/list')
const home = require('./application/home')
const about = require('./application/about')
const acolhido = require('../routes/acolhido/get')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')

const user = require('../mocks/user')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')

const createPrescricao = require('./prescricao/create')
const editPrescricao = require('./prescricao/edit')
const getPrescricao = require('./prescricao/get')
const destroyPrescricao = require('./prescricao/destroy')
const updatePrescricao = require('./prescricao/update')
<<<<<<< a2c8a15c26d4394979183bd1d933568e4512b1f7
=======
const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
<<<<<<< 262c4491b7590eaf8e244a04e2b5a10ca05903c6
>>>>>>> Removendo roteamento do app e utilizando routes index para isso
=======
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23

const createCuidado = require('./cuidado/create')
const editCuidado = require('./cuidado/edit')
const getCuidado = require('./cuidado/get')
const updateCuidado = require('./cuidado/update')

<<<<<<< 0b31603be60ce589e88fa9244f47819a453d203d
const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
=======
<<<<<<< a2c8a15c26d4394979183bd1d933568e4512b1f7
=======
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
const cuidadoRoutes = require('./cuidado')

const allRoutes = models => ({
<<<<<<< 0b31603be60ce589e88fa9244f47819a453d203d
=======
<<<<<<< c2998168d9853e6436e0d63e75b3b966cbf2160b
=======

const allRoutes = models => ({
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  home: home(),
  about: about(user),
  acolhido: acolhido(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica: farmaceutica(dadosFarmacia),

  createPrescricao: createPrescricao(models.Prescricao),
  editPrescricao: editPrescricao(models.Prescricao),
  getPrescricao: getPrescricao(models.Prescricao),
  destroyPrescricao: destroyPrescricao(models.Prescricao),
  updatePrescricao: updatePrescricao(models.Prescricao),

  createCuidado: createCuidado(models.Cuidado),
  editCuidado: editCuidado(models.Cuidado),
  getCuidado: getCuidado(models.Cuidado),
  updateCuidado: updateCuidado(models.Cuidado)
<<<<<<< a2c8a15c26d4394979183bd1d933568e4512b1f7
=======
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)
<<<<<<< 0b31603be60ce589e88fa9244f47819a453d203d
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
=======
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
})

module.exports = allRoutes