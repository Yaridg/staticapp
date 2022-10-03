import { c as create_ssr_component, b as subscribe, d as set_store_value, v as validate_component } from './index-12f78a8b.js';
import { m as modal, M as Modal } from './Modal-c180f4b8.js';
import './index3-89c1ba4b.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  set_store_value(modal, $modal = null, $modal);
  $$unsubscribe_modal();
  return `<div class="${"container mx-auto pt-6"}">${validate_component(Modal, "Modal").$$render($$result, { show: $modal }, {}, {
    default: () => {
      return `<button class="${"rounded-full bg-sky-500 text-white px-4 py-1"}">New Form</button>`;
    }
  })}
    

    </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-66292e84.js.map
