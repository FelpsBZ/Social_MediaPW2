const connection = require('./connection/connection');

const uploadPost = async (id_user, descricao, midia) => {
    const query = "INSERT INTO tb_posts (id_user, post_description, midia, n_like) VALUES (?,?,?,?)";
    try {
        const [result] = await connection.query(query, [id_user, descricao,midia, 0]);
        console.log('Post inserido com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao inserir post:', error);
        throw error;
    }
};

module.exports = {
    uploadPost
};
