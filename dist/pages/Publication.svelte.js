import './Publication.svelte.css.proxy.js';
/* src/pages/Publication.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
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
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import InlineSVG from "../../_snowpack/pkg/svelte-inline-svg.js";
import star from "../../public/heroicons/solid/star.svg.proxy.js";

function create_fragment(ctx) {
	let h10;
	let t1;
	let div23;
	let div2;
	let t10;
	let div5;
	let t19;
	let div8;
	let t25;
	let div11;
	let t34;
	let div14;
	let t42;
	let div17;
	let div15;
	let t43;
	let div16;
	let p5;
	let t50;
	let p6;
	let inlinesvg0;
	let t51;
	let t52;
	let div20;
	let t61;
	let div22;
	let t69;
	let h11;
	let t71;
	let div25;
	let div24;
	let p9;
	let t78;
	let p10;
	let inlinesvg1;
	let t79;
	let t80;
	let h12;
	let t82;
	let div28;
	let current;

	inlinesvg0 = new InlineSVG({
			props: {
				src: star,
				class: "h-6 w-6 flex-shrink-0 fill-current inline-block mr-1"
			}
		});

	inlinesvg1 = new InlineSVG({
			props: {
				src: star,
				class: "h-6 w-6 flex-shrink-0 fill-current inline-block mr-1"
			}
		});

	return {
		c() {
			h10 = element("h1");
			h10.textContent = "Peer-reviewed Publications";
			t1 = space();
			div23 = element("div");
			div2 = element("div");

			div2.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/journalho.jpeg"/></div> 
    <div><p>Song NJ, Allen C, Vilgelm AE, Riesenberg BP, Weller KP, Reynolds K, 
        Chakravarthy KB, Kumar A, <strong>Khatiwada A</strong>, Sun Z, Ma A, Chang Y, Yusuf M,Li A, 
        Zeng C, Evans JP, Bucci D, Gunasena M, Xu M, Liyanage NPM, Bolyard C, 
        Velegraki M, Liu SL, Ma Q, Devenport M, Liu Y, Zheng P, Malvestutto CD, 
        Chung D, Li Z.
        <a class="external-link" target="_blank" href="https://doi.org/10.1186/s13045-021-01222-y">Treatment with soluble CD24 attenuates COVID-19-associated systemic immunopathology.</a>.
        <span class="italic">Journal of Hematology &amp; Oncology.</span>
        15, 5 (2022).</p></div>`;

			t10 = space();
			div5 = element("div");

			div5.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/alr.jpeg"/></div> 
    <div><p>Beswick D, Humphries S, Balkissoon C, Strand M, Miller J,  <strong>Khatiwada A</strong>, Vladar E, Lynch DA, Taylor-Cousar J.
        <a class="external-link" target="_blank" href="https://doi.org/10.1002/alr.22946">Olfactory Dysfunction in People with Cystic Fibrosis with at least One Copy of F508del.</a>.
        <span class="italic">International Forum of Allergy &amp; Rhinology.</span>
        2021 Dec 15. PMID: 34908251.</p></div>`;

			t19 = space();
			div8 = element("div");

			div8.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/"/></div> 
    <div><p>Burton JH, <strong>Khatiwada A</strong>, Chung D, Meissner EG. 
        Association of Referral Source and Substance Use with Hepatitis C Virus 
        Outcomes at a Southern Academic Medical Center. To appear in
        <span class="italic">The Southern Medical Journal.</span></p></div>`;

			t25 = space();
			div11 = element("div");

			div11.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/ki.JPG"/></div> 
    <div><p>Ayoub I, Wolf BJ, Geng L, Song H, <strong>Khatiwada A</strong>, Tsao BP, Oates JC, Rovin BH.
        <a class="external-link" target="_blank" href="https://doi.org/10.1016/j.kint.2021.11.014">Prediction Models of Treatment Response in Lupus Nephritis</a>.
        <span class="italic">Kidney Int.</span>
        2021 Dec 3:S0085-2538(21)01079-6. Epub ahead of print. PMID: 34871620.</p></div>`;

			t34 = space();
			div14 = element("div");

			div14.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/bioinformatics.gif"/></div> 
    <div><p><strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos PS, Pietrzak M, Lawson A, Hunt KJ, Kim HJ, Chung D.
        <a class="external-link" target="_blank" href="https://doi.org/10.1093/bioinformatics/btab802">GPA-Tree: 
          Statistical Approach for Functional-Annotation-Tree-Guided Prioritization of GWAS Results</a>.
        <span class="italic">Bioinformatics</span>
        2021 Nov 26:btab802. Epub ahead of print. PMID: 34849578.</p></div>`;

			t42 = space();
			div17 = element("div");
			div15 = element("div");
			div15.innerHTML = `<img class="publication-image" src="/public/img/pr.png"/>`;
			t43 = space();
			div16 = element("div");
			p5 = element("p");

			p5.innerHTML = `<strong>Khatiwada A</strong>, Wolf BJ, Mulligan JK, Shary JR, Hewison M,
        Baatz JE, Newton DA, Hawrylowicz C, Hollis BW, Wagner CL.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32311700/">Effects of vitamin D
          supplementation on circulating concentrations of growth factors and
          immune-mediators in healthy women during pregnancy</a>.
        <span class="italic">Pediatr Res.</span>
        2020 Apr; 20:1-9. PMID: 32311700.`;

			t50 = space();
			p6 = element("p");
			create_component(inlinesvg0.$$.fragment);
			t51 = text("\n        Highlighted in the Editor’s Focus for the February 2021 print issue of\n        Pediatric Research");
			t52 = space();
			div20 = element("div");

			div20.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/csam.gif"/></div> 
    <div><p>Nam JH*,
        <strong>Khatiwada A*</strong>, Matthews LJ, Schulte BA, Dubno JR, Chung
        D.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32566544/">Ranking subjects based on paired compositional data with application
          to age-related hearing loss subtyping</a>.
        <span class="italic">Commun Stat Appl Methods.</span>
        2020 Mar;27(2):225-239. PMID: 32566544; PMCID: PMC7304553 (*joint first
        author).</p></div>`;

			t61 = space();
			div22 = element("div");

			div22.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/po.gif"/></div> 
    <p><strong>Khatiwada A</strong>, Shoaibi A, Neelon B, Emond JA,
      Benjamin-Neelon SE.
      <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30019385/">Household chaos during
        infancy and infant weight status at 12 months</a>.
      <span class="italic">Pediatr Obes.</span>
      2018 Oct;13(10):607-613. PMID: 30019385; PMCID: PMC6300983.</p>`;

			t69 = space();
			h11 = element("h1");
			h11.textContent = "Master's Thesis";
			t71 = space();
			div25 = element("div");
			div24 = element("div");
			p9 = element("p");

			p9.innerHTML = `<strong>Khatiwada A</strong>. 
      <a class="external-link" target="_blank" href="https://dc.etsu.edu/etd/3090/.">Multilevel Models for Longitudinal Data</a>.
      <span class="italic">Electronic Theses and Dissertations.</span>
      2016; Paper 3090.`;

			t78 = space();
			p10 = element("p");
			create_component(inlinesvg1.$$.fragment);
			t79 = text("\n        Downloaded over 2,100 times");
			t80 = space();
			h12 = element("h1");
			h12.textContent = "Manuscript under Review";
			t82 = space();
			div28 = element("div");

			div28.innerHTML = `<div class="publication-item"><p>Richard MLL, Wirth JR,
      <strong>Khatiwada A</strong>, Chung D, Eudaly J, Gilkeson GS, Cunningham
      MA. Conditional knockout of ERα in CD11c+ cells, impact on survival and inflammatory cytokines in murine lupus. Submitted to
      <span class="italic">The Journal of Immunology.</span></p></div> 
  <div class="publication-item"><p>Strand M, <strong>Khatiwada A</strong>, Baraghoshi D, Lynch D, Silverman E, Bhatt S, Austin E, Regan E, Boriek A, Crapo J. 
      Predicting COPD progression in current and former smokers using a joint model for FEV1 and FEV1/FVC. 
      Submitted to <span class="italic">Chronic Obstructive Pulmonary Diseases: Journal of the COPD Foundation.</span></p></div>`;

			attr(h10, "class", "text-xl font-bold mb-4");
			attr(div2, "class", "publication-item md:flex");
			attr(div5, "class", "publication-item md:flex");
			attr(div8, "class", "publication-item md:flex");
			attr(div11, "class", "publication-item md:flex");
			attr(div14, "class", "publication-item md:flex");
			attr(div15, "class", "image-wrapper");
			attr(p6, "class", "special-text svelte-zfisdh");
			attr(div17, "class", "publication-item md:flex");
			attr(div20, "class", "publication-item md:flex");
			attr(div22, "class", "publication-item md:flex");
			attr(h11, "class", "text-xl font-bold mb-4");
			attr(p10, "class", "special-text svelte-zfisdh");
			attr(div24, "class", "publication-item");
			attr(h12, "class", "text-xl font-bold mb-4");
		},
		m(target, anchor) {
			insert(target, h10, anchor);
			insert(target, t1, anchor);
			insert(target, div23, anchor);
			append(div23, div2);
			append(div23, t10);
			append(div23, div5);
			append(div23, t19);
			append(div23, div8);
			append(div23, t25);
			append(div23, div11);
			append(div23, t34);
			append(div23, div14);
			append(div23, t42);
			append(div23, div17);
			append(div17, div15);
			append(div17, t43);
			append(div17, div16);
			append(div16, p5);
			append(div16, t50);
			append(div16, p6);
			mount_component(inlinesvg0, p6, null);
			append(p6, t51);
			append(div23, t52);
			append(div23, div20);
			append(div23, t61);
			append(div23, div22);
			insert(target, t69, anchor);
			insert(target, h11, anchor);
			insert(target, t71, anchor);
			insert(target, div25, anchor);
			append(div25, div24);
			append(div24, p9);
			append(div24, t78);
			append(div24, p10);
			mount_component(inlinesvg1, p10, null);
			append(p10, t79);
			insert(target, t80, anchor);
			insert(target, h12, anchor);
			insert(target, t82, anchor);
			insert(target, div28, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(inlinesvg0.$$.fragment, local);
			transition_in(inlinesvg1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(inlinesvg0.$$.fragment, local);
			transition_out(inlinesvg1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h10);
			if (detaching) detach(t1);
			if (detaching) detach(div23);
			destroy_component(inlinesvg0);
			if (detaching) detach(t69);
			if (detaching) detach(h11);
			if (detaching) detach(t71);
			if (detaching) detach(div25);
			destroy_component(inlinesvg1);
			if (detaching) detach(t80);
			if (detaching) detach(h12);
			if (detaching) detach(t82);
			if (detaching) detach(div28);
		}
	};
}

class Publication extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Publication;