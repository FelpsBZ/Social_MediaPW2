import React, { useState } from "react";
import styles from "./CreatePosts.module.css";
import imageIcon from "./SVGS/image.svg";
import clipIcon from "./SVGS/clip.svg";

const user1 = JSON.parse(sessionStorage.getItem('user'));

const user = [
    {
        id: user1.id_user,
        nome: user1.nome,
        image: user1.imagem,
    },
];

function CREATEPOSTS() {
    const [description, setDescription] = useState("");
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [isClipSelected, setIsClipSelected] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState(""); // Nome do arquivo

    const handlePost = async (event) => {
        event.preventDefault(); // Previne envio padrão do formulário
        alert('Post enviado com sucesso!');
    };

    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            setIsImageSelected(true);
            setIsClipSelected(false); // Desabilitar vídeo
            setSelectedFileName(event.target.files[0].name); // Nome do arquivo
        } else {
            setIsImageSelected(false);
            setSelectedFileName(""); // Limpa o nome do arquivo
        }
    };

    const handleClipChange = (event) => {
        if (event.target.files.length > 0) {
            setIsClipSelected(true);
            setIsImageSelected(false); // Desabilita imagem
            setSelectedFileName(event.target.files[0].name); // Nome do arquivo
        } else {
            setIsClipSelected(false);
            setSelectedFileName(""); // Limpa o nome do arquivo
        }
    };

    // Verifica se o botão POST deve estar ativo
    const isPostDisabled = !isImageSelected && !isClipSelected;

    return (
        <div className={styles.CreatePosts}>
            <div className={styles.textPost}>
                {user.map((user, index) => (
                    <div key={index} className={styles.imgUser}>
                        <img src={user.image} alt={user.nome} className={styles.imgUser} />
                    </div>
                ))}

                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className={styles.inputPost}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <form className={styles.typePost} onSubmit={handlePost}>
                <label className={styles.postImage}>
                    <input
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={isClipSelected} // Desabilita se o vídeo foi selecionado
                    />
                    <img src={imageIcon} alt="Ícone de imagem" />
                    <p>Image</p>
                </label>
                <label className={styles.postClip}>
                    <input
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        accept="video/*"
                        onChange={handleClipChange}
                        disabled={isImageSelected} // Desabilita se a imagem foi selecionada
                    />
                    <img src={clipIcon} alt="Ícone de clipe" />
                    <p>Clip</p>
                </label>

                {/* Exibindo o nome do arquivo selecionado */}
                {selectedFileName && (
                    <div className={styles.selectedFileName}>
                        <p>{selectedFileName}</p>
                    </div>
                )}

                {/* Botão POST desativado se nenhum arquivo estiver selecionado */}
                <button
                    className={styles.postButton}
                    type="submit"
                    disabled={isPostDisabled}
                >
                    POST
                </button>
            </form>
        </div>
    );
}

export default CREATEPOSTS;
