//serviceProdutos.js
const Produto = require('../models/tabelaProdutos');
const ImagemProduto = require('../models/imagensProduto');
const OpcaoProduto = require('../models/opcoesProdutos');

// Função para listar todos os produtos com imagens e opções
const getAllProdutos = async () => {
  try {
    const produtos = await Produto.findAll({
      include: [
        { model: ImagemProduto, as: 'imagens' },
        { model: OpcaoProduto, as: 'opcoes' },
      ],
    });
    return produtos;
  } catch (err) {
    throw new Error('Erro ao obter produtos: ' + err.message);
  }
};

// Função para obter um produto por ID com suas imagens e opções
const getProdutoById = async (id) => {
  try {
    const produto = await Produto.findOne({
      where: { id },
      include: [
        { model: ImagemProduto, as: 'imagens' },
        { model: OpcaoProduto, as: 'opcoes' },
      ],
    });
    if (!produto) {
      throw new Error('Produto não encontrado.');
    }
    return produto;
  } catch (err) {
    throw new Error('Erro ao obter produto: ' + err.message);
  }
};

// Função para criar um novo produto com imagens e opções
const createProduto = async (produtoData) => {
  const { nome, descricao, preco, categoriaId, imagens, opcoes } = produtoData;
  try {
    const produto = await Produto.create(
      { nome, descricao, preco, categoriaId },
      {
        include: [
          { model: ImagemProduto, as: 'imagens' },
          { model: OpcaoProduto, as: 'opcoes' },
        ],
      }
    );

    if (imagens) {
      await ImagemProduto.bulkCreate(imagens.map((imagem) => ({ ...imagem, produtoId: produto.id })));
    }

    if (opcoes) {
      await OpcaoProduto.bulkCreate(opcoes.map((opcao) => ({ ...opcao, produtoId: produto.id })));
    }

    return produto;
  } catch (err) {
    throw new Error('Erro ao criar produto: ' + err.message);
  }
};

// Função para atualizar produto e suas associações (imagens/opções)
const updateProduto = async (id, produtoData) => {
  const { nome, descricao, preco, categoriaId, imagens, opcoes } = produtoData;
  try {
    const produto = await Produto.findOne({ where: { id } });
    if (!produto) {
      throw new Error('Produto não encontrado.');
    }

    // Atualiza os campos do produto
    produto.nome = nome || produto.nome;
    produto.descricao = descricao || produto.descricao;
    produto.preco = preco || produto.preco;
    if (categoriaId !== undefined) produto.categoriaId = categoriaId;

    await produto.save();

    // Atualiza imagens e opções
    if (imagens) {
      await ImagemProduto.destroy({ where: { produtoId: id } });
      await ImagemProduto.bulkCreate(imagens.map((imagem) => ({ ...imagem, produtoId: id })));
    }

    if (opcoes) {
      await OpcaoProduto.destroy({ where: { produtoId: id } });
      await OpcaoProduto.bulkCreate(opcoes.map((opcao) => ({ ...opcao, produtoId: id })));
    }

    return produto;
  } catch (err) {
    throw new Error('Erro ao atualizar produto: ' + err.message);
  }
};

// Função para excluir produto (e suas associações)
const deleteProduto = async (id) => {
  try {
    const produto = await Produto.findOne({ where: { id } });
    if (!produto) {
      throw new Error('Produto não encontrado.');
    }

    // Remove as imagens e opções associadas
    await ImagemProduto.destroy({ where: { produtoId: id } });
    await OpcaoProduto.destroy({ where: { produtoId: id } });

    // Remove o produto
    await produto.destroy();

    return { message: 'Produto excluído com sucesso.' };
  } catch (err) {
    throw new Error('Erro ao excluir produto: ' + err.message);
  }
};

// Exportando as funções
module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
