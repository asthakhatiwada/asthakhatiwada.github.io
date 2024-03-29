import './Project.svelte.css.proxy.js';
/* src/pages/Project.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let ul;

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "Ongoing";
			t1 = space();
			ul = element("ul");

			ul.innerHTML = `<li class="description svelte-2capve">Developing multi-GPA-Tree, a statistical approach to prioritize GWAS results
    and identify combinations of functional annotations by leveraging pleiotropy
    and integrating genomic functional annotations.</li> 
  <li class="description svelte-2capve">Exploring correlations between nailfold capillary parameters and myositis
    specific antibodies in newly diagnosed juvenile dermatomyositis patients
    (retrospective cross-sectional cohort).</li> 
  <li class="description svelte-2capve">Predicting renal flare in Lupus Nephritis patients using select urine and serum
    biomarkers (longitudinal cohort).</li> 
  <li class="description svelte-2capve">Establishing genetic predisposition profiles of Lupus Nephritis patients to
    identify those at risk for renal damage (longitudinal cohort).</li>`;

			attr(ul, "class", "ml-8 list-disc list-outside");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, ul, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(ul);
		}
	};
}

class Project extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Project;