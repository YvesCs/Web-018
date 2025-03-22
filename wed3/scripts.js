document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const duration = 5000; // 5 seconds

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const step = target / (duration / 16); // Increment per frame (assuming 60fps)

        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target; // Ensure the final value is exact
            }
        };

        updateCounter();
    });
});
