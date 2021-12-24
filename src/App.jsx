import { useWeb3 } from "@3rdweb/hooks";
import coat from "../src/coat_of_arms.png";
import twitterLogo from "../src/twitter-logo.svg";
import { ThirdwebSDK } from "@3rdweb/sdk";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";

dotenv.config();

// We instatiate the sdk on Rinkeby.
const sdk = new ThirdwebSDK("rinkeby");






const App = () => {

  

  const { connectWallet, address, error, provider} = useWeb3();
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  // isClaiming lets us easily keep a loading state while the NFT is minting.
  const [isClaiming, setIsClaiming] = useState(false);
  console.log("Address:", address);
  const TWITTER_HANDLE = "officialdalvinj";
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
  const signer = provider ? provider.getSigner() : undefined;

  useEffect(() => {
    sdk.setProviderOrSigner(signer);
  }, [signer]);


  
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

  const mintNFT = () => {
    setHasClaimedNFT(false);

    bundleDropModule
    .claim("0", 1)
    .catch((err) => {
      console.log("Failed to claim", err);
      setHasClaimedNFT(false);
    }).finally(() => {
      setIsClaiming(false);
      setHasClaimedNFT(true);

      console.log(
        `Successfully Minted! Check it out on opensea: https://testnets.opensea.io/assets/${process.env.bundleDropModule.address}/0`
      )
    });
  }


  if (!address) {
    return (
      <div className="landing">
        <div>
        <img src={coat} width="50%" height="25%" />   
        </div>
        <h1>Welcome to The Haiti DAO</h1>     
        <button onClick={() => connectWallet("injected")} >Join The DAO</button>
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

  if (hasClaimedNFT) {
    return (
      <div className="member-page">
        <h1>🇭🇹 DAO Member Page</h1>
      <p>Congratulations on being a member</p>
      </div>
    )
  }
  
  
  else {
    return (
      <div className="landing">
        <h1>Mint your member to Haiti DAO 🇭🇹</h1>
        <button 
        disabled={isClaiming}
        onClick={() => mintNFT()}
        >
          {isClaiming ? "Minting...." : "Mint your NFT (FREE)"}
        </button>
      </div>
    )
  }
};

export default App;
