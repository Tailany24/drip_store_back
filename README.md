# Projeto Back-End

Este é um projeto de back-end em **Node.js** utilizando **Express** e **Sequelize** para gerenciamento.


##

### Desenvolvedora: Tailany Mariano Leite

##

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **Sequelize**: ORM para interagir com bancos de dados relacionais.
- **MySQL**: Banco de dados relacional.
- **JWT**: JSON Web Token para autenticação.
- **dotenv**: Para gerenciar variáveis de ambiente.

## Requisitos

- **Node.js** (recomendado versão 14 ou superior)
- **MySQL** (ou qualquer banco de dados relacional compatível com o Sequelize)
- **npm** ou **yarn** para gerenciamento de dependências

## Instalação

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/Tailany24/drip_store_back.git
   cd projeto-backend
   
2. **Instale as dependências**
   ```bash
   npm install

## Como Rodar a API

Execute o seguinte comando para iniciar o servidor:
```bash
node src/server.js
```

A API estará disponível no seguinte endereço base:
```
https://drip-store-back.onrender.com/
```

## Endpoints da API

### **Usuários**

#### **Cadastrar Usuário**
OBS: A senha de usuario será salvo no Banco de Dados de forma criptografada para maior segurança.
##
![Captura de tela 2024-12-11 152727](https://github.com/user-attachments/assets/e7167c4d-702f-46d9-b3a4-30398a1b01e8)


##
`POST` - `/usuario/cadastrar`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao.silva@example.com",
  "senha": "senha123"
}
```

#### **Login de Usuário**
`POST` - `/usuario/login`

**Body:**
```json
{
  "email": "lucas.silva@example.com",
  "senha": "Senha criptografada"
}
```

#### **Deletar Usuário**
`DELETE` - `/usuario/delete/:id`

Substitua `:id` pelo ID do usuário que deseja deletar.

---

### **Categorias**

#### **Criar Categoria**
`POST` - `/categoria/criar`

**Body:**
```json
{
  "nome": "Eletrônicos",
  "descricao": "Menor Preço"
}
```

#### **Atualizar Categoria**
`PUT` - `/categoria/atualizar/:id`

**Body:**
```json
{
  "nome": "Eletrônicos",
  "descricao": "Novos preços incríveis"
}
```

#### **Obter Categoria**
`GET` - `/categoria/:id`

Substitua `:id` pelo ID da categoria que deseja obter.

#### **Listar Categorias**
`GET` - `/categoria/lista`

---

### **Produtos**

#### **Criar Produto**
`POST` - `/produto/criar`

**Body:**
```json
{
  "nome": "Produto Testei",
  "descricao": "Descrição ",
  "preco": 49.99,
  "categoriaId": 3,
  "imagens": [
    { "url": "http://exemplo.com/imagem1.jpg", "descricao": "Imagem 1" },
    { "url": "http://exemplo.com/imagem2.jpg", "descricao": "Imagem 2" }
  ],
  "opcoes": [
    { "nome": "Tamanho", "valor": "M" },
    { "nome": "Cor", "valor": "Vermelho" }
  ]
}
```

#### **Atualizar Produto**
`PUT` - `/produto/atualizar/:id`

**Body:**
```json
{
  "nome": "Teste",
  "descricao": "Descrição ",
  "preco": 49.99,
  "categoriaId": 2,
  "imagens": [
    { "url": "http://exemplo.com/imagem1.jpg", "descricao": "Imagem 1" },
    { "url": "http://exemplo.com/imagem2.jpg", "descricao": "Imagem 2" }
  ],
  "opcoes": [
    { "nome": "Tamanho", "valor": "P" },
    { "nome": "Cor", "valor": "Azul" }
  ]
}
```

#### **Obter Produto**
`GET` - `/produto/:id`

Substitua `:id` pelo ID do produto que deseja obter.

#### **Excluir Produto**
`DELETE` - `/produto/excluir/:id`

Substitua `:id` pelo ID do produto que deseja excluir.

#### **Listar Produtos**
`GET` - `/produto/lista`


