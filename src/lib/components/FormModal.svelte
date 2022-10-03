<script lang="ts">
	import Form from "./Form.svelte";

    export let fields: object;
    export let formTitle: string;
    export let formDescription: string;
</script>

<Form {fields} {formTitle} {formDescription} />