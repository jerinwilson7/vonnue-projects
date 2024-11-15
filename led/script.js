document.addEventListener('DOMContentLoaded', () => {
    const rowsInput = document.getElementById('rows');
    const delayInput = document.getElementById('delay');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const pyramidContainer = document.getElementById('pyramid');
    
    let intervalId;
    let currentRow = 0;
    
    submitButton.addEventListener('click', () => {
        const numRows = parseInt(rowsInput.value);
        if (isNaN(numRows) || numRows < 1) {
            alert('Please enter a valid number of rows.');
            return;
        }
        
        pyramidContainer.innerHTML = '';
        
        for (let i = 1; i <= numRows; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            for (let j = 0; j < i; j++) {
                const circle = document.createElement('div');
                circle.className = 'circle';
                row.appendChild(circle);
            }
            pyramidContainer.appendChild(row);
        }
    });
    
    startButton.addEventListener('click', () => {
        const delay = parseInt(delayInput.value);
        if (isNaN(delay) || delay < 0) {
            alert('Please enter a valid delay.');
            return;
        }
        
        clearInterval(intervalId);
        
        currentRow = 0;
        const rows = pyramidContainer.getElementsByClassName('row');
        Array.from(rows).forEach(row => {
            const circles = row.getElementsByClassName('circle');
            Array.from(circles).forEach(circle => {
                circle.classList.remove('active');
            });
        });
        
        intervalId = setInterval(() => {
            const rows = pyramidContainer.getElementsByClassName('row');
            if (currentRow < rows.length) {
                if (currentRow > 0) {
                    const prevRow = rows[currentRow - 1];
                    const prevCircles = prevRow.getElementsByClassName('circle');
                    Array.from(prevCircles).forEach(circle => {
                        circle.classList.remove('active');
                    });
                }
                
                const currentRowElement = rows[currentRow];
                const circles = currentRowElement.getElementsByClassName('circle');
                Array.from(circles).forEach(circle => {
                    circle.classList.add('active');
                });
                
                currentRow++;
            } else {
                currentRow = 0;
            }
        }, delay);
    });
    
    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
        
        const rows = pyramidContainer.getElementsByClassName('row');
        Array.from(rows).forEach(row => {
            const circles = row.getElementsByClassName('circle');
            Array.from(circles).forEach(circle => {
                circle.classList.remove('active');
            });
        });
    });
});
 intervalId = setInterval(() => {
            const rows = pyramidContainer.getElementsByClassName('row');
            if (currentRow < rows.length) {
                if (currentRow > 0) {
                    const prevRow = rows[currentRow - 1];
                    const prevCircles = prevRow.getElementsByClassName('circle');
                    Array.from(prevCircles).forEach(circle => {
                        circle.classList.remove('active');
                    });
                }
                
                const currentRowElement = rows[currentRow];
                const circles = currentRowElement.getElementsByClassName('circle');
                Array.from(circles).forEach(circle => {
                    circle.classList.add('active');
                });
                
                currentRow++;
            } else {
                currentRow = 0;
            }
        }, delay);