import { c as create_ssr_component, v as validate_component, b as subscribe, d as set_store_value, k as each, e as escape, g as getContext } from './index-12f78a8b.js';
import { d as deserializeMongoData } from './wrappers-aab3db0c.js';
import { m as modal, M as Modal } from './Modal-c180f4b8.js';
import './index3-89c1ba4b.js';

const DeleteUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("simple-modal");
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `
<button><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-6 h-6 text-red-400"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}"></path></svg></button>`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  set_store_value(modal, $modal = null, $modal);
  let { users } = $$props;
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  $$unsubscribe_modal();
  return `<div class="${"container mx-auto pt-6"}">
	${validate_component(Modal, "Modal").$$render($$result, { show: $modal }, {}, {
    default: () => {
      return `<button class="${"rounded-full bg-sky-500 text-white px-4 py-1"}">Add User</button>`;
    }
  })}
		
	
	<div class="${"flex flex-col mt-8"}"><div class="${"py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"}"><div class="${"inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"}"><table class="${"table-auto min-w-full"}"><thead><tr><th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}">Name</th>	
							<th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}">Username</th>
							<th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}">Email</th>
							<th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}">Status</th>
							<th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}">Role</th>
							<th class="${"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"}"></th></tr></thead>
					<tbody class="${"bg-white"}">${each(users, (user) => {
    return `<tr><td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}">${escape(user.firstname)} ${escape(user.lastname)}</td>
								<td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}">${escape(user.username)}</td>
								<td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}"><div class="${"text-sm leading-5 text-gray-500"}">${escape(user.email)}</div></td>
								<td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}">${user.status == "Active" ? `<span class="${"inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"}">${escape(user.status)}</span>` : `${user.status == "Pending" ? `<span class="${"inline-flex px-2 text-xs font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full"}">${escape(user.status)}</span>` : `<span class="${"inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full"}">${escape(user.status)}</span>`}`}</td>
								<td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}">${escape(user.role)}</td>
								<td class="${"px-6 py-4 whitespace-no-wrap border-b border-gray-200"}"><button><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-6 h-6 text-blue-400"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}"></path></svg></button>
									
									${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(DeleteUser, "DeleteUser").$$render($$result, { user: user._id }, {}, {})}
									`;
      }
    })}</td>
							</tr>`;
  })}</tbody></table></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const users = deserializeMongoData(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${validate_component(User, "User").$$render($$result, { users }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-927e0d78.js.map
