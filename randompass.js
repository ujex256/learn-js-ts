import _prompt from "prompt-sync"
import * as crypto from "node:crypto"
const prompt = _prompt()
// Math.randomで作成できる乱数には暗号学的な弱さがあるので、安全なハッシュ生成をする

// クロージャを使って無駄に変数を作らないようにする
/** 返されるのは8bitの数字(unsigned int) */
const safeRandom = (() => {
    // getRandomValuesを使うには、型付き配列が必要
    const array = new Uint8Array(1);
    // この関数が返された後でも、arrayは保持される。
    return function () {
        return crypto.getRandomValues(array)[0]
    }
    // 即時実行関数と言って、(() =>{})で関数を作成、()をつけることで実行される
    // returnの値が変数に代入されます
})();


const chars = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
const resultLength = parseInt(prompt("パスワードの長さ>> "))
const result = []
for (let i = 0; i < resultLength; i++) {
    result.push(chars.charAt((safeRandom() % chars.length)))
}
console.log(result.join(""))
