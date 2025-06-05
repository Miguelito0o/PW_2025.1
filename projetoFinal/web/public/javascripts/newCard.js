document.getElementById("novoJardim").addEventListener("click", function() {
    let cardContainer = document.getElementById("cardContainer");

    let novoCard = document.createElement("div");
    novoCard.classList.add("col-md-4");

    novoCard.innerHTML = `
        <div class="card">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Jardim">
            <div class="card-body">
                <h5 class="card-title">Novo Jardim 🌱</h5>
                <p class="card-text">Um novo jardim digital foi criado!</p>
                <button class="btn btn-danger remove-card">Remover</button>
            </div>
        </div>
    `;

    cardContainer.appendChild(novoCard);

    novoCard.querySelector(".remove-card").addEventListener("click", function() {
        novoCard.remove();
    });
});
