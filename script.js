document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[name="option"]');
    const contentDivs = document.querySelectorAll('.content > div');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            contentDivs.forEach(div => {
                div.style.display = 'none'; // Hide all content divs
            });

            const selectedDiv = document.getElementById(`${this.id}-page`);
            if (selectedDiv) {
                selectedDiv.style.display = 'block'; // Show the selected content div
            }
        });
    });
});