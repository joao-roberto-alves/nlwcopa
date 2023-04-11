function createGame(player1, hour, player2) {
  return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}">
        </li>
    `
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
        <div class="card" style="animation-delay: ${delay}s">
                <h2> ${date} <span>${day}</span></h2>
                <ul>                
                    ${games}
                </ul>
        </div>
    `
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "09:00", "serbia") +
      createGame("korea", "12:00", "spain") +
      createGame("ghana", "16:00", "arg")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("suice", "09:00", "brazil") +
      createGame("portugal", "12:00", "korea") +
      createGame("portugal", "16:00", "spain")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("brazil", "09:00", "cameron") +
      createGame("korea", "12:00", "uruguai") +
      createGame("spain", "16:00", "arg")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("arg", "09:00", "france") +
      createGame("brazil", "12:00", "uruguai") +
      createGame("portugal", "16:00", "korea")
  )
