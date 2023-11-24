import _prompt from "prompt-sync"
const prompt = _prompt()

const chars = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
const resultLength = parseInt(prompt("パスワードの長さ>> "))
const result = []
for (let i = 0; i < resultLength; i++) {
    result.push(chars.charAt(Math.floor(Math.random() * chars.length)))
}
console.log(result.join(""))
