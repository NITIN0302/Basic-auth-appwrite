import {Client,Account,Database} from appwrite;

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("ProjectId");
export const account = new Account();
export const database = new Database(client,"DatabaseId"); 