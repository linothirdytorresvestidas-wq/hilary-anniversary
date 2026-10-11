
const openButton = document.getElementById("openMessage");
const buttonLabel = document.getElementById("buttonLabel");
const letter = document.getElementById("letter");

openButton.addEventListener("click", () => {
    // Prevent the message from being opened repeatedly.
    if (openButton.getAttribute("aria-expanded") === "true") {
        return;
    }

    // Reveal the letter.
    letter.hidden = false;

    // Trigger the reveal animation.
    letter.classList.remove("is-open");
    void letter.offsetWidth;
    letter.classList.add("is-open");

    // Update the button's accessible state and label.
    openButton.setAttribute("aria-expanded", "true");
    buttonLabel.textContent = "Your message is open ♡";

    // Keep the letter within view on smaller screens.
    letter.scrollIntoView({
        behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth",
        block: "nearest"
    });
});
