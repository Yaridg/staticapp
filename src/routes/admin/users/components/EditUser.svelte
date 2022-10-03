<script lang="ts">

export let user: any; // user ID to perform GET

let _id: any = user._id;
let username: String = user.username;
let firstname: String = user.firstname;
let lastname: String = user.lastname;
let email: String = user.email;
let status: String = user.status;
let role: String = user.role;

</script>

<div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <!-- <form on:submit|preventDefault={edit_user}> -->
        <form method="POST" action="?/editUser">
            <div class="overflow-hidden shadow sm:rounded-md">
                <div class="bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <!-- Hidden User ID -->
                    <input type="hidden" id="_id" name="_id" bind:value={_id}>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="firstname" class="block text-sm font-medium text-gray-700">First name</label>
                      <input bind:value={firstname} type="text" name="firstname" id="firstname" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                      
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="lastname" class="block text-sm font-medium text-gray-700">Last name</label>
                      <input bind:value={lastname}  type="text" name="lastname" id="lastname" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                    
                    </div>
      
                    <div class="col-span-6 sm:col-span-4">
                      <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                      <input bind:value={email} type="email" name="email" id="email" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                     
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                      <select bind:value={role} id="role" name="role" autocomplete="role" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
                        <option>Superadmin</option>
                        <option>Administrator</option>
                        <option>Editor</option>
                        <option>User</option>
                      </select>
                      
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                        <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                        <select bind:value={status} id="status" name="status" autocomplete="status" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
                          <option>Active</option>
                          <option>Pending</option>
                          <option>Inactive</option>
                        </select>
                       
                    </div>
    
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                      <input bind:value={username} type="text" name="username" id="username" autocomplete="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                    </div>

                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button on:click type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>