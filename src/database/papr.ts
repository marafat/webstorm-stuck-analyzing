import { MongoClient } from 'mongodb';
import Papr from 'papr';

export let client: MongoClient;

const papr = new Papr();

export async function connect() {
    client = await MongoClient.connect('mongodb://localhost:27017');

    papr.initialize(client.db('test'));

    await papr.updateSchemas();
}

export async function disconnect() {
    await client.close();
}

export default papr;
