import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello pagination!</h1>
<div>
    <button class="next">next</button>
    <button class="prev">prev</button>
   <div class="peron-preview"></div>
</div>
`;

addlistenerts();

function addlistenerts() {
  const elPrev = document.querySelector(".prev");
  const elNext = document.querySelector(".next");
  elPrev.addEventListener("click", () => movePage(-1));
  elNext.addEventListener("click", () => movePage(1));
}
const PAGE_SIZE = 2;

var filterBY = {
  page: 0
};
function movePage(val) {
  console.log();
  // console.log(val);
  renderPerson();
  console.log(filterBY);
  getForDisplay();
  filterBY.page += val;
}

var people = [
  {
    id: "101",
    name: "person1",
    age: 34
  },
  {
    id: "102",
    name: "person2",
    age: 36
  },
  {
    id: "103",
    name: "person3",
    age: 38
  },
  {
    id: "104",
    name: "person4",
    age: 34
  },
  {
    id: "105",
    name: "person5",
    age: 36
  },
  {
    id: "103",
    name: "person6",
    age: 38
  }
];

function getForDisplay() {
  if (filterBY) {
    var startIdx = filterBY.page * PAGE_SIZE;
    console.log("startIdx:", startIdx);

    return people.slice(startIdx, startIdx + PAGE_SIZE);
  }
}

function renderPerson() {
  var people = getForDisplay();
  const srtHTMLs = people.map((person) => {
    return `
    <article>
      <h4>${person.name}</h4>
      <p>${person.age}</p>
      <p>${person.id}</p>
  </article>`;
  });
  const elPersonPreview = document.querySelector(".peron-preview");
  elPersonPreview.innerHTML = srtHTMLs.join("");
}
