import sdk from "./1-initialize-sdk.js";

import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    process.env.DROP_MODULE_ADDRESS
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Haitian Coat of Arms",
                description: "This NFT will give you access to the Haiti DAO",
                image: readFileSync("scripts/assets/coat_of_arms.png"),
            },
        ]);
        console.log("✅ Successfully created a NFT drop");
    } catch(error) {
        console.error("failed to create the new NFT", error);   
    }
})();