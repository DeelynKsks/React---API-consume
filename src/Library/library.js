export const library = {
    consume: async(url) => {
        const request = await fetch(url)
        
        const asd = request.json()

        return asd
    },
}