const elements = document.querySelectorAll(
    ".event-card, .past-card, .mission-content, .donate-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});