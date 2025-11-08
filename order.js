document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * Handles custom radio and checkbox selection by making the entire 
     * styled label clickable to toggle the hidden input's state.
     * @param {string} containerClass - The CSS class for the custom selector container (e.g., '.custom-radio').
     */
    function handleSelection(containerClass) {
        const containers = document.querySelectorAll(containerClass);
        
        containers.forEach(container => {
            container.addEventListener('click', (e) => {
                const input = container.querySelector('input');
                
                // Check if the click target itself was not the input element, 
                // to avoid double-toggling if they click the native input/checkbox
                if (input && e.target.tagName !== 'INPUT') {
                    // Toggle the checked state
                    input.checked = !input.checked;
                }
            });
        });
    }

    // Apply the selection handler to both budget (radio) and interest (checkbox) groups
    handleSelection('.custom-radio');
    handleSelection('.custom-checkbox');

    
    /**
     * Handles the auto-resizing of the "My vision is" textarea as the user types.
     */
    const visionTextarea = document.getElementById('visionText');
    if (visionTextarea) {
        // We listen for the 'input' event, which fires every time the content changes
        visionTextarea.addEventListener('input', () => {
            // 1. Reset the height to 'auto' to correctly calculate scrollHeight
            visionTextarea.style.height = 'auto';
            
            // 2. Set the height to the scrollHeight (the minimum required height for content)
            // We use 'scrollHeight' to smoothly grow the element with content
            visionTextarea.style.height = visionTextarea.scrollHeight + 'px';
        });
    }
});