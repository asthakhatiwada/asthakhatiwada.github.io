import './Home.svelte.css.proxy.js';
/* src/pages/Home.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	action_destroyer,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { link } from "../../_snowpack/pkg/svelte-spa-router.js";

function create_fragment(ctx) {
	let div5;
	let div0;
	let t0;
	let div4;
	let h20;
	let t2;
	let div1;
	let t16;
	let h21;
	let t18;
	let div2;
	let p1;
	let t20;
	let p2;
	let t22;
	let p3;
	let t23;
	let a6;
	let link_action;
	let t25;
	let t26;
	let h22;
	let t28;
	let div3;
	let mounted;
	let dispose;

	return {
		c() {
			div5 = element("div");
			div0 = element("div");
			div0.innerHTML = `<img src="/public/img/ak.jpeg" class=""/>`;
			t0 = space();
			div4 = element("div");
			h20 = element("h2");
			h20.textContent = "About";
			t2 = space();
			div1 = element("div");

			div1.innerHTML = `<p>I am an Assistant Professor of Biostatistics and Bioinformatics at National Jewish Health. I received my PhD in Biostatistics from the
        <a class="external-link" target="_blank" href="https://web.musc.edu">Medical University of South Carolina</a>,
        working under the supervision of
        <a class="external-link" target="_blank" href="http://people.musc.edu/~wolfb/">Dr. Bethany Wolf</a>
        and
        <a class="external-link" target="_blank" href="https://sites.google.com/site/statdchung/">Dr. Dongjun Chung.</a>
        I received a MS degree in Mathematics (statistics concentration) under
        the supervision of
        <a class="external-link" target="_blank" href="http://faculty.etsu.edu/seier/">Dr. Edith Seier</a>
        from
        <a class="external-link" target="_blank" href="https://www.etsu.edu/ehome/">ETSU</a>
        , and a BS degree in Math (actuarial science emphasis) and a BA degree in
        Economics from
        <a class="external-link" target="_blank" href="https://www.mnstate.edu">MSUM</a>.</p>`;

			t16 = space();
			h21 = element("h2");
			h21.textContent = "Research Interest";
			t18 = space();
			div2 = element("div");
			p1 = element("p");
			p1.textContent = "My research is focused on developing novel statistical approaches to\n        integrate genetic data with genomic functional annotation data applied\n        to complex diseases (e.g., systemic lupus erythematosus,\n        rheumatoid arthritis, ulcerative colitis, Crohn’s disease). More\n        generally, the goal of my research is to improve statistical power to\n        identify genetic variants associated with risk of complex diseases and\n        facilitate understanding of underlying molecular mechanisms related to\n        the disease-risk-associated genetic variants. I developed a statistical\n        approach, called GPA-Tree, that combines a machine learning algorithm\n        with the hierarchical modeling architecture for integrative analysis of\n        genome wide association studies (GWAS) data and functional annotation\n        information (e.g., gene expression, expression quantitative trait loci,\n        epigenetic marks).";
			t20 = space();
			p2 = element("p");
			p2.textContent = "Aside from independent research, I also enjoy multidisciplinary\n        collaborations, and work with clinical and translational scientists. I usually work alongside my collaborators to develop\n        research questions, design studies, perform statistical analysis,\n        interpret results and co-author manuscripts.";
			t22 = space();
			p3 = element("p");
			t23 = text("See my\n        ");
			a6 = element("a");
			a6.textContent = "CV";
			t25 = text("\n        for additional details.");
			t26 = space();
			h22 = element("h2");
			h22.textContent = "Contact";
			t28 = space();
			div3 = element("div");

			div3.innerHTML = `<p>Aastha Khatiwada</p> 
      <p>Divison of Biostatistics and Bioinformatics</p> 
      <p>1400 Jackson Street, Suite M222e</p> 
      <p>Denver, CO 80206</p> 
      <p>email: khatiwadaa at njhealth dot org</p>`;

			attr(div0, "class", "md:w-1/3 pr-0 mb-4 md:mr-6");
			attr(h20, "class", "mt-0 svelte-1uoq69v");
			set_style(h20, "margin-top", "0");
			attr(h21, "class", "text-xl font-bold mb-4 svelte-1uoq69v");
			attr(p1, "class", "mt-4");
			attr(p2, "class", "mt-4");
			attr(a6, "href", "/cv");
			attr(a6, "class", "external-link");
			attr(p3, "class", "mt-4");
			attr(h22, "class", "text-xl font-bold mb-4 svelte-1uoq69v");
			attr(div4, "class", "md:w-2/3");
			attr(div5, "class", "block md:flex");
		},
		m(target, anchor) {
			insert(target, div5, anchor);
			append(div5, div0);
			append(div5, t0);
			append(div5, div4);
			append(div4, h20);
			append(div4, t2);
			append(div4, div1);
			append(div4, t16);
			append(div4, h21);
			append(div4, t18);
			append(div4, div2);
			append(div2, p1);
			append(div2, t20);
			append(div2, p2);
			append(div2, t22);
			append(div2, p3);
			append(p3, t23);
			append(p3, a6);
			append(p3, t25);
			append(div4, t26);
			append(div4, h22);
			append(div4, t28);
			append(div4, div3);

			if (!mounted) {
				dispose = action_destroyer(link_action = link.call(null, a6));
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div5);
			mounted = false;
			dispose();
		}
	};
}

class Home extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Home;
