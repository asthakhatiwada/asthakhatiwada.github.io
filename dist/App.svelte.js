import './App.svelte.css.proxy.js';
/* src/App.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import Tailwindcss from "./TailwindStyles.svelte.js";
import ModeSwitcher from "./ModeSwitcher.svelte.js";
import NavBar from "./NavBar.svelte.js";
import Home from "./pages/Home.svelte.js";
import Publication from "./pages/Publication.svelte.js";
import Software from "./pages/Software.svelte.js";
import Teaching from "./pages/Teaching.svelte.js";
import Cv from "./pages/Cv.svelte.js";
import Project from "./pages/Project.svelte.js";
import Router from "../_snowpack/pkg/svelte-spa-router.js";
import Footer from "./Footer.svelte.js";

function create_fragment(ctx) {
	let tailwindcss;
	let t0;
	let modeswitcher;
	let t1;
	let navbar;
	let t2;
	let div;
	let router;
	let t3;
	let footer;
	let current;
	tailwindcss = new Tailwindcss({});
	modeswitcher = new ModeSwitcher({});
	navbar = new NavBar({});
	router = new Router({ props: { routes: /*routes*/ ctx[0] } });
	footer = new Footer({});

	return {
		c() {
			create_component(tailwindcss.$$.fragment);
			t0 = space();
			create_component(modeswitcher.$$.fragment);
			t1 = space();
			create_component(navbar.$$.fragment);
			t2 = space();
			div = element("div");
			create_component(router.$$.fragment);
			t3 = space();
			create_component(footer.$$.fragment);
			attr(div, "class", "flex-grow max-w-screen-lg m-auto p-4");
		},
		m(target, anchor) {
			mount_component(tailwindcss, target, anchor);
			insert(target, t0, anchor);
			mount_component(modeswitcher, target, anchor);
			insert(target, t1, anchor);
			mount_component(navbar, target, anchor);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			mount_component(router, div, null);
			insert(target, t3, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(tailwindcss.$$.fragment, local);
			transition_in(modeswitcher.$$.fragment, local);
			transition_in(navbar.$$.fragment, local);
			transition_in(router.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tailwindcss.$$.fragment, local);
			transition_out(modeswitcher.$$.fragment, local);
			transition_out(navbar.$$.fragment, local);
			transition_out(router.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(tailwindcss, detaching);
			if (detaching) detach(t0);
			destroy_component(modeswitcher, detaching);
			if (detaching) detach(t1);
			destroy_component(navbar, detaching);
			if (detaching) detach(t2);
			if (detaching) detach(div);
			destroy_component(router);
			if (detaching) detach(t3);
			destroy_component(footer, detaching);
		}
	};
}

function instance($$self) {
	const routes = {
		"/": Home,
		"/publication": Publication,
		"/software": Software,
		"/teaching": Teaching,
		"/cv": Cv,
		"/project": Project,
		"*": Home
	};

	return [routes];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;