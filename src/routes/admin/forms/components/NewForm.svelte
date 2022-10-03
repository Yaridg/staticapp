<script lang="ts">
import Input from "./Input.svelte";
import Select from "./Select.svelte";

let formName: String; // bind variable for the form name, this will be added to the final data array

// submit data to the server
const createForm = async ( event: any ) => {
  try {
    const data = [{formName: formName}, ...formFields]; // add form name to the data

    await fetch('/admin/forms', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    }).then(res => window.location.reload());
  } catch (error) {
      console.log(error);
  }
};

// available field types supported and their matching component that will be loaded
let fieldTypes = [
  { type: 'Input', component: Input },
  { type: 'Select', component: Select }
]

let selected: any; // select bind variable to trigger component switch 

let formFields: any = []; // array to store all form fields

// function to pass to our child components [Select, Input]
export const addFields = (field: any) => {
  formFields = [...formFields, field];
}

</script>

<div class="w-full">

  <!-- Form Name Input -->
  <div class="col-span-6 pt-6">
    <label for="formName" class="block text-sm font-medium text-gray-700">Form name</label>
    <input bind:value={formName} type="text" name="formName" id="formName" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" required>
  </div>
  
  <!-- Select with form field types listed, this will trigger the dynamic load below -->
  <div class="col-span-6 sm:col-span-3 pt-4">
    <label for="fieldType" class="block text-sm font-medium text-gray-700">Field Type</label>
    <select bind:value={selected} id="fieldType" name="fieldType" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
      <option value=''></option>
      {#each fieldTypes as option}
        <option value={option}>{option.type}</option>
      {/each}
    </select>

    <!-- Once select is updated, this will update -->
    {#if selected}
      <!-- Load form type components dynamically -->
      <svelte:component this={selected.component} {addFields} />
    {/if}

    <!-- form is ready and call the handler function -->
    <button type="button" on:click={createForm} class="pt-6 float-left flex justify-between text-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
      <span>Create Form</span>
    </button>
  </div>
</div>