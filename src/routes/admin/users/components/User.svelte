<script lang="ts">
import { modal } from '$lib/stores/store';
import Modal, {bind} from 'svelte-simple-modal';

import AddUser from "./AddUser.svelte";
import EditUser from "./EditUser.svelte";
import DeleteUser from "./DeleteUser.svelte";

$modal = null;

export let users: any;

// Load the Add User component using Modal bind
const add_user = async () => {   
    modal.set(
        bind(
            AddUser, 
            {}
        )
    )
};

const edit_user = async (id: string) => {
    const edit_user: Object = users.find(({_id}: any) => _id == id); // get the user by id

    modal.set(
        bind(
            EditUser, 
            {
                user: edit_user
            }
        )
    )
};
</script>

<div class="container mx-auto pt-6">
	<!-- Add New User -->
	<Modal show={$modal}>
		<button class="rounded-full bg-sky-500 text-white px-4 py-1" on:click={add_user}>Add User</button>
	</Modal>
		
	<!-- List all users -->
	<div class="flex flex-col mt-8">
		<div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<div
				class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
			>
				<table class="table-auto min-w-full">
					<thead>
						<tr>
							<th
								class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
								>Name</th
							>	
							<th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Username</th>
							<th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Email</th>
							<th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Status</th>
							<th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Role</th>
							<th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50" />
						</tr>
					</thead>
					<tbody class="bg-white">
						{#each users as user}
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.firstname} {user.lastname}</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.username}</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-500">{user.email}</div>
								</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									{#if user.status == 'Active'}
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{user.status}</span>
									{:else if user.status == 'Pending'}
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full">{user.status}</span>
									{:else}
										<span class="inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full">{user.status}</span>
									{/if}
								</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.role}</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									
									<button on:click={() => edit_user(user._id)}>
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									
									<Modal>
										<DeleteUser user={user._id}/>
									</Modal>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div> 
</div>
