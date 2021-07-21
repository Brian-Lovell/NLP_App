function handleSubmit(event) {
    event.preventDefault()

    // Check what was entered into text field
    // TODO: Add URL validation
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:2076/analyze', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.score
    })
}

export { handleSubmit }