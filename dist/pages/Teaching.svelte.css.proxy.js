// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h2{font-weight:700;font-size:1.25rem;line-height:1.75rem;margin-top:1rem;margin-bottom:1rem}.card{padding-left:0px;padding-right:0px;padding-top:1rem;padding-bottom:1rem}@media(min-width: 768px){.card{padding-left:1.5rem;padding-right:1.5rem}}.card-row{padding-top:0.25rem;padding-bottom:0.25rem\n}.card-title{font-weight:600;padding-bottom:0.5rem;font-style:italic}.card-row-header.svelte-1kwnt2e{flex-shrink:0;--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.dark .card-row-header.svelte-1kwnt2e{--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}.card-row-header.svelte-1kwnt2e{width:9rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}