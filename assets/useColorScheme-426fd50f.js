import{r as s}from"./index-ff7f5132.js";const n=()=>{const a=(()=>window.matchMedia("(prefers-color-scheme: dark)").matches)(),[c,r]=s.useState(a);return s.useEffect(()=>{const t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",e=>r(e.matches)),()=>t.removeEventListener("change",e=>r(e.matches))},[]),c};export{n as u};
