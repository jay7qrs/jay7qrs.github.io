//Fallback, just in case shi don't load (Happens a lot with data urls, cuz they buggy asf)

document.getElementById('theme').innerHTML = `
        :root{
            --background-color-dark: #121212;
            --background-color-light: #1a1a1a;
            --content-background: #2b2b2b;
            --content-background-light: #474747;
            --accent-color: #efefef;
            --text-color: #ffffff;
            --div-size: 90%;
            --game-size: 90%;
        }
        `

let theme = window.localStorage.getItem('theme');
let theme_enabled = window.localStorage.getItem('theme_enabled')
let themeElement = document.getElementById('theme')

if (theme_enabled == null){ window.localStorage.setItem('theme_enabled', true); window.location.reload() }

console.log(`Theme Debug Info: '${theme}', ${theme_enabled}`)

if (theme_enabled == "true"){
    console.log(`Loading Theme '${theme}'`)
    if (theme == null){
        themeElement.innerHTML = `
        :root{
            --background-color-dark: #121212;
            --background-color-light: #1a1a1a;
            --content-background: #2b2b2b;
            --content-background-light: #474747;
            --accent-color: #efefef;
            --text-color: #ffffff;
            --div-size: 90%;
            --game-size: 90%;
        }
        `
    } else{
        if (theme == "shadow"){
            themeElement.innerHTML = `
            :root{
                --background-color-dark: #070707;
                --background-color-light: #141414;
                --content-background: #222222;
                --content-background-light: #1d1d1d;
                --accent-color: #c4c4c4;
                --text-color: #ffffff;
                --div-size: 90%;
                --game-size: 90%;
            }
            `
        } else if (theme == "bright"){
            themeElement.innerHTML = `
            :root{
                --background-color-dark: #c5c5c5;
                --background-color-light: #ffffff;
                --content-background: #fcfcfc;
                --content-background-light: #fcfcfc;
                --accent-color: #1f1f1f;
                --text-color: #000000;
                --div-size: 90%;
                --game-size: 90%;
            }
            `
        } else if (theme == "porpol"){
            themeElement.innerHTML = `
            :root{
                --background-color-dark: #352447;
                --background-color-light: #503863;
                --content-background: #5b327c;
                --content-background-light: #8644a5;
                --accent-color: #ecc1f8;
                --text-color: #ffffff;
                --div-size: 90%;
                --game-size: 90%;
            }
            `
        } else {
            themeElement.innerHTML = `
            :root{
                --background-color-dark: #121212;
                --background-color-light: #1a1a1a;
                --content-background: #2b2b2b;
                --content-background-light: #474747;
                --accent-color: #efefef;
                --text-color: #ffffff;
                --div-size: 90%;
                --game-size: 90%;
            }
            `
        }
    }
} else{
    console.log("Themes are disabled.")
}