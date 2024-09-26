/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const GOERLI_ID = 5;
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const RINKEBY_ID = 4;
export const ROPSTEN_ID = 3;
export const VITRA_ID = 350;

const commonContracts = {
  factory: "0x5C69bEe701ef/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const GOERLI_ID = 5;
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const RINKEBY_ID = 4;
export const ROPSTEN_ID = 3;
export const VITRA_ID = 350;

const commonContracts = {
  factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", // Substitua pelos contratos da VITRA, se for diferente
  router01: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", // Substitua se necessário
  router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Substitua se necessário
};

export default {
  [VITRA_ID]: {
    pairs: {
      "VITRA-WETH": "0x...", // Adicione o endereço correto do par VITRA-WETH
      "VITRA-USDC": "0x...", // Adicione o endereço correto do par VITRA-USDC
    },
    tokens: {
      VITRA: "0x...", // Adicione o endereço do token VITRA
      WETH: "0x...",  // Adicione o endereço do token WETH na rede VITRA, caso exista
      USDC: "0x...",  // Adicione o endereço do token USDC na rede VITRA, caso exista
    },
    ...commonContracts,
  },
  [GOERLI_ID]: {
    pairs: {
      "DAI-WETH": "0x8F609d85ebC64316B0B2f9E53c11b4e48B7A06d2",
    },
    tokens: {
      DAI: "0x697Ed3E98aaeCFa3121F536251F9D500de159dBa",
      WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
    ...commonContracts,
  },
  [KOVAN_ID]: {
    pairs: {
      "DAI-WETH": "0xB10cf58E08b94480fCb81d341A63295eBb2062C2",
    },
    tokens: {
      DAI: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
      WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    },
    ...commonContracts,
  },
  [MAINNET_ID]: {
    pairs: {
      "BAT-WETH": "0xB6909B960DbbE7392D405429eB2b3649752b4838",
      "DAI-WETH": "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
      // Adicione mais pares conforme necessário
    },
    tokens: {
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    ...commonContracts,
  },
  [RINKEBY_ID]: {
    pairs: {
      "DAI-WETH": "0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449",
    },
    tokens: {
      DAI: "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
  [ROPSTEN_ID]: {
    pairs: {
      "DAI-WETH": "0x1c5DEe94a34D795f9EEeF830B68B80e44868d316",
    },
    tokens: {
      DAI: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
};

export default addresses;814a2B6a3EDD4B1652CB9cc5aA6f", // Substitua pelos contratos da VITRA, se for diferente
  router01: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", // Substitua se necessário
  router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Substitua se necessário
};

export default {
  [VITRA_ID]: {
    pairs: {
      "VITRA-WETH": "0x...", // Adicione o endereço correto do par VITRA-WETH
      "VITRA-USDC": "0x...", // Adicione o endereço correto do par VITRA-USDC
    },
    tokens: {
      VITRA: "0x...", // Adicione o endereço do token VITRA
      WETH: "0x...",  // Adicione o endereço do token WETH na rede VITRA, caso exista
      USDC: "0x...",  // Adicione o endereço do token USDC na rede VITRA, caso exista
    },
    ...commonContracts,
  },
  [GOERLI_ID]: {
    pairs: {
      "DAI-WETH": "0x8F609d85ebC64316B0B2f9E53c11b4e48B7A06d2",
    },
    tokens: {
      DAI: "0x697Ed3E98aaeCFa3121F536251F9D500de159dBa",
      WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
    ...commonContracts,
  },
  [KOVAN_ID]: {
    pairs: {
      "DAI-WETH": "0xB10cf58E08b94480fCb81d341A63295eBb2062C2",
    },
    tokens: {
      DAI: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
      WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    },
    ...commonContracts,
  },
  [MAINNET_ID]: {
    pairs: {
      "BAT-WETH": "0xB6909B960DbbE7392D405429eB2b3649752b4838",
      "DAI-WETH": "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
      // Adicione mais pares conforme necessário
    },
    tokens: {
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    ...commonContracts,
  },
  [RINKEBY_ID]: {
    pairs: {
      "DAI-WETH": "0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449",
    },
    tokens: {
      DAI: "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
  [ROPSTEN_ID]: {
    pairs: {
      "DAI-WETH": "0x1c5DEe94a34D795f9EEeF830B68B80e44868d316",
    },
    tokens: {
      DAI: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
};

export default addresses;
