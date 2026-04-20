function addSpices() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adding spices...");
            resolve();
        }, 1000);
    });
}

function pourOil() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pouring oil...");
            resolve();
        }, 3000);
    });
}

function fryOnion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Frying onion...");
            resolve();
        }, 2000);
    });
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boiling water...");
            resolve();
        }, 4000);
    });
}

function cookRice() {
    return new Promise((resolve, reject) => {
        let cookedRice = false; 

        setTimeout(() => {
            if (cookedRice) {
                console.log("Cooking rice...");
                resolve();
            } else {
                reject("Rice is not cooked properly!");
            }
        }, 5000);
    });
}

// addSpices()
//     .then(pourOil)
//     .then(fryOnion)
//     .then(boilWater)
//     .then(cookRice)
//     .then(() => {
//         console.log("All tasks completed!");
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


async function makeFood() {
    try {
        await addSpices();
        await pourOil();
        await fryOnion();
        await boilWater();
        await cookRice();

        console.log("All tasks completed!");
    } catch (error) {
        console.log("Error:", error);
    }
}

makeFood();