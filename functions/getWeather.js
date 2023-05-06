const getWeather = async (location) => {
    const weather = await fetch(`https://api.scorpstuff.com/weather.php?units=metric&city=${location}`)
    return await weather.text();
}

export default getWeather;