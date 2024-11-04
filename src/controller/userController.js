const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

let users = [{
    name: 'camila',
    email: 'cfzunigamunoz@gmail.com',
    password: '1243'
}];

const registerUser = async (req, res) => {
    const { name, email, password} = req.body;

    const existingUser = users.find(user => user.email === email);
    console.log(existingUser)
    if (existingUser){
        return res.status(400).json('Usuario existente');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1 , name, email, hashedPassword, dateCreater: new Date() };
    users.push(newUser);
    console.log(users);
    res.status(201).json('Usuario creado con éxito');


};

const loginUser = async ( req, res) => {
    const { email, password } = req.body;
    const user = users.find( user => user.email === email );
    if (!user) { return res.status(400).json('Email inválido')};

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch){ return res.status(400).json('Credenciales inválidas')};

    const token = jwt.sign({id: user.id},'jwt secret', {expiresIn: "1h"});
    res.json({token});

};

module.exports = {
    registerUser,
    loginUser,
}