let homeScoeEl = document.getElementById("homeScore");
let guestScoeEl = document.getElementById("guestScore");
let homeCounter = 0, guestCounter = 0;

function home1() {
    homeCounter++;
    homeScoeEl.textContent = homeCounter;
    
    homeScoeEl.classList.add("greenBorder");
    guestScoeEl.classList.remove("greenBorder");
}

function home2() {
    homeCounter += 2;
    homeScoeEl.textContent = homeCounter;
    
    homeScoeEl.classList.add("greenBorder");
    guestScoeEl.classList.remove("greenBorder");
}

function home3() {
    homeCounter += 3;
    homeScoeEl.textContent = homeCounter;
    
    homeScoeEl.classList.add("greenBorder");
    guestScoeEl.classList.remove("greenBorder");
}

function guest1() {
    guestCounter++;
    guestScoeEl.textContent = guestCounter;
    
    guestScoeEl.classList.add("greenBorder");
    homeScoeEl.classList.remove("greenBorder");
}

function guest2() {
    guestCounter += 2
    guestScoeEl.textContent = guestCounter;
    
    guestScoeEl.classList.add("greenBorder");
    homeScoeEl.classList.remove("greenBorder");
}

function guest3() {
    guestCounter += 3;
    guestScoeEl.textContent = guestCounter;
    
    guestScoeEl.classList.add("greenBorder");
    homeScoeEl.classList.remove("greenBorder");
}

function resetGame() {
    homeCounter = 0;
    guestCounter = 0;
    homeScoeEl.textContent = 0;
    guestScoeEl.textContent = 0;
    homeScoeEl.classList.remove("greenBorder");
    guestScoeEl.classList.remove("greenBorder");
}