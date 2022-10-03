// Helper function to serialize data from Mongo DB
// This helps with Object ID that SvelteKit can't handle
export const serializeMongoData = async ( data: any ) => {
    return JSON.parse( JSON.stringify(data) )
}

// Helper function to deserialize the serialized data from Mongo DB
// This will format the data to Array of Objects and not Objects of Objects
export const deserializeMongoData = ( data: any ) => {
    let arr: any = [];
    for (const [key, value] of Object.entries(data)) {
        arr = [...arr, value];
    }
    return arr;
} 

// Helper function to retrieve form fields dynamically so forms can be built dynamically 
export const getFormFields = async ( formName: string, fetchPath: string ) => {

    let formFields: any;

    await fetch(fetchPath, {
        method: 'POST',
        body: JSON.stringify(formName),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        formFields = data;
    });

    return formFields;

}