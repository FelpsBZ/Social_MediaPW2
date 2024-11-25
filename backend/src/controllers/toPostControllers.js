const tryUpload = require('../models/toPost')

const uploadPost = async(req, res) =>{
    try{
    const {mimetype, buffer} = req.file;
    const {id_user, descricao} = req.body;
    const base64Imagem = buffer.toString('base64');

    const result = await tryUpload.uploadPost(id_user, base64Imagem, descricao, mimetype)


    }catch(error){
        console.log(error)
    }
}

const dowloadPosts = async(req, res) => {

}

module.exports = {
    uploadPost
}