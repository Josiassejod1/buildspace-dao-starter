import sdk from "./1-initialize-sdk.js";

const app = await sdk.getAppModule(process.env.THIRD_WEB_APP_ADDRESS);

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "HaitiDAO Gov Token",
            symbol: "HAITI",
        });

        console.log(
            "Successfully deplpyed token module, address:", tokenModule.address
        )

    } catch( error ) {
        console.log("failed to deploy  token module", error);
    }
})();