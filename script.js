let currentProject = -1;
let names = [];
let links = [];
names.push("TestSite", "BetterGoogle");
links.push("https://fishy52.github.io/TestSite", "https://fishy52.github.io/BetterGoogle");
nextProject();

function nextProject() {
    currentProject++;

    if (currentProject < names.length) {

    } else {
        currentProject = 0;
    }

    document.getElementById("project").innerHTML = 
    `
    <h1 class="projectButton" onclick="openProject()">` + names[currentProject] + `</h1>
    `;
}

function openProject() {
    window.open(links[currentProject]);
}