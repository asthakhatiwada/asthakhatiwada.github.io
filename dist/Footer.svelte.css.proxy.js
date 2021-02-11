// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".external-link.svelte-8bssa1{display:flex;align-items:center;font-weight:300;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem\n}.icon.svelte-8bssa1{display:inline-block;height:1.5rem;margin-left:0.25rem;margin-right:0.25rem;width:1.5rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}