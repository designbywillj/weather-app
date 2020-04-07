$(document).ready(function() {
    // Constants
    const modal = $('.modal')
    const searchInput = $('.search__input')

    // Variables
    let city = 'Nashville'

    // Getting JSON
    function setData() {
        $.getJSON(
            `http://api.openweathermap.org/data/2.5/weather?q=${ city }&units=imperial&APPID=4883c8df8e23bd828be9c72f7c7dbbc2`,
            function(data) {
                console.log(data)
        
                let icon = `http://openweathermap.org/img/wn/${ data.weather[0].icon }@2x.png`
                let temp = Math.round(data.main.temp)
                let high = Math.round(data.main.temp_max)
                let low = Math.round(data.main.temp_min)
                let humidity = Math.round(data.main.humidity)
                let pressure = Math.round(data.main.pressure)
                let wind = Math.round(data.wind.speed)
                let weather = data.weather[0].main
                
                $('.city').text(city)
                $('.temp__text').text(`${ temp }°`)
                $('.temp__icon').attr('src', icon)
                $('.high-low__high').text(`${ high }°`)
                $('.high-low__low').text(`${ low }°`)
                $('.humidity').text(`${ humidity }%`)
                $('.pressure').text(`${ pressure } psi`)
                $('.wind').text(`${ wind } mph`)
                $('.weather').text(weather)
            }
        )
    }
    setData()

    // Event Listeners
    $('.search').click(function() {
        toggle(modal)
        searchInput.focus()
    })

    // Close Modal
    $('.close').click(function() {
        toggle(modal)
        searchInput.val('')
    })

    $('.submit').click(function(e) {
        toggle(modal)
        city = searchInput.val()
        searchInput.val('')
        setData()
        e.preventDefault()
    })

    // Utilities
    function toggle(element) {
        element.toggleClass('toggled')
    }
})
