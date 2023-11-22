for (let i = 0;i < 5; i++) {
    console.log(`hello!${i}`)
}

// Arrayを回す
const roopString = "あいうえお"
const roopArr = [...roopString]
for (const elem of roopArr) {
    console.log(elem)
}

function randInt(min, max) {
    return Math.random() * (max - min) + min
}
// const randInt = (min, max) => { return Math.random() * (max - min) + min }

const randomIntArr = [...Array(10)].map((i) => { return randInt(0, 9999) })
for (const elem of randomIntArr) {
    console.log(Math.round(elem).toString())
}
