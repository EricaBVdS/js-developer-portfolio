async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/EricaBVdS/js-developer-portfolio/main/Data/profile.json'

    const fetching = await fetch(url)
    return await fetching.json()
}