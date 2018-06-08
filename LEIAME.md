# zoop - Cliente Não-oficial para API Zoop

<p align="center">
🇺🇸 <a href="README.md">English README</a>
<br><br>
<a href="https://www.npmjs.com/package/@coreh/zoop"><img src="https://img.shields.io/npm/v/@coreh/zoop.svg"></a>
<a href="LICENSE"><img src="https://img.shields.io/npm/l/@coreh/zoop.svg?label=licen%C3%A7a"></a>
<a href="https://travis-ci.org/coreh/zoop/"><img src="https://img.shields.io/travis/coreh/zoop.svg?label=compila%C3%A7%C3%A3o"></a>
<a href="https://coveralls.io/github/coreh/zoop"><img src="https://img.shields.io/coveralls/github/coreh/zoop.svg?label=cobertura%20de%20testes"></a>
<a href="https://david-dm.org/coreh/zoop"><img src="https://img.shields.io/david/coreh/zoop.svg?label=depend%C3%AAncias"></a>
</p>

## Sobre

- **Isomórfico**: Compatível com os ambientes dos Navegadores Web, Node.JS e React Native
- **Escrito em TypeScript**: Fornecendo verificação de tipo e auto-completar para todos os Endpoints e parâmetros
- **Baseado em Promises / Async Iterables**: É possível usar a sintaxe `async` e `await` (ES2016) e também `for await` (ES2018).

## Instalação

```bash
npm install @coreh/zoop
```

## Uso

```javascript
import Zoop from '@coreh/zoop';

// Criar Cliente da API
const zoop = new Zoop(API_KEY);

// Endpoint do Marketplace
const marketplace = zoop.marketplace(MARKETPLACE_ID);

// Endpoint do Buyer
const buyer = marketplace.buyer(BUYER_ID);

// Recuperar Informações do Buyer (assíncrono)
const buyerInfo = await buyer.get();

// Listar Buyers (iterador assíncrono)
for await (const buyerInfo of marketplace.listBuyers()) {
    // ...
}
```

## Endpoints Implementados

- `Marketplace` (Mercado)
    - Recuperar
- `Buyer` (Comprador)
    - Criar
    - Recuperar
    - Listar
- `Transaction` (Transação)
    - Criar
    - Recuperar
    - Listar
- `Seller` (Vendedor)
    - Criar
    - Recuperar
    - Listar
- `Token`
    - Criar Token para Cartão
    - Criar Token para Conta Bancária
    - Recuperar

## Licença

MIT
