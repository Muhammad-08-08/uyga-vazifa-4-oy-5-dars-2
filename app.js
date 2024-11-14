let ul1 = document.querySelector(".ul1");
let ul2 = document.querySelector(".ul2");
let form = document.querySelector("form");

let todo = [
  { id: 2, title: "To study React fundamentals", status: "todo" },
  { id: 5, title: "To study React fundamentals", status: "completed" },
];

const render = () => {
  ul1.textContent = "";
  ul2.textContent = "";

  todo.forEach((e) => {
    if (e.status === "completed") {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = e.title + e.id + "";
      li.classList.add("completed");
      li.prepend(p);
      ul2.prepend(li);
    } else {
      ul1.innerHTML += `
         <li class="todo">
              <p>${e.title}</p>
              <div>
                <button class="button btn-complete">
                  <img src="./acses/ptichka.svg" alt="" />
                </button>
                <button class="button">
                  <img src="./acses/korzinka.svg" alt="" />
                </button>
              </div>
            </li>
        `;
    }
  });
};
render();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target[0].value;

  todo.push({
    title: value,
    status: "todo",
    id: new Date().getTime(),
  });
  e.target.reset();
  render();
});
