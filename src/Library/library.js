export const library = {
    consume: async(url) => {
        const request = await fetch(url)
            .then(a => a.json())
            .catch(err => err)

        return asd
    },
}