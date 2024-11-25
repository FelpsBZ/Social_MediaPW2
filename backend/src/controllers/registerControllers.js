
const tryRegister = require('../models/login/register');

const registerUser = async (req, res) => {
    try {
       const { nome, email, senha } = req.body;
    

        const result =  tryRegister.registerUser(nome, email, senha);
        
        return res.status(201).json({
            message: 'usuario cadastrado com sussesso.',
            reserva: result
        });
    } catch (err) {
        console.error('Erro ao cadastrar:', err);
        return res.status(500).json({ error: 'Erro ao cadastrar.' });
    }
};

module.exports = {
    registerUser
};