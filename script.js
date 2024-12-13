const gamesList = [
    {
        pays: "Japon",
        ville: "Tokyo",
        imageUrl:
            "https://a.storyblok.com/f/55469/1176x732/3070577851/jp_-_2022.png/m/645x0/filters:format(webp)",
        id: 1,
    },
    {
        pays: "Corée du Sud",
        ville: "Seoul",
        imageUrl:
        "https://pvtistes.net/wp-content/uploads/2017/07/hongdae.jpg",
        id: 2,
    },
    {
        pays: "Malaisie",
        ville: "Langkawi",
        imageUrl:
            "https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be",
        id: 3,
    },
    {
        pays: "Indonésie",
        ville: "Lombok",
        imageUrl:
            "https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
        id: 4,
    },
    {
        pays: "Chine",
        ville: "Zhangjiajie \n",
        imageUrl:
            "https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
        id: 5,
    },
    {
        pays: "Vietnam",
        ville: "Phú Quốc",
        imageUrl:
            "https://images.ctfassets.net/rc3dlxapnu6k/7Mrv5ZYv69BsnEcqd1DmTn/5286746bfb13a765e593104bc09eb8e8/Vietnam__Phu_Quoc.jpg?w=1138&h=640&q=50&fm=webp",
        id: 6,
    },
]

function writeDom() {
    gamesList.forEach((game) => {
        const articleContainer = document.querySelector(".row")
        articleContainer.innerHTML += `<article class="col">
            <div class="card shadow-sm">
                <img src="${game.imageUrl}" class="card-img-top" alt="${game.pays}">
                <div class="card-body">
                    <h3 class="card-title">${game.ville}</h3>
                    <p class="card-text">${game.pays}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button"
                                        class="btn btn-sm btn-outline-secondary view"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        data-edit-id="${game.id}"
                                        >View
                                </button>
                                <button type="button"
                                        class="btn btn-sm btn-outline-secondary edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        data-edit-id="${game.id}"
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

let editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        editModal(e.target.getAttribute("data-edit-id"))
    })
})

let viewButtons = document.querySelectorAll(".view")
viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        viewModal(e.target.getAttribute("data-edit-id"))
    })
})


function modifyModal(modalTitle, modalBody) {
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
}

function viewModal(gameId) {
    // console.log(gameId, gamesList)
    // Trouvez le jeu en fonction de son identifiant
    const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
    // passer une image comme corps du modal
    const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].ville}" class="img-fluid" />`
    modifyModal(gamesList[result].ville, modalBody)
    // edit footer
    // Écrire dans le footer
    document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
}

function editModal(gameId) {
    // Trouvez le jeu en fonction de son identifiant
    const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
    // Injectez le formulaire dans le corps du modal
    fetch("./form.html").then((data) => {
        data.text().then((form) => {
            // Modifiez le titre et le corps du modal
            const selectedGame = gamesList[result]
            modifyModal("Mode Edition", form)
            modifyFom({
                ville: selectedGame.ville,
                pays: selectedGame.pays,
                imageUrl: selectedGame.imageUrl,
            })
            document
                .querySelector('button[type="submit"]')
                .addEventListener("click", () =>
                    updateGames(ville.value, pays.value, imageUrl.value, gameId)
                )
        })
    })
}

function modifyFom(gameData) {
    const form = document.querySelector("form")
    form.ville.value = gameData.ville
    form.pays.value = gameData.pays
    form.imageUrl.value = gameData.imageUrl
}

function modifyModal(modalTitle, modalBody) {
    // Écrir le nom du jeu dans le titre du modal
    document.querySelector(".modal-title").textContent = modalTitle
    document.querySelector(".modal-body").innerHTML = modalBody
}

function viewModal(gameId) {
    // console.log(gameId, gamesList)
    // Trouvez le jeu en fonction de son identifiant
    const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
    // passer une image comme corps du modal
    const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].ville}" class="img-fluid" />`
    modifyModal(gamesList[result].ville, modalBody)
    // edit footer
    // Écrire dans le footer
    document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
}

function updateGames(ville, pays, imageUrl, gameId) {
    // Trouvez le jeu en fonction de son identifiant
    const index = gamesList.findIndex((game) => game.id === parseInt(gameId))

    gamesList[index].ville = ville
    gamesList[index].pays = pays
    gamesList[index].imageUrl = imageUrl
    document.querySelector(".row").innerHTML = "" // Nous supprimons toutes les données des jeux dans le DOM.
    writeDom()
    editButtons = document.querySelectorAll(".edit")
    editButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            editModal(e.target.getAttribute("data-edit-id"))
        })
    })

    viewButtons = document.querySelectorAll(".view")
    viewButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            viewModal(e.target.getAttribute("data-edit-id"))
        })
    })
}