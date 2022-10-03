import { db_connect } from "$lib/database";
import { json } from "@sveltejs/kit"


export const POST = async ( {request} : any ) => {
    try {
        const db_client = await db_connect('vico_db'); // database to connect to

        const formData = await request.json();

        const formName = formData[0].formName;

        // strip form name from the form fields and add it to the newly created collection
        let [, ...formFields] = formData;
    
        await db_client.createCollection(formName);

        const collection = db_client.collection(formName); // get the collection 

        // loop through json data and add each as a new record
        for (const obj of formFields) {
            await collection.insertOne(obj);
        }

        return json('success')

    } catch (error) {
        return json('error')
    }
}