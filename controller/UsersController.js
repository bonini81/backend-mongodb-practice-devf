// El indice se encarga de pedir archivos e importarlos
const { UsersService } = require('../services');

module.exports = {

  //CRUDs



//Create
  create: async (req, res) => {
    try {
      const user = await UsersService.create(req.body);
      res.status(201).send(user);
    }
    catch (error) {
      res.status(400).send({ message: 'Error creating user', err });
    }
     
  },

  //GET ALL
  find: async (req, res) => {

    try {
      const users = await UsersService.find();
      res.status(200).send(users);
    }
    
    catch (error) {
      res.status(404).send({ message: 'Users not found', err });
    }
      
  },
  

 //GET by ID
 findById: async (req, res) => {

  const { id } = req.params;

  try {
    const user = await UsersService.findById(id);
    res.status(200).send(user);
  }
  
  catch (error) {
    res.status(404).send({ message: 'Users not found', err });
  }
    
},


//Update by ID

findByIdAndUpdate: async (req, res) => {

  const { id } = req.params;
  const {body} = req;

  try {
    const user = await UsersService.findById(id);
    const updatedUser = await UsersService.update(user, body)
    res.status(200).send(updatedUser);

  }
  
  catch (error) {
  
    res.status(404).send({ message: 'Users not found', err });
  }

},
    

//Update by Delete, aqui cambiamos el estado del user de activo a falso

findByIdAndDelete: async (req, res) => {

  const { id } = req.params;

  try {
    const user = await UsersService.findById(id);
    const updatedUser = await UsersService.update(user, { is_active: false })
    res.status(204).send();

  }
  
  catch (error) {
  
    res.status(404).send({ message: 'Users not found', err });
  }


},


//User SignUp
signup: async (req, res) => {
  try {
    const user = await UsersService.create(req.body);
    res.status(201).send(user);
  }
  catch (error) {
    res.status(400).send({ message: 'Error creating user', err });
  }
   
},


}
