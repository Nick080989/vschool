document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.journal-form');
    const entriesContainer = document.getElementById('journalEntries');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('journalTitle').value;
        const date = document.getElementById('journalDate').value;
        const entry = document.getElementById('journalEntry').value;

        if (title && date && entry) {
            const entryElement = document.createElement('div');
            entryElement.classList.add('journal-entry');
            entryElement.innerHTML = `
                <h3>${title}</h3>
                <p><strong>Date:</strong> ${date}</p>
                <p>${entry}</p>
            `;

            entriesContainer.prepend(entryElement);
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
});
