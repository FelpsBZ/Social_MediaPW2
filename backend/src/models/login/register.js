const connection = require('../connection/connection');

const registerUser = async (nome, email, senha) => {
    const query = `INSERT INTO tb_user (nome, email, senha) VALUES (?,?,?)`;
        const [rows] = await connection.execute(query, [nome,email, senha])
        return rows;
    
};


module.exports = {
    registerUser
};
