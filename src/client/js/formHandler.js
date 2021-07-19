function handleSubmit(event) {
    const textapi = process.env.API_KEY
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1/'
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(baseUrl + textapi)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }