<script lang="ts">
import { modal } from '$lib/stores/store';
import Modal, {bind} from 'svelte-simple-modal';
import NewForm from './components/NewForm.svelte';

$modal = null; // initialize modal as nnull

const add_form = async () => {
    modal.set(
        bind(
            NewForm, 
            {}
        )
    )
}
</script>

<div class="container mx-auto pt-6">
    <Modal show={$modal}>
        <button class="rounded-full bg-sky-500 text-white px-4 py-1" on:click={add_form}>New Form</button>
    </Modal>
    

    <!-- <button class="rounded-full bg-sky-500 text-white px-4 py-1" on:click={add_form}>Edit Form</button> -->
</div>
