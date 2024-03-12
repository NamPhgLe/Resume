(() => {

    const setStyle = (style) => {
        const css = `./css/${style}.min.css`;
        const head = document.querySelector('link[rel="stylesheet"]')
        head.setAttribute('href', css)
    }

        
        setStyle('slate')
      

})()