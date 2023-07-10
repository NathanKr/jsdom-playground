import { add } from "./utils";

export function mainUI() {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
      <div>
        <h1>Vite + TypeScript</h1>
        <button onclick>Click Me</button>
        <button onclick>add(1,2)</button>
        <br/><br/>
        <output></output>
      </div>
    `;
}

export function addListeners() {
  document.querySelectorAll("button")[0].addEventListener("click", () => {
    console.log("button clicked");
    localStorage.setItem("key1", "val1");
  });

  document.querySelectorAll("button")[1].addEventListener("click", () => {
    const res = add(1, 2);
    document.querySelector('output')!.textContent=`${res}`;
  });
}
