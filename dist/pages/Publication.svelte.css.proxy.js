// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".publication-item{margin-left:1rem;margin-right:1rem;margin-bottom:2rem}.special-text.svelte-15gy8pn{display:flex;align-items:center;margin-left:1rem;--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity))}.dark .special-text.svelte-15gy8pn{--tw-text-opacity:1;color:rgba(252, 211, 77, var(--tw-text-opacity))}.image-wrapper{margin-bottom:0.5rem;margin-right:2rem}.publication-image{border-width:1px;margin:auto;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);width:110px;min-width:110px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}