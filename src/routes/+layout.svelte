<script lang="ts">
	// import Sidebar from "$lib/components/Sidebar.svelte";
  import Admin from "$lib/components/NavigationMenu/Admin.svelte";
	import Charts from "$lib/components/NavigationMenu/Charts.svelte";
	import Inmates from "$lib/components/NavigationMenu/Inmates.svelte";
	import Parolees from "$lib/components/NavigationMenu/Parolees.svelte";
	import Reports from "$lib/components/NavigationMenu/Reports.svelte";
	import SexOffender from "$lib/components/NavigationMenu/SexOffender.svelte";
  import "../app.css";

  let translate = true; // toggle menu 
</script>


<div class="relative min-h-screen md:flex">
  <!-- mobile menu bar -->
  <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
    <!-- logo -->
    <a href="/" class="block p-4 text-white font-bold">Vico</a>

    <!-- mobile menu button -->
    <button class="p-4 focus:outline-none focus:bg-gray-700" on:click={() => translate = !translate}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>      
    </button>
  </div>
  
  <!-- Sidebar -->
  <div class:-translate-x-full={translate} class="bg-blue-400 text-blue-100 w-64 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <!-- logo -->
      <a href="/" class="text-white flex items-center space-x-2 px-4 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
        </svg>        
        <span class="text-2xl font-extrabold">PIMS</span>
      </a>

      <nav>
        <!-- Default Home menu Icon, this is constant -->
        <a href="/" class="flex items-center py-2.5 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>          
          <span class="px-2">Home</span>
        </a>

        <Inmates />

        <Parolees />

        <SexOffender />

        <Charts />

        <Reports />
          
        <Admin />  
      </nav>
  </div>

  <!-- Right Content -->
  <aside class="flex-1 p-8">
    <slot />    
  </aside>

</div>

<style>
/* .group:hover .group-hover\:scale-100 { transform: scale(1) }
.group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
.scale-0 { transform: scale(0) } */
</style>
