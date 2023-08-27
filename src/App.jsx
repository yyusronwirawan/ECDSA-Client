import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Wallet from "./Wallet";
import WalletList from "./WalletList";
import Transfer from "./Transfer";
import server from "./server";
import "./App.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");
  const [phrase, setPhrase] = useState("");
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    setPhrase(uuidv4());
    server.get('/wallets').then((response) => {
      setWallets(response.data.wallets);
    });
  }, []);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signature={signature}
        setSignature={setSignature}
        phrase={phrase}
        setPhrase={setPhrase}
      />
      <Transfer 
        setBalance={setBalance} 
        address={address}
        phrase={phrase}
        signature={signature}
      />
      <WalletList
        wallets={wallets}
      />
    </div>
  );
}

export default App;
