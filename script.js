document.addEventListener('DOMContentLoaded', () => {
    const buttonTextInput = document.getElementById('buttonText');
    const createButtonBtn = document.getElementById('createButton');
    const buttonContainer = document.getElementById('buttonContainer');

    function create3DButton(text) {
        // Clear any existing button
        buttonContainer.innerHTML = '';

        if (!text.trim()) {
            // If text is empty or whitespace, don't create a button
            return;
        }

        // Create the button element
        const newButton = document.createElement('div');
        newButton.classList.add('button-3d');
        newButton.classList.add('button-3d-idle'); // Apply idle animation by default
        newButton.textContent = text;

        // Append to the container
        buttonContainer.appendChild(newButton);
    }

    createButtonBtn.addEventListener('click', () => {
        const text = buttonTextInput.value;
        create3DButton(text);
    });

    // Optional: Also create button when Enter is pressed in the input field
    buttonTextInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const text = buttonTextInput.value;
            create3DButton(text);
        }
    });

    // Initial demo button (optional)
    // create3DButton("Hello!");
});
