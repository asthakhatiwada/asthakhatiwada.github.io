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
	let div11;
	let div2;
	let t9;
	let div5;
	let div3;
	let t10;
	let div4;
	let p1;
	let t17;
	let p2;
	let inlinesvg0;
	let t18;
	let t19;
	let div8;
	let t28;
	let div10;
	let t36;
	let h11;
	let t38;
	let div13;
	let div12;
	let p5;
	let t45;
	let p6;
	let inlinesvg1;
	let t46;
	let t47;
	let h12;
	let t49;
	let div20;
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
			div11 = element("div");
			div2 = element("div");

			div2.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/pr.png"/></div> 
    <div><p><strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos PS, Pietrzak M, Lawson A, Hunt KJ, Kim HJ, Chung D.
        <a class="external-link" target="_blank" href="https://academic.oup.com/bioinformatics/advance-article-abstract/doi/10.1093/bioinformatics/btab802/6443109">GPA-Tree: 
          Statistical Approach for Functional-Annotation-Tree-Guided Prioritization of GWAS Results</a>.
        <span class="italic">Bioinformatics</span>
        2021 Nov.</p></div>`;

			t9 = space();
			div5 = element("div");
			div3 = element("div");
			div3.innerHTML = `<img class="publication-image" src="/public/img/pr.png"/>`;
			t10 = space();
			div4 = element("div");
			p1 = element("p");

			p1.innerHTML = `<strong>Khatiwada A</strong>, Wolf BJ, Mulligan JK, Shary JR, Hewison M,
        Baatz JE, Newton DA, Hawrylowicz C, Hollis BW, Wagner CL.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32311700/">Effects of vitamin D
          supplementation on circulating concentrations of growth factors and
          immune-mediators in healthy women during pregnancy</a>.
        <span class="italic">Pediatr Res.</span>
        2020 Apr; 20:1-9. PMID: 32311700.`;

			t17 = space();
			p2 = element("p");
			create_component(inlinesvg0.$$.fragment);
			t18 = text("\n        Highlighted in the Editor’s Focus for the February 2021 print issue of\n        Pediatric Research");
			t19 = space();
			div8 = element("div");

			div8.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/csam.gif"/></div> 
    <div><p>Nam JH*,
        <strong>Khatiwada A*</strong>, Matthews LJ, Schulte BA, Dubno JR, Chung
        D.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32566544/">Ranking subjects based on paired compositional data with application
          to age-related hearing loss subtyping</a>.
        <span class="italic">Commun Stat Appl Methods.</span>
        2020 Mar;27(2):225-239. PMID: 32566544; PMCID: PMC7304553 (*joint first
        author).</p></div>`;

			t28 = space();
			div10 = element("div");

			div10.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/po.gif"/></div> 
    <p><strong>Khatiwada A</strong>, Shoaibi A, Neelon B, Emond JA,
      Benjamin-Neelon SE.
      <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30019385/">Household chaos during
        infancy and infant weight status at 12 months</a>.
      <span class="italic">Pediatr Obes.</span>
      2018 Oct;13(10):607-613. PMID: 30019385; PMCID: PMC6300983.</p>`;

			t36 = space();
			h11 = element("h1");
			h11.textContent = "Master's Thesis";
			t38 = space();
			div13 = element("div");
			div12 = element("div");
			p5 = element("p");

			p5.innerHTML = `<strong>Khatiwada A</strong>. 
      <a class="external-link" target="_blank" href="https://dc.etsu.edu/etd/3090/.">Multilevel Models for Longitudinal Data</a>.
      <span class="italic">Electronic Theses and Dissertations.</span>
      2016; Paper 3090.`;

			t45 = space();
			p6 = element("p");
			create_component(inlinesvg1.$$.fragment);
			t46 = text("\n        Downloaded over 1,790 times");
			t47 = space();
			h12 = element("h1");
			h12.textContent = "Manuscript under Review";
			t49 = space();
			div20 = element("div");

			div20.innerHTML = `<div class="publication-item"><p><strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos P, Pietrzak M,
      Lawson A, Hunt KJ, Kim HJ, Chung D. GPA-Tree: Statistical Approach for
      Functional-Annotation-Tree-Guided Prioritization of GWAS results.
      Submitted to
      <span class="italic">Bioinformatics.</span></p></div> 
  <div class="publication-item"><p>Song NJ, Allen C, Vilgelm AE, Riesenberg BP, Weller KP, Reynolds K, 
      Chakravarthy KB, Kumar A, <strong>Khatiwada A</strong>, Sun Z, Ma A, Chang Y, Yusuf M,Li A, 
      Zeng C, Evans JP, Bucci D, Gunasena M, Xu M, Liyanage NPM, Bolyard C, 
      Velegraki M, Liu SL, Ma Q, Devenport M, Liu Y, Zheng P, Malvestutto CD, 
      Chung D, Li Z. Immunological insights into the therapeutic roles of 
      soluble CD24 against severe COVID-19. Submitted to
      <span class="italic">New England Journal of Medicine.</span></p></div> 
 <div class="publication-item"><p>Ayoub I, Wolf BJ, Geng L, Song H,
      <strong>Khatiwada A</strong>, Tsao B, Oats J, Rovin B. Prediction Models
      of Treatment Response in Lupus Nephritis. Submitted to
      <span class="italic">Kidney International.</span></p></div> 
  <div class="publication-item"><p>Richard MLL, Wirth JR,
      <strong>Khatiwada A</strong>, Chung D, Eudaly J, Gilkeson GS, Cunningham
      MA. Conditional knockout of ERα in CD11c+ cells, impact on survival and inflammatory cytokines in murine lupus. Submitted to
      <span class="italic">The Journal of Immunology.</span></p></div> 
  <div class="publication-item"><p>Burton JH, <strong>Khatiwada A</strong>, Chung D, Meissner EG. Association of Referral Source and Substance Use with Hepatitis C Virus Outcomes at a Southern Academic Medical Center. Submitted to
      <span class="italic">Southern Medical Journal.</span></p></div> 
  <div class="publication-item"><p>Beswick D, Humphries S, Balkissoon C, Strand M, Miller J,  <strong>Khatiwada A</strong>, Vladar E, Lynch DA, Taylor-Cousar J. Olfactory Dysfunction in People with Cystic Fibrosis with at least One Copy of F508del. Submitted to
      <span class="italic">International Forum of Allergy &amp; Rhinology.</span></p></div>`;

			attr(h10, "class", "text-xl font-bold mb-4");
			attr(div2, "class", "publication-item md:flex");
			attr(div3, "class", "image-wrapper");
			attr(p2, "class", "special-text svelte-zfisdh");
			attr(div5, "class", "publication-item md:flex");
			attr(div8, "class", "publication-item md:flex");
			attr(div10, "class", "publication-item md:flex");
			attr(h11, "class", "text-xl font-bold mb-4");
			attr(p6, "class", "special-text svelte-zfisdh");
			attr(div12, "class", "publication-item");
			attr(h12, "class", "text-xl font-bold mb-4");
		},
		m(target, anchor) {
			insert(target, h10, anchor);
			insert(target, t1, anchor);
			insert(target, div11, anchor);
			append(div11, div2);
			append(div11, t9);
			append(div11, div5);
			append(div5, div3);
			append(div5, t10);
			append(div5, div4);
			append(div4, p1);
			append(div4, t17);
			append(div4, p2);
			mount_component(inlinesvg0, p2, null);
			append(p2, t18);
			append(div11, t19);
			append(div11, div8);
			append(div11, t28);
			append(div11, div10);
			insert(target, t36, anchor);
			insert(target, h11, anchor);
			insert(target, t38, anchor);
			insert(target, div13, anchor);
			append(div13, div12);
			append(div12, p5);
			append(div12, t45);
			append(div12, p6);
			mount_component(inlinesvg1, p6, null);
			append(p6, t46);
			insert(target, t47, anchor);
			insert(target, h12, anchor);
			insert(target, t49, anchor);
			insert(target, div20, anchor);
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
			if (detaching) detach(div11);
			destroy_component(inlinesvg0);
			if (detaching) detach(t36);
			if (detaching) detach(h11);
			if (detaching) detach(t38);
			if (detaching) detach(div13);
			destroy_component(inlinesvg1);
			if (detaching) detach(t47);
			if (detaching) detach(h12);
			if (detaching) detach(t49);
			if (detaching) detach(div20);
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