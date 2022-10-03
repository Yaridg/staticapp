<script lang="ts">

export let addFields: any; // parent function to add the fields to the parent fields array

// variables needed to keep track of each field and to create the object for the db
let fieldName: string;
let fieldLabel: string;
let fieldID: string;
let fieldType: string = 'Select';
let fields: any;

let options: any = [] // save SELECT dynamic options

let optionsNeeded: number; // to loop and create dynamic options feilds

const add = () => {

    // get all dynamic options
    for (let i: number = 0; i < optionsNeeded; i++) {
        // get the options fields using the optionsNeeded counter to retrieve the matching IDs and the values
        const label = (document.getElementById(`optionLabel${i.toString()}`) as HTMLInputElement).value;
        const value = (document.getElementById(`optionValue${i.toString()}`) as HTMLInputElement).value;

        options = [...options, {label: label, value: value}] // create an array with all the options as objects
    }

    // create the complete field object
    fields =  {
        fieldName: fieldName,
        fieldLabel: fieldLabel,
        fieldID: fieldID,
        fieldType: fieldType,
        fieldOptions: options
    }

    addFields( fields ); // call parent function

    // reset fields after succesful submission to parent function
    fieldName = ''
    fieldLabel = ''
    fieldID = ''
    options = [];
}
</script>

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

<!-- develop options dynamically -->
<div class="col-span-6 sm:col-span-3 pt-4">
    <label for="optionsNeeded" class="block text-sm font-medium text-gray-700">Enter number of options that will be needed</label>
    <input bind:value={optionsNeeded} type="number" name="optionsNeed" id="optionsNeed" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
</div>

<div class="pt-4">
    {#if optionsNeeded > 0}
        <h4 class="pt-4">Enter options in <strong>Label: Value</strong> format</h4>
    {/if}

    {#each {length: optionsNeeded} as _, i}
        <div class="px-3 py-3 sm:col-span-3 grid grid-cols-4 gap-6">
            <label for="optionLabel" class="block text-sm font-medium text-gray-700">Label</label>
            <input type="text" id={`optionLabel${i.toString()}`} class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>

            <label for="inputName" class="block text-sm font-medium text-gray-700">Value</label>
            <input type="text" id={`optionValue${i.toString()}`} class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
        </div>
    {/each}
</div>

<!-- Trigger the add and matching parent function -->
<button type="button" on:click={add} class="pt-6 float-right flex justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
    <span>Add</span>
</button>