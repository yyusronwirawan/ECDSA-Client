function WalletList({ wallets }) {
    return (
        <div className="container walletList">
            <h1>Wallet Address List: </h1>
            <ul>
                {wallets && wallets.map((wallet, i) => {
                    return <li key={i}>{wallet}</li>
                })}
            </ul>
        </div>
    );
}

export default WalletList;
