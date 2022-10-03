<script lang="ts">
import { deserializeMongoData } from '$lib/helpers/wrappers';
import type { PageData } from '../../../../.svelte-kit/types/src/routes/admin./../../../.svelte-kit/types/src/routes/admin/$types';
import User from './components/User.svelte'

export let data: PageData;

const users: any = deserializeMongoData(data);
</script>

<!-- Load the Users Dashboard Component -->
<User {users}/>