import { useWeb3 } from "@3rdweb/hooks";


const App = () => {

  const { connectWallet, address, error, provider} = useWeb3();
  console.log("Address:", address);


  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to The Haitan DAO</h1>
        <p>Funds in this treasury will be used to create access to tech in Haiti</p>
      </div>
    );
  }


  return (
    <div className="landing">
      <h1>🇭🇹 wallet connected, now what!</h1>
    </div>
  )
};

export default App;
