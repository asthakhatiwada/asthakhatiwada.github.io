// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav-item.svelte-107ahdg:hover{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))\n}.nav-item.svelte-107ahdg{border-radius:0.25rem;display:block;display:flex;align-items:center;font-weight:600;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))\n}@media(min-width: 640px){.nav-item.svelte-107ahdg{margin-top:0px;margin-left:0.5rem\n  }}a.nav-item-active{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}