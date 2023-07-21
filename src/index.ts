import {connect} from "./database/papr";
import Asset from "./database/models/Asset";

async function main(): Promise<void> {
    await connect();

    await Asset.find(
        {},
        {
            projection: {
                offers: 1,
            },
            sort: {
                updatedAt: -1,
            },
        }
    );
}

(async function() {
  try {
      await main();
      console.log('Finished running index file!');
  } catch (err) {
      console.error(err);
  }
})()
