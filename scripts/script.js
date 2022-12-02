let unreadCount = 3;

const readButton = document.querySelector("button");
const unreadCountDisplay = document.querySelector(".unread-count");

unreadCountDisplay.textContent = unreadCount;


readButton.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card");
    const dots = document.querySelectorAll(".unread-dot");
    let count = 0;

    for (let i = 0; i <= unreadCount; i++) {
        cards[i].classList.remove("unread");
    }

    dots.forEach((dot) => {
        dot.remove();
    })

    unreadCount = 0;
    unreadCountDisplay.textContent = unreadCount;

});
