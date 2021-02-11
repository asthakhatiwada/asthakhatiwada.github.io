// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".publication-item.svelte-iwsbgz{margin-left:1rem;margin-right:1rem;margin-bottom:2rem}.special-text.svelte-iwsbgz{display:flex;align-items:center;margin-left:1rem;--tw-text-opacity:1;color:rgba(251, 191, 36, var(--tw-text-opacity))}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}