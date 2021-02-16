/* src/pages/Software.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div3;

	return {
		c() {
			div3 = element("div");

			div3.innerHTML = `<div class="block md:flex items-center"><div class="pr-4"><img class="m-auto" style="width: 150px" src="/public/img/gpatree.png"/></div> 
    <div class="flex-1"><h2 class="mt-0">GPATree</h2> 
      <p>R package to implement the GPA-Tree method.</p> 
      <p>Shiny app to interactively implement association mapping and investigate
        functional annotation tree.</p> 
      <p>Download from
        <a class="external-link" href="">Github</a>(to be added later)</p></div></div>`;

			attr(div3, "class", "px-2");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div3);
		}
	};
}

class Software extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Software;