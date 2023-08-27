import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, signature, setSignature, phrase, setPhrase }) {
  async function onChange(evt) {
    const signature = evt.target.value;
    setSignature(signature);

    console.log('sig', signature)
    if (signature) {
      const {
        data: { balance, sender },
      } = await server.get(`balance/${signature}/${phrase}`);
      setBalance(balance);
      setAddress(sender);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Ramdom Phrase
        <input disabled placeholder="Random phrase" value={phrase} onChange={setPhrase} />
        <p>Copy this phrase and sign it using your private key (don't use the private key here).</p>
      </label>      

      <label>
        Wallet Signature
        <input placeholder="Paste your signature here" value={signature} onChange={onChange} />
      </label>


      {
      address && 
        <label>
          Wallet Address
          <input disabled value={address} />
        </label>
      }

      { address && <div className="balance">Balance: {balance}</div> }
    </div>
  );
}

export default Wallet;
