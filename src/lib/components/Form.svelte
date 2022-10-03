<script lang="ts">

export let formTitle: string;
export let formDescription: string;
export let formSubmitAction: string;
export let formFields: any;

</script>


<h4  class="text-blue-700">{formTitle}</h4>

<form method="POST" action="?/{formSubmitAction}">
    <div class="overflow-hidden shadow sm:rounded-md">
        <div class="bg-white px-4 py-5 sm:p-6">
            <p class="text-center">{formDescription}</p>

            {#each formFields as field}
                {#if field.fieldType == 'Input'}
                    <div class="col-span-6 sm:col-span-3 pt-4">
                        <label for={field.fieldID} class="block text-sm font-medium text-gray-700">{field.fieldLabel}</label>
                        <input type={field.fieldInputType} name={field.fieldName} id={field.fieldID} class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-" required>
                    </div>
                {/if}

                {#if field.fieldType == 'Select'}
                    <div class="col-span-6 sm:col-span-3 pt-4">
                        <label for={field.fieldID} class="block text-sm font-medium text-gray-700">{field.fieldLabel}</label>
                        <select id={field.fieldID} name={field.fieldName} class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
                            {#each field.fieldOptions as options}
                                <option value={options.value}>{options.label}</option>
                            {/each}
                        </select>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
        </div>
      </div>
</form>