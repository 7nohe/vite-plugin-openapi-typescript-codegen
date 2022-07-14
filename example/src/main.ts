import { PetsService } from "../openapi";

PetsService.listPets().then(console.log);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;
