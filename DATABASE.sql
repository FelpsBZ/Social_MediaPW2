-- Active: 1721698417565@@127.0.0.1@3306@kset
CREATE DATABASE kset

USE kset

GO

CREATE TABLE tb_user(
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE tb_posts(
    id_post INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    post_description TEXT,
    midia LONGBLOB,
    tipe_midia VARCHAR(255)
    n_like INT,
    FOREIGN KEY(id_user) REFERENCES tb_user(id_user)
)

CREATE TABLE tb_comments(
    id_comment INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_post INT NOT NULL,
    text_comment TEXT,
    FOREIGN KEY(id_post) REFERENCES tb_posts(id_post)
)
