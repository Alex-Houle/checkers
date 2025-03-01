function toggleMode() {
    var button = document.getElementById('toggleBack');
    if (button.innerText === 'Dark Mode') {
        button.innerText = 'Light Mode';
        document.body.classList.add('dark-mode'); // Add dark mode class
        document.body.classList.remove('light-mode'); // Remove light mode class
    } else {
        button.innerText = 'Dark Mode';
        document.body.classList.remove('dark-mode'); // Remove dark mode class
        document.body.classList.add('light-mode'); // Add light mode class
    }
}

// Function to generate the checkerboard with pieces
function generateCheckerboard() {
    const checkerboard = document.querySelector('.checkerboard');
    checkerboard.innerHTML = ""; // Clear existing board if any

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            
            // Determine color of the square
            if ((row + col) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
                
                // Add game pieces in the first three and last three rows
                if (row < 3) {
                    let piece = document.createElement('div');
                    piece.classList.add('piece', 'red-piece'); // Red pieces at the top
                    cell.appendChild(piece);
                } else if (row > 4) {
                    let piece = document.createElement('div');
                    piece.classList.add('piece', 'black-piece'); // Black pieces at the bottom
                    cell.appendChild(piece);
                }
            }
            checkerboard.appendChild(cell);
        }
    }
}

// Ensure the checkerboard is generated when the page loads
window.onload = generateCheckerboard;

