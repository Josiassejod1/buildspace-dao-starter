import { useWeb3 } from "@3rdweb/hooks";
import coat from "../src/coat_of_arms.png";
import twitterLogo from "../src/twitter-logo.svg";



const App = () => {

  const { connectWallet, address, error, provider} = useWeb3();
  console.log("Address:", address);
  const TWITTER_HANDLE = "officialdalvinj";
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;


  if (!address) {
    return (
      <div className="landing">
        <div>
        <img src={coat} width="50%" height="25%" />   
        </div>
        <h1>Welcome to The Haiti DAO</h1>     
        <p>Funds in this treasury will be used to provide emergency funds to Haiti in times of Crisis</p>
        <p>Voters in the DAO will be able to vote on what non profits we make donations to</p>
        <p>Access to technology for students and updated supplies</p>
        <div className="text-center">
        <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo}  height="25"/>
       <div>
       <a
          className="footer-text"
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >{`built by @${TWITTER_HANDLE}`}</a>
       </div>
      </div>
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
