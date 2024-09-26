import { VITRA } from "@usedapp/core"; // Verifique se existe uma configuração para VITRA no pacote

export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: 350, // ID da cadeia VITRA
  readOnlyUrls: {
    [350]: "https://vitrachain-rpc.com", // URL do RPC para VITRA
  },
};
