import { useWeb3 } from "@3rdweb/hooks";
import coat from "../src/coat_of_arms.png";
import twitterLogo from "../src/twitter-logo.svg";
import { ThirdwebSDK } from "@3rdweb/sdk";
import React, { useEffect, useState } from "react";
import { Container, Modal, Button } from "reactstrap";

// We instatiate the sdk on Rinkeby.
const sdk = new ThirdwebSDK("rinkeby");

const bundleDropModule = sdk.getDropModule(
  "0xd7ec1a13CACBe6D75a05Af748a62F9B9F9CEf70f"
);

const Home = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address:", address);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [comingSoon, setCommingSoon] = useState(false);
  const signer = provider ? provider.getSigner() : undefined;
  
  const [show, setShow] = useState(false);
  const TWITTER_HANDLE = "officialdalvinj";
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

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
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      })
      .catch((error) => {
        setHasClaimedNFT(false);
        console.log("failed to nft balance", error);
      });
  }, [address]);

  return (
    <Container fluid style={{ margin: "auto 0", textAlign: "center" }}>
      <div>
        <img src={coat} width="50%" height="25%" />
      </div>
      <div style={{ padding: "15px" }}>
        <h1>Welcome to The Haiti DAO</h1>
      </div>
      <div style={{ margin: "auto 0", textAlign: "center" }}>
        {comingSoon ? (
          <button>Drop Coming Soon</button>
        ) : (
          <button onClick={() => setShow(!show)}>Join The DAO</button>
        )}
      </div>
      <p>"Empowering The Haitian Diaspora To Help Haiti"</p>
      <p>
        Funds from this drop will go to{" "}
        <strong>
          <a href="https://www.care.org" target="_blank">
            www.care.org
          </a>
        </strong>
        , and{" "}
        <strong>
          <a href="https://www.securinginternships.com" target="_blank">
            a book donation
          </a>
        </strong>{" "}
        to{" "}
        <strong>
          <a href="https://www.jeoc.org" target="_blank">
            www.jeoc.org
          </a>
        </strong>{" "}
        for students in Haiti for each NFT minted.
      </p>
      {show &&    <iframe
          src="https://cloudflare-ipfs.com/ipfs/bafybeic4ujkaaga3sklcjehvjnzssmur32r2njhttmnyokputtlgwh6q4e?contract=0xd7ec1a13CACBe6D75a05Af748a62F9B9F9CEf70f&chainId=80001"
          width="600px"
          height="600px"
          frameborder="0"
        />}
      <div className="text-center">
        <img
          alt="Twitter Logo"
          className="twitter-logo"
          src={twitterLogo}
          height="25"
        />
        <Container fluid>
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </Container>
      </div>
    </Container>
  );
};

export default Home;
