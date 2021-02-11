/* src/pages/Cv.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let t;

	return {
		c() {
			t = text("cv");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

class Cv extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Cv;