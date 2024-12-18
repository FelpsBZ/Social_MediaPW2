
const tryLogin = require('../models/login/login');

const velLogin = async (req, res) => {
    try {
       const { email, senha } = req.body;
    

        const result = await tryLogin.velUser(email, senha);
        
       
        if (result.length > 0) {
            res.status(200).json(result);
            
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
            
        }
        return result
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
    }
};

const getAll = async (req, res) => {
    try {
        const result = await tryLogin.getAll();
        
       
        if (result.length > 0) {
            res.status(200).json(result);
            
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
            
        }
        return result
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
    }
};

module.exports = {
    velLogin,
    getAll
};