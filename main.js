document.querySelectorAll('.score input[type="radio"]').forEach(radio => 
    radio.addEventListener('change', () => {
        if (radio.checked) {
            document.getElementById('selected-score').innerText = radio.value;
        }
    })
)

document.getElementById('submit-btn')?.addEventListener('click', (e) => {
    e.preventDefault()

    document.getElementById('rating').style.display = 'none'
    document.getElementById('thank-you').style.display = 'flex'
})