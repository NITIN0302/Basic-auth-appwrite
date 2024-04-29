import {Client,Account,Databases} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("662e9c3e002dcd38c6a1");

export const account = new Account();
export const database = new Databases(client,"662e9f3700076bbe204b"); 