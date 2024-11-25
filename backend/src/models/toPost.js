const connection = require('./connection/connection')


const uploadPost = async (id_user,base64imagem, descricao, mimetype) =>{
    
        const query = "INSERT INTO tb_posts (id_user, post_description, midia,type_midia, n_like) VALUES (?,?,?,?,?)"
        await connection.query(query, [id_user, descricao, base64imagem,mimetype, 0])
    
    
}


module.exports = {
    uploadPost
};