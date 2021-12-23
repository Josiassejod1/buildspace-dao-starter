import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = await sdk.getAppModule(process.env.THIRD_WEB_APP_ADDRESS);

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "HaitianDAO membership",
            description: "A DAO to deploy resources to the island of Haiti",
            image: readFileSync("scripts/assets/coat_of_arms.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primarySaleRecipientAddress: process.env.WALLET_ADDRESS
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
          );
          console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
          );
    } catch(error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})();