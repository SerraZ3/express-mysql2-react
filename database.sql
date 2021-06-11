CREATE DATABASE IF NOT EXISTS alunos;

-- Entra no banco de dados
USE alunos;

-- CRIAÇÂO DE TABELAS

-- Cria tabela de alunos
CREATE TABLE IF NOT EXISTS alunos(
  id INT(11) UNSIGNED NOT NULL  AUTO_INCREMENT,
  nome VARCHAR(100),
  sobrenome VARCHAR(100),
  email VARCHAR(255),
  nivel_id INT(11) UNSIGNED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT primary_pk PRIMARY KEY (id)
);


-- Cria tabela de habilidades
CREATE TABLE IF NOT EXISTS habilidades(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100),
  descricao VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT primary_pk PRIMARY KEY (id)
);


-- Cria tabela de niveis
CREATE TABLE IF NOT EXISTS niveis(
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100),
  descricao VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT primary_pk PRIMARY KEY (id)
);


-- Cria tabela de aluno_habilidade
CREATE TABLE IF NOT EXISTS alunos_habilidades(
  aluno_id INT(11) UNSIGNED NOT NULL,
  habilidade_id INT(11) UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT primary_pk PRIMARY KEY (aluno_id, habilidade_id)
);


-- ADICIONANDO CHAVES ESTRANGEIRAS

-- Chaves estrangeiras para tabela alunos
ALTER TABLE alunos ADD CONSTRAINT fk_aluno_nivel FOREIGN KEY (nivel_id) REFERENCES niveis(id) ON DELETE CASCADE;

-- Chaves estrangeiras para tabela alunos_habilidades
ALTER TABLE alunos_habilidades ADD CONSTRAINT fk_aluno_habilidade_aluno FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE; 
ALTER TABLE alunos_habilidades ADD CONSTRAINT fk_aluno_habilidade_habilidade FOREIGN KEY (habilidade_id) REFERENCES habilidades(id) ON DELETE CASCADE;


