document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
})