CREATE TABLE PROJETO_FULLSTACK_USER
(
    id       VARCHAR(255) PRIMARY KEY NOT NULL,
    name     VARCHAR(255)             NOT NULL,
    email    VARCHAR(255) UNIQUE      NOT NULL,
    nickname VARCHAR(255) UNIQUE      NOT NULL,
    password VARCHAR(255)             NOT NULL
);

CREATE TABLE PROJETO_FULLSTACK_MUSIC_GENRES
(
    id    INT PRIMARY KEY AUTO_INCREMENT,
    genre VARCHAR(255) NOT NULL
);

CREATE TABLE PROJETO_FULLSTACK_IMAGE_TAGS
(
    id  VARCHAR(255) PRIMARY KEY AUTO_INCREMENT,
    tag VARCHAR(255) NOT NULL
);

CREATE TABLE PROJETO_FULLSTACK_MUSIC
(
    id     VARCHAR(255) PRIMARY KEY NOT NULL,
    title  VARCHAR(255)             NOT NULL,
    author VARCHAR(255)             NOT NULL,
    date   DATE                     NOT NULL,
    file   VARCHAR(255)             NOT NULL,
    genre  INT,
    album  VARCHAR(255)             NOT NULL,
    FOREIGN KEY (author) REFERENCES PROJETO_FULLSTACK_USER (nickname),
    FOREIGN KEY (genre) REFERENCES PROJETO_FULLSTACK_MUSIC_GENRES (id)
);

CREATE TABLE PROJETO_FULLSTACK_IMAGE
(
    id         VARCHAR(255) PRIMARY KEY NOT NULL,
    subtitle   VARCHAR(255)             NOT NULL,
    author     VARCHAR(255)             NOT NULL,
    date       DATE                     NOT NULL,
    file       VARCHAR(255)             NOT NULL,
    tag        VARCHAR(255)             NOT NULL,
    collection VARCHAR(255)             NOT NULL,
    FOREIGN KEY (author) REFERENCES PROJETO_FULLSTACK_USER (nickname)
);
