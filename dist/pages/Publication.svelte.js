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
	let h20;
	let t3;
	let div35;
	let div2;
	let t12;
	let div5;
	let t21;
	let div8;
	let t30;
	let div11;
	let t39;
	let div14;
	let t48;
	let div17;
	let t57;
	let div20;
	let t65;
	let h21;
	let t67;
	let div23;
	let t76;
	let div26;
	let t85;
	let h22;
	let t87;
	let div29;
	let div27;
	let t88;
	let div28;
	let p9;
	let t95;
	let p10;
	let inlinesvg0;
	let t96;
	let t97;
	let div32;
	let t106;
	let h23;
	let t108;
	let div34;
	let t116;
	let h11;
	let t118;
	let div37;
	let div36;
	let p13;
	let t125;
	let p14;
	let inlinesvg1;
	let t126;
	let t127;
	let h12;
	let t129;
	let div39;
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
			h20 = element("h2");
			h20.textContent = "2022";
			t3 = space();
			div35 = element("div");
			div2 = element("div");

			div2.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/aap.jpg"/></div> 
    <div><p>Gross LM, Nelson HS, <strong>Khatiwada A</strong>, Hoyte FC.
        <a class="external-link" target="_blank" href="https://doi.org/10.2500/aap.2022.43.220067">Curcumin does not significantly affect immediate skin tests.</a>   
        <span class="italic">Allergy &amp; Asthma Proceedings</span>
        Volume 43, Number 6, 1 November 2022, pp. 543-545(3).</p></div>`;

			t12 = space();
			div5 = element("div");

			div5.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/copd.jpeg"/></div> 
    <div><p>Strand M, <strong>Khatiwada A</strong>, Baraghoshi D, et al.
        <a class="external-link" target="_blank" href="http://doi.org/10.15326/jcopdf.2022.0281">Predicting COPD Progression in Current and 
          Former Smokers Using a Joint Model for Forced Expiratory Volume in 1 Second and Forced 
          Expiratory Volume in 1 Second to Forced Vital Capacity Ratio.</a>   
        <span class="italic">Chronic Obstr Pulm Dis.</span>
        2022; 9(3): 439-453.</p></div>`;

			t21 = space();
			div8 = element("div");

			div8.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/imm.jpeg"/></div> 
    <div><p>Richard MLL, Wirth JR, <strong>Khatiwada A</strong>, Chung D, Gilkeson GS, Cunningham MA.
        <a class="external-link" target="_blank" href="https://doi.org/10.1111/imm.13541">Conditional knockout of ERα in CD11c+ cells impacts female survival and inflammatory cytokine profile in murine lupus.</a>   
        <span class="italic">Immunology.</span>
        2022; 0019-2805.</p></div>`;

			t30 = space();
			div11 = element("div");

			div11.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/smj.png"/></div> 
    <div><p>Burton JH, <strong>Khatiwada A</strong>, Chung D, Meissner EG. 
        <a class="external-link" target="_blank" href="https://doi.org/10.14423/smj.0000000000001402">Association of Referral Source and Substance Use with Hepatitis C Virus 
        Outcomes at a Southern Academic Medical Center.</a>   
        <span class="italic">Southern Medical Journal.</span>
        2022 Jun;115(6):352-357. PMID: 35649518.</p></div>`;

			t39 = space();
			div14 = element("div");

			div14.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/alr.jpeg"/></div> 
    <div><p>Beswick DM, Humphries SM, Miller JE, Balkissoon CD, <strong>Khatiwada A</strong>, Vladar EK, Ramakrishnan VR, Lynch DA, Taylor-Cousar JL
        <a class="external-link" target="_blank" href="https://doi.org/10.1002/alr.23016">Objective and patient-based measures of chronic rhinosinusitis in people with cystic fibrosis 
          treated with highly effective modulator therapy.</a>.
        <span class="italic">International Forum of Allergy &amp; Rhinology.</span>
        2022 May 20. PMID: 35595546.</p></div>`;

			t48 = space();
			div17 = element("div");

			div17.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/journalho.jpeg"/></div> 
    <div><p>Song NJ, Allen C, Vilgelm AE, Riesenberg BP, Weller KP, Reynolds K, 
        Chakravarthy KB, Kumar A, <strong>Khatiwada A</strong>, Sun Z, Ma A, Chang Y, Yusuf M,Li A, 
        Zeng C, Evans JP, Bucci D, Gunasena M, Xu M, Liyanage NPM, Bolyard C, 
        Velegraki M, Liu SL, Ma Q, Devenport M, Liu Y, Zheng P, Malvestutto CD, 
        Chung D, Li Z.
        <a class="external-link" target="_blank" href="https://doi.org/10.1186/s13045-021-01222-y">Treatment with soluble CD24 attenuates COVID-19-associated systemic immunopathology</a>.
        <span class="italic">Journal of Hematology &amp; Oncology.</span>
        15, 5 (2022).</p></div>`;

			t57 = space();
			div20 = element("div");

			div20.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/bioinformatics.gif"/></div> 
    <div><p><strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos PS, Pietrzak M, Lawson A, Hunt KJ, Kim HJ, Chung D.
        <a class="external-link" target="_blank" href="https://doi.org/10.1093/bioinformatics/btab802">GPA-Tree: 
          Statistical Approach for Functional-Annotation-Tree-Guided Prioritization of GWAS Results</a>.
        <span class="italic">Bioinformatics</span>
        Volume 38, Issue 4, 15 February 2022, Pages 1067–1074.</p></div>`;

			t65 = space();
			h21 = element("h2");
			h21.textContent = "2021";
			t67 = space();
			div23 = element("div");

			div23.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/alr.jpeg"/></div> 
    <div><p>Beswick D, Humphries S, Balkissoon C, Strand M, Miller J,  <strong>Khatiwada A</strong>, Vladar E, Lynch DA, Taylor-Cousar J.
        <a class="external-link" target="_blank" href="https://doi.org/10.1002/alr.22946">Olfactory Dysfunction in People with Cystic Fibrosis with at least One Copy of F508del</a>.
        <span class="italic">International Forum of Allergy &amp; Rhinology.</span>
        2021 Dec 15. PMID: 34908251.</p></div>`;

			t76 = space();
			div26 = element("div");

			div26.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/ki.JPG"/></div> 
    <div><p>Ayoub I, Wolf BJ, Geng L, Song H, <strong>Khatiwada A</strong>, Tsao BP, Oates JC, Rovin BH.
        <a class="external-link" target="_blank" href="https://doi.org/10.1016/j.kint.2021.11.014">Prediction Models of Treatment Response in Lupus Nephritis</a>.
        <span class="italic">Kidney Int.</span>
        2021 Dec 3:S0085-2538(21)01079-6. Epub ahead of print. PMID: 34871620.</p></div>`;

			t85 = space();
			h22 = element("h2");
			h22.textContent = "2020";
			t87 = space();
			div29 = element("div");
			div27 = element("div");
			div27.innerHTML = `<img class="publication-image" src="/public/img/pr.png"/>`;
			t88 = space();
			div28 = element("div");
			p9 = element("p");

			p9.innerHTML = `<strong>Khatiwada A</strong>, Wolf BJ, Mulligan JK, Shary JR, Hewison M,
        Baatz JE, Newton DA, Hawrylowicz C, Hollis BW, Wagner CL.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32311700/">Effects of vitamin D
          supplementation on circulating concentrations of growth factors and
          immune-mediators in healthy women during pregnancy</a>.
        <span class="italic">Pediatr Res.</span>
        2020 Apr; 20:1-9. PMID: 32311700.`;

			t95 = space();
			p10 = element("p");
			create_component(inlinesvg0.$$.fragment);
			t96 = text("\n        Highlighted in the Editor’s Focus for the February 2021 print issue of\n        Pediatric Research");
			t97 = space();
			div32 = element("div");

			div32.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/csam.gif"/></div> 
    <div><p>Nam JH*,
        <strong>Khatiwada A*</strong>, Matthews LJ, Schulte BA, Dubno JR, Chung
        D.
        <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32566544/">Ranking subjects based on paired compositional data with application
          to age-related hearing loss subtyping</a>.
        <span class="italic">Commun Stat Appl Methods.</span>
        2020 Mar;27(2):225-239. PMID: 32566544; PMCID: PMC7304553 (*joint first
        author).</p></div>`;

			t106 = space();
			h23 = element("h2");
			h23.textContent = "2018";
			t108 = space();
			div34 = element("div");

			div34.innerHTML = `<div class="image-wrapper"><img class="publication-image" src="/public/img/po.gif"/></div> 
    <p><strong>Khatiwada A</strong>, Shoaibi A, Neelon B, Emond JA,
      Benjamin-Neelon SE.
      <a class="external-link" target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30019385/">Household chaos during
        infancy and infant weight status at 12 months</a>.
      <span class="italic">Pediatr Obes.</span>
      2018 Oct;13(10):607-613. PMID: 30019385; PMCID: PMC6300983.</p>`;

			t116 = space();
			h11 = element("h1");
			h11.textContent = "Master's Thesis";
			t118 = space();
			div37 = element("div");
			div36 = element("div");
			p13 = element("p");

			p13.innerHTML = `<strong>Khatiwada A</strong>. 
      <a class="external-link" target="_blank" href="https://dc.etsu.edu/etd/3090/.">Multilevel Models for Longitudinal Data</a>.
      <span class="italic">Electronic Theses and Dissertations.</span>
      2016; Paper 3090.`;

			t125 = space();
			p14 = element("p");
			create_component(inlinesvg1.$$.fragment);
			t126 = text("\n        Downloaded over 2,100 times");
			t127 = space();
			h12 = element("h1");
			h12.textContent = "Manuscript under Review";
			t129 = space();
			div39 = element("div");
			div39.innerHTML = `<div class="publication-item"><p></p></div>`;
			attr(h10, "class", "text-xl font-bold mb-4");
			attr(h20, "class", "text-xl font-bold mb-4");
			attr(div2, "class", "publication-item md:flex");
			attr(div5, "class", "publication-item md:flex");
			attr(div8, "class", "publication-item md:flex");
			attr(div11, "class", "publication-item md:flex");
			attr(div14, "class", "publication-item md:flex");
			attr(div17, "class", "publication-item md:flex");
			attr(div20, "class", "publication-item md:flex");
			attr(h21, "class", "text-xl font-bold mb-4");
			attr(div23, "class", "publication-item md:flex");
			attr(div26, "class", "publication-item md:flex");
			attr(h22, "class", "text-xl font-bold mb-4");
			attr(div27, "class", "image-wrapper");
			attr(p10, "class", "special-text svelte-zfisdh");
			attr(div29, "class", "publication-item md:flex");
			attr(div32, "class", "publication-item md:flex");
			attr(h23, "class", "text-xl font-bold mb-4");
			attr(div34, "class", "publication-item md:flex");
			attr(h11, "class", "text-xl font-bold mb-4");
			attr(p14, "class", "special-text svelte-zfisdh");
			attr(div36, "class", "publication-item");
			attr(h12, "class", "text-xl font-bold mb-4");
		},
		m(target, anchor) {
			insert(target, h10, anchor);
			insert(target, t1, anchor);
			insert(target, h20, anchor);
			insert(target, t3, anchor);
			insert(target, div35, anchor);
			append(div35, div2);
			append(div35, t12);
			append(div35, div5);
			append(div35, t21);
			append(div35, div8);
			append(div35, t30);
			append(div35, div11);
			append(div35, t39);
			append(div35, div14);
			append(div35, t48);
			append(div35, div17);
			append(div35, t57);
			append(div35, div20);
			append(div35, t65);
			append(div35, h21);
			append(div35, t67);
			append(div35, div23);
			append(div35, t76);
			append(div35, div26);
			append(div35, t85);
			append(div35, h22);
			append(div35, t87);
			append(div35, div29);
			append(div29, div27);
			append(div29, t88);
			append(div29, div28);
			append(div28, p9);
			append(div28, t95);
			append(div28, p10);
			mount_component(inlinesvg0, p10, null);
			append(p10, t96);
			append(div35, t97);
			append(div35, div32);
			append(div35, t106);
			append(div35, h23);
			append(div35, t108);
			append(div35, div34);
			insert(target, t116, anchor);
			insert(target, h11, anchor);
			insert(target, t118, anchor);
			insert(target, div37, anchor);
			append(div37, div36);
			append(div36, p13);
			append(div36, t125);
			append(div36, p14);
			mount_component(inlinesvg1, p14, null);
			append(p14, t126);
			insert(target, t127, anchor);
			insert(target, h12, anchor);
			insert(target, t129, anchor);
			insert(target, div39, anchor);
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
			if (detaching) detach(h20);
			if (detaching) detach(t3);
			if (detaching) detach(div35);
			destroy_component(inlinesvg0);
			if (detaching) detach(t116);
			if (detaching) detach(h11);
			if (detaching) detach(t118);
			if (detaching) detach(div37);
			destroy_component(inlinesvg1);
			if (detaching) detach(t127);
			if (detaching) detach(h12);
			if (detaching) detach(t129);
			if (detaching) detach(div39);
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