let countdown;



function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    // console.log({now, then});

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);

        if (secondLeft <= 0) {
            clearInterval(countdown);
            // 5-57
            return;
        }
        console.log(secondLeft);
    }, 1000);
}