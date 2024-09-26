export const VITRA_CHAIN_ID = 350; // ID da cadeia VITRA

export const ROUTER_ADDRESS = "0x6E71cfbc04eF15db5CcB942f2e4C78efCDD02833"; // Endereço do roteador na rede VITRA

export const DAPP_CONFIG = {
  readOnlyChainId: VITRA_CHAIN_ID,
  readOnlyUrls: {
    [VITRA_CHAIN_ID]: "https://vitrachain-rpc.com", // URL do RPC da rede VITRA
  },
};
