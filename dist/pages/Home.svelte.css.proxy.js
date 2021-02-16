// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h2.svelte-1uoq69v{font-weight:700;font-size:1.25rem;line-height:1.75rem;margin-bottom:0.5rem;margin-top:2.5rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}