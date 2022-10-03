<script lang="ts">
import { getContext } from 'svelte';
export let on_Cancel = () => {};
export let on_Okay = () => {};

const { close } :any = getContext('simple-modal');

export let modal_title: String = 'Are you sure?';
export let modal_body: String;
export let modal_cancel: String = "Cancel";
export let modal_ok: String = "Okay";

const _onCancel = () => {
    on_Cancel();
    close();
}

const _onOkay = () => {
    on_Okay();
    close();
}
</script>

<div>
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
           
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">{modal_title}</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {modal_body}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button on:click={_onOkay} type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">{modal_ok}</button>
            <button on:click={_onCancel} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{modal_cancel}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>