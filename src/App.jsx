import { useWeb3 } from "@3rdweb/hooks";
import coat from "../src/coat_of_arms.png";
import twitterLogo from "../src/twitter-logo.svg";
import { ThirdwebSDK } from "@3rdweb/sdk";
import React from "react";

// We instatiate the sdk on Rinkeby.
const sdk = new ThirdwebSDK("rinkeby");

const bundleDropModule = sdk.getBundleDropModule(
  process.env.DROP_MODULE_ADDRESS,
);

useEffect(() => {
  if (!address) {
    return;
  }

  return bundleDropModule
  .balanceOf(address, "O")
  .then((balance) => {
    // if blance is granter than 0, they have our NFT!
    if (balance.gt(0)) {
      setHasClaimedNFT(true);
      console.log("🌟 this user has a membership NFT!")
    } else {
      setHasClaimedNFT(false);
      console.log("😭 this user doesn't have a membership NFT.");
    }
  }).catch((error) => {
    setHasClaimedNFT(false);
    console.log("failed to nft balance", error);
  });
}, [address]);


const App = () => {

  const { connectWallet, address, error, provider} = useWeb3();
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  console.log("Address:", address);
  const TWITTER_HANDLE = "officialdalvinj";
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

  useEf


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
  } else {
    return (
      <div className="landing">
        <h1>🇭🇹 wallet connected, now what!</h1>
      </div>
    )
  }
};

export default App;
