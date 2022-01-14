import { createContext, useCallback, useReducer, useEffect } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

import { Web3Reducer } from "./reducer";

const initialState = {
  loading: false,
  account: null,
  provider: null,
};

const providerOptions = {

  walletconnect: {
    package: WalletConnectProvider, 
    options: {
      infuraId: "INFURA_ID" 
    }
  }
};

const web3Modal = new Web3Modal({
  providerOptions: providerOptions,
  theme: "dark"
});

export const Web3Context = createContext(initialState);

export const Web3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Web3Reducer, initialState);

  const setAccount = (account) => {
    dispatch({
      type: "SET_ACCOUNT",
      payload: account,
    });
  };

  const setProvider = (provider) => {
    dispatch({
      type: "SET_PROVIDER",
      payload: provider,
    });
  };

  const logout = () => {
    setAccount(null);
    setProvider(null);
    localStorage.setItem("defaultWallet", null);
  };

  const connectWeb3 = useCallback(async () => {
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    window.web3 = ethersProvider;

    setProvider(ethersProvider);

    const signer = await ethersProvider.getSigner();
    let account = await signer.getAddress();
    setAccount(account);

    provider.on("chainChanged", () => {
      window.location.reload();
    });

    provider.on("accountsChanged", () => {
      window.location.reload();
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <Web3Context.Provider
      value={{
        ...state,
        connectWeb3,
        logout,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
