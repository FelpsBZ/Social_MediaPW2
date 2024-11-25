const connection = require('../connection/connection');

const velUser = async (email, senha) => {
    const query = "SELECT * FROM tb_user WHERE email = ? AND senha = ?";
        const [rows] = await connection.execute(query, [email, senha])
        return rows;
    
};

const getAll = async () =>{
    const query = "SELECT * FROM tb_user"
    const [rows] = await connection.execute(query)
    return rows;
}


module.exports = {
    velUser,
    getAll
};
