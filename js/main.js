fetch('https://kanye.rest/')
    .then(res => {
        if (res.ok){
            console.log('bien');
        }else {
            console.log('non');
        }
    })
    .then(data => console.log(data));