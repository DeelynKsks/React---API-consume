const url = "https://docs.mhw-db.com/"

fetch(url)
    .then(a => a.json())
    .then(a => console.log(a))
    .catch(err => console.log(err))