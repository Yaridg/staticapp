<script lang="ts">
export let addFields: any; // parent function to add the fields to the parent fields array

// variables needed to keep track of each field and to create the object for the db
let fieldName: string;
let fieldLabel: string;
let fieldID: string;
let fieldInputType: string;
let fieldType: string = 'Input';
let fields: any;


const add = () => {

    // create the complete field object
    fields =  {
        fieldName: fieldName,
        fieldLabel: fieldLabel,
        fieldID: fieldID,
        fieldInputType: fieldInputType,
        fieldType: fieldType
    }

    addFields( fields ); // call parent function

    // reset fields after succesful submission to parent function
    fieldName = ''
    fieldLabel = ''
    fieldID = ''
    fieldInputType = ''
}
</script>

<div class="col-span-6 sm:col-span-3 pt-4">
    <label for="inputType" class="block text-sm font-medium text-gray-700">Input Type</label>
    <select id="inputType" bind:value={fieldInputType} name="inputType" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
        <option>text</option>
        <option>color</option>
        <option>date</option>
        <option>checkbox</option>
        <option>datetime-local</option>
        <option>email</option>
        <option>file</option>
        <option>hidden</option>
        <option>image</option>
        <option>month</option>
        <option>password</option>
        <option>radio</option>
        <option>range</option>
        <option>reset</option>
        <option>search</option>
        <option>submit</option>
        <option>tel</option>
        <option>time</option>
        <option>url</option>
        <option>week</option>
    </select>
</div>

<div class="col-span-6 sm:col-span-3 pt-4">
    <label for="inputName" class="block text-sm font-medium text-gray-700">Field name</label>
    <input bind:value={fieldName} type="text" name="inputName" id="inputName" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
</div>

<div class="col-span-6 sm:col-span-3 pt-4">
    <label for="inputLabel" class="block text-sm font-medium text-gray-700">Field label</label>
    <input bind:value={fieldLabel} type="text" name="inputLabel" id="inputLabel" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
</div>

<div class="col-span-6 sm:col-span-3 pt-4">
    <label for="inputID" class="block text-sm font-medium text-gray-700">Field ID</label>
    <input bind:value={fieldID} type="text" name="inputID" id="inputID" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
</div>

<!-- Trigger the add and matching parent function -->
<button type="button" on:click={add} class="pt-6 float-right flex justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
    <span>Add</span>
</button>