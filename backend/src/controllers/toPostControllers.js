const tryUpload = require('../models/toPost');



const uploadPost = async (req, res) => {
    try {
        
   

        
        const { id_user, descricao , midia} = req.body;

        

        
        const result = await tryUpload.uploadPost(id_user, descricao, midia);

        return res.status(200).json({ message: 'Post concluído' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao postar' });
    }
};


module.exports = {
    uploadPost
};
