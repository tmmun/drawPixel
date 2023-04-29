let defeat = [36, 30, 31, 32, 40, 15, 8, 9, 16, 18, 11, 12, 19]
let win = [8, 15, 16, 9, 11, 18, 19, 12, 29, 37, 38, 39, 33]

let one = [9, 10, 17, 24, 31, 38]
let two = [9, 10, 11, 18, 25, 24, 23, 30, 37, 38, 39]
let three = [9, 10, 11, 18, 25, 24, 23, 37, 38, 39, 32]
let four = [9, 16, 23, 24, 25, 18, 11, 32, 39]
let five = [11, 10, 9, 16, 23, 24, 25, 32, 39, 38, 37]
let six = [9, 16, 23, 30, 37, 38, 39, 32, 25, 24, 10, 11]
let seven = [9, 10, 11, 18, 25, 31, 37]
let eight = [9, 16, 23, 30, 37, 38, 39, 32, 25, 24, 18, 11, 10]
let nine = [9, 16, 23, 24, 25, 18, 11, 10, 32, 39, 38, 37]

let a = [9, 16, 23, 30, 37, 24, 25, 18, 11, 10, 32, 39]
let b = [9, 16, 10, 17, 23, 24, 25, 32, 39, 38, 37, 30]
let c = [39, 38, 37, 30, 23, 16, 9, 10, 11]
let d = [9, 10, 18, 25, 32, 38, 37, 30, 23, 16]
let e = [9, 16, 23, 30, 37, 38, 39, 25, 24, 10, 11]
let f = [9, 16, 23, 30, 37, 24, 25, 11, 10]
let g = [32, 38, 39, 37, 30, 23, 16, 9, 10, 11]
let h = [9, 16, 23, 30, 37, 24, 25, 18, 11, 32, 39]
let i = [10, 24, 31, 38]

let mouse = [8, 15, 9, 16, 23, 30, 31, 24, 25, 32, 18, 11, 12, 19, 38]
let snake = [8, 15, 9, 16, 23, 30, 31, 24, 25, 32, 18, 11, 12, 19, 38]
let bear = [15, 22, 16, 17, 18, 19, 26, 30, 31, 32, 38, 37, 39, 24, 29, 8, 12, 33]
let fish = [24, 30, 29, 37, 12, 11, 10, 17, 25, 26, 19, 31, 23, 16, 32]
let bull = [8, 15, 19, 12, 23, 24, 25, 32, 30, 31, 38, 37, 38, 39, 22, 26, 9, 11]
let turtle = [30, 31, 32, 25, 24, 23, 16, 17, 18, 10, 8, 15, 19, 12, 33, 40, 36, 29]
let gazelle = [9, 8, 11, 12, 18, 16, 24, 31, 30, 23, 25, 32, 38, 22, 25, 26]
let bug = [8, 15, 12, 19, 23, 17, 24, 25, 31, 38, 29, 37, 39, 33]
let butterfly = [22, 29, 36, 37, 38, 10, 11, 12, 19, 8, 16, 32, 40, 24, 26]

let animals = [{ name: 'mouse', arr: mouse }, { name: 'snake', arr: snake }, { name: 'bear', arr: bear }, { name: 'fish', arr: fish }, { name: 'bull', arr: bull }, { name: 'turtle', arr: turtle }, { name: 'gazelle', arr: gazelle }, { name: 'bug', arr: bug }, { name: 'butterfly', arr: butterfly }]
let letters = [{ name: 'a', arr: a }, { name: 'b', arr: b }, { name: 'c', arr: c }, { name: 'd', arr: d }, { name: 'e', arr: e }, { name: 'f', arr: f }, { name: 'g', arr: g }, { name: 'h', arr: h }, { name: 'i', arr: i }]
let numbers = [{ name: 'one', arr: one }, { name: 'two', arr: two }, { name: 'three', arr: three }, { name: 'four', arr: four }, { name: 'five', arr: five }, { name: 'six', arr: six }, { name: 'seven', arr: seven }, { name: 'eight', arr: eight }, { name: 'nine', arr: nine }]
let ollArr = [{ name: 'numbers', arr: numbers }, { name: 'letters', arr: letters }, { name: 'animals', arr: animals }]
let category = 0
let unlockCategoryCount = 2
let categorySwich = true

let result = 0
let cord = []
let start = 0
let coin = 0
let startGame = false

let Interval
let IntervalAkt = true
let timer = 0

let rec = ""
let recArr = []
let recCount = 0

let historySwich = true

let priseCategory = 10

if (localStorage.getItem("rec") != null) {//load
    rec = localStorage.getItem("rec")
    recArr = rec.split(",")

    for (let i = 0; i < recArr.length - 1; i++) {
        $('#history').append('<div id="textHistory">' + recArr[i] + '</div>')
    }
}

if (localStorage.getItem("coin") != null) {//load coin
    coin = localStorage.getItem("coin")
    $(".coin").text(coin)
}

if (localStorage.getItem("unlockCategory") != null) {//load unlockCategory
    unlockCategoryCount = localStorage.getItem("unlockCategory")
}

for (let i = 0; i < 49; i++) {//create pixel
    $('#fon').append('<div id="pixel" class="pixel' + i + '" onclick="tap(' + i + ')"></div>')
}

function tap(num) {// tap
    $('.pixel' + num + '').css({ 'backgroundColor': '#af4401', 'border': 'solid #af4401', 'border-width': '5px 0px 0px 0px' })
    if (num != cord[cord.length - 1]) {
        cord.push(num)
    }
}

$(".start").click(function () {

    timer = 0

    $(".category").hide()
    startGame = true

    if (IntervalAkt) {
        Interval = setInterval(() => $(".timer").text(timer++), 1000) //timer
        IntervalAkt = false
    }

    canvasClean()

    start = getRandomNumber(0, numbers.length)

    textName(ollArr[category].arr)

    help(ollArr[category].arr)

    setTimeout(canvasClean, 1000)
})

$(".done").click(function () {

    startGame = false
    categorySwich = false

    comparison(ollArr[category].arr)
    clearInterval(Interval)
    timer = 0
    IntervalAkt = true

    saveCoin()//save coin
})

$(".but_history").click(function () {
    if (historySwich) {
        $("#history").hide()
        historySwich = false
    }
    else {
        $("#history").show()
        historySwich = true
    }
})

$(".but_clean").click(function () {
    localStorage.removeItem("rec")
})

$(".settings").click(function () {

    if (startGame == false) {
        if (categorySwich) {
            $(".category").hide()
            categorySwich = false
        }
        else {
            $(".category").show()
            categorySwich = true
        }
    }
})

$(".next").click(function () {

    category++

    if (category < ollArr.length - unlockCategoryCount) {
        $(".category_name").text(ollArr[category].name)
    }
    else {
        category = 0
        $(".category_name").text(ollArr[category].name)
    }
})

$(".buy").click(function () {
    if (coin >= priseCategory && unlockCategoryCount > 0) {
        coin = coin - priseCategory
        unlockCategoryCount--
        localStorage.setItem("unlockCategory", unlockCategoryCount)
        saveCoin()
        $(".coin").text(coin)//save coin
    }
})

function comparison(name) {

    for (let i = 0; i < cord.length; i++) {
        for (let j = 0; j < name[start].arr.length; j++) {
            if (cord[i] === name[start].arr[j]) {
                result++
            }
            else {

            }
        }
    }

    if (cord.length == result && result != 0) {
        coin++
        $(".coin").text(coin)
        canvasClean()
        arrGlobal(win)

        crateHistoryAndSave(ollArr[category].arr)
    }
    else {
        canvasClean()
        arrGlobal(defeat)
    }

}

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function arrGlobal(nam) {
    for (let i = 0; i < nam.length; i++) {
        $('.pixel' + nam[i] + '').css({ 'backgroundColor': '#af4401', 'border': 'solid #af4401', 'border-width': '5px 0px 0px 0px' })
    }
}

function canvasClean() {
    for (let i = 0; i < 49; i++) { //canvas cleaning
        $('.pixel' + i + '').css({ 'backgroundColor': '#fea000', 'border': 'solid #cf5000', 'border-width': '0px 0px 5px 0px' })
        result = 0
        cord = []
    }
}

function textName(nam) {
    $(".textName").text(nam[start].name)
}

function help(nam) {
    var sss = nam[start].arr
    for (let i = 0; i < sss.length; i++) {
        $('.pixel' + sss[i] + '').css({ 'backgroundColor': '#af4401', 'border': 'solid #af4401', 'border-width': '5px 0px 0px 0px' })
    }
}

function crateHistoryAndSave(nam) {
    $('#history').append('<div id="textHistory">' + nam[start].name + " | " + timer + '</div>')

    rec += nam[start].name + " | " + timer + ","//save
    localStorage.setItem("rec", rec)
}

function saveCoin() {
    localStorage.setItem("coin", coin)
}

//console.log()
//$('').append("<div")
//$("").click(function () {}

