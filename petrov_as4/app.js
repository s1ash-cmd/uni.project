window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const reg = await navigator.serviceWorker.register(/serviseworker.js)
            console.log('da', reg)
        }
        catch (e) {
            colsole.log('net')
        }

                                            
    }
})