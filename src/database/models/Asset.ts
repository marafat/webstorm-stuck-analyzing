import { types, schema } from 'papr';
import papr from '../papr';

const assetSchema = schema(
    {
        offers: types.array(
            types.object({
                price: types.number({ required: true }),
                name: types.string(),
                createdAt: types.date({ required: true }),
                accepted: types.boolean(),
                repliedAt: types.date()
            })
        )
    },
    {
        timestamps: true
    }
);

type AssetDocument = (typeof assetSchema)[0];
type AssetOptions = (typeof assetSchema)[1];

const Asset = papr.model<AssetDocument, AssetOptions>('assets', assetSchema);

export default Asset;
