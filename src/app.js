import layout from "../view/layout.js";
import dohvatiRezultate from "./dohvatiRezultate.js";
import rezultati from "../view/rezultati.js";
const spinner = document.getElementById("spinner");

export default async () => {
  document.getElementById("app").innerHTML = layout();
  document.getElementById("search").addEventListener("keyup", async () => {
    spinner.removeAttribute("hidden");
    let Rez = await dohvatiRezultate(event.target.value);
    document.getElementById("rezultati").innerHTML = await rezultati(Rez);
    await spinner.setAttribute("hidden", "");
  });
};
