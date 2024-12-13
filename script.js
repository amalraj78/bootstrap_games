const gamesList = [
    {
        title: "Tekken",
        year: 1994,
        imageUrl:
            "https://cdn.dashfight.com/bcf6a9046a9ea4c1070d4aedb2981103c978a704.png",
        id: 1,
    },
    {
        title: "Minecraft",
        year: 2009,
        imageUrl:
            "https://m.media-amazon.com/images/I/61smNbXSW1L._AC_UF1000,1000_QL80_.jpg",
        id: 2,
    },
    {
        title: "Elden Ring",
        year: 2022,
        imageUrl:
            "https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be",
        id: 3,
    },
    {
        title: "Street Fighter V",
        year: 2015,
        imageUrl:
            "https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
        id: 4,
    },
    {
        title: "Half Life 2",
        year: 2004,
        imageUrl:
            "https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
        id: 5,
    },
    {
        title: "Skyrim",
        year: 2011,
        imageUrl:
            "https://gaming-cdn.com/images/products/146/orig/the-elder-scrolls-v-skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991",
        id: 6,
    },
]

function writeDom() {
    gamesList.forEach((game) => {
        const articleContainer = document.querySelector(".row")
        articleContainer.innerHTML += `<article class="col">
            <div class="card shadow-sm">
                <img src="${game.imageUrl}" class="card-img-top" alt="${game.title}">
                <div class="card-body">
                    <h3 class="card-title">${game.title}</h3>
                    <p class="card-text">${game.year}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button"
                                        class="btn btn-sm btn-outline-secondary view"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >View
                                </button>
                                <button type="button"
                                        class="btn btn-sm btn-outline-secondary edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
    })
}

writeDom()

const editButtons = document.querySelectorAll(".edit")
console.log(editButtons)

const modal = new bootstrap.Modal(document.getElementById("exampleModal"))
document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", () => {
        modal.show(); // Utilise Bootstrap pour gérer le modal proprement
    })
})


/*
function writeDom() {
    gamesList.forEach((game) => {
        const articleContainer = document.querySelector(".row")
        articleContainer.innerHTML += `<article class="col">
                <div class="card shadow-sm">
                    <img src="${game.imageUrl}" class="card-img-top" alt="${game.title}">
                    <div class="card-body">
                        <p class="card-text">${game.title}
                            <p class="card-text">${game.year}</p>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary view"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        data-view-id="${game.id}"
                                >View</button>
                                <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        data-edit-id="${game.id}"
                                >Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title" id="exampleModalLabel">Titre du modal</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Détails du jeu
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
    })
}


writeDom()
*/

/*function editModal(gameId) {
    // Trouvez le jeu en fonction de son identifiant
    const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
    // Injectez le formulaire dans le corps du modal
    fetch("./form.html").then((data) => {
        data.text().then((form) => {
            // Modifiez le titre et le corps du modal
            const selectedGame = gamesList[result]
            modifyModal("Mode Edition", form)
            modifyFom({
                title: selectedGame.title,
                year: selectedGame.year,
                imageUrl: selectedGame.imageUrl,
            })
            document
                .querySelector('button[type="submit"]')
                .addEventListener("click", () => {
                    console.log("tu as clicke mon gars ")
                    updateGames(title.value, year.value, imageUrl.value, gameId)
                })
        })
    })
}*/

/*function modifyFom(gameData) {
    const form = document.querySelector("form")
    form.title.value = gameData.title
    form.year.value = gameData.year
    form.imageUrl.value = gameData.imageUrl
}*/

/*function modifyModal(modalTitle, modalBody) {
    // Écrire le nom du jeu dans le titre du modal
    document.querySelector(".modal-title").textContent = modalTitle
    // Écrire dans le corps du modal
    document.querySelector(".modal-body").innerHTML = modalBody
    // Écrire dans le footer
    document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
		<button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
</form>`
}*/

/*
function viewModal(gameId) {
    // console.log(gameId, gamesList)
    // Trouvez le jeu en fonction de son identifiant
    const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
    // passer une image comme corps du modal
    const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].title}" class="img-fluid" />`
    modifyModal(gamesList[result].title, modalBody)
    // edit footer
    // Écrire dans le footer
    document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
}

function updateGames(title, year, imageUrl, gameId) {
    // Trouvez le jeu en fonction de son identifiant
    const index = gamesList.findIndex((game) => game.id === parseInt(gameId));

    // Mettez à jour les données du jeu
    gamesList[index].title = title;
    gamesList[index].year = year;
    gamesList[index].imageUrl = imageUrl;

    // Réécrivez le DOM
    document.querySelector(".row").innerHTML = ""; // Supprimez toutes les cartes de jeux dans le DOM
    writeDom();

    // Rechargez les événements sur les boutons nouvellement créés
    attachEvents(gameId);
}

function attachEvents(gameId) {
    // Attachez les gestionnaires aux boutons Edit
    let editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            editModal(gameId);
        });
    });

    // Attachez les gestionnaires aux boutons View
    let viewButtons = document.querySelectorAll(".view");
    viewButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            viewModal(gameId);
        });
    });
}

// Appelez attachEvents au chargement initial
attachEvents();

*/
