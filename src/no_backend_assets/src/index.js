import { no_backend } from "../../declarations/no_backend";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with no_backend actor, calling the greet method
  const greeting = await no_backend.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
