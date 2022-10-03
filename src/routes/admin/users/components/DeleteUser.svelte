<script lang="ts">
// Import Components
import ConfirmAlert from '$lib/components/ConfirmAlert.svelte';

// Import Simple Modal
import { getContext } from 'svelte';
const { open } :any = getContext('simple-modal'); 

export let user: any; // user ID to identify which user to delete

// if cancel button was clicked, do nothing
const on_Cancel = () => {
    // do nothing
    console.log('user not being deleted!');
}

// only if user confirmed then we call delete user
const on_Okay = () => {
    delete_user();
}

// confirm with user before delete
const show_confirmation = () => {
    open(
        ConfirmAlert,
        {
            modal_title: 'Are you sure?',
            modal_body: 'This cannot be undone!',
            modal_cancel: "Cancel",
            modal_ok: "Okay",
            on_Cancel,
            on_Okay
        },
        {
            closeButton: false,
            closeOnEsc: false,
            closeOnOuterClick: false
        }
    )
}

// delete User by passing ID to DELETE
const delete_user = async () => {
    try {
        const user_id = { 
            _id: user
        }

        await fetch('/admin/users', {
            method: 'DELETE',
            body: JSON.stringify(user_id),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        }).then(res => window.location.reload());
    } catch (error) {
        console.log(error);
    }
};
</script>

<!-- Delete Button -->
<button on:click={show_confirmation}>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
</button>