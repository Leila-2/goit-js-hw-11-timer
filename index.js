// доступы
daysValue = document.querySelector('[data-value="days"]')
hoursValue = document.querySelector('[data-value="hours"]')
minsValue = document.querySelector('[data-value="mins"]')
secsValue = document.querySelector('[data-value="secs"]')

class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate
        this.interval = null
        this.deltaTime = 0
    }
    start() {
        this.interval = setInterval(() => {
            let currDate = new Date()
            this.deltaTime = this.targetDate - currDate
            // получаем расчет времени
            this.insertData(daysValue, this.getDaysCount(this.deltaTime))
            this.insertData(hoursValue, this.getHoursCount(this.deltaTime))
            this.insertData(minsValue, this.getMinsCount(this.deltaTime))
            this.insertData(secsValue, this.getSecsCount(this.deltaTime))

        }, 1000)
    }
    finish() {
        clearInterval(this.interval)
        this.clearClockFace()
    }
    //===========
    clearClockFace() {
        daysValue.textContent = '00'
        hoursValue.textContent = '00'
        minsValue.textContent = '00'
        secsValue.textContent = '00'
    }
    //===========

    padVal(value, num, symbol) {
        return String(value).padStart(num, symbol)
    }
    getDaysCount(time) {
        return this.padVal(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '0')
    }
    getHoursCount(time) {
        return this.padVal(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2, '0')
    }
    getMinsCount(time) {
        return this.padVal(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2, '0')
    }
    getSecsCount(time) {
        return this.padVal(Math.floor((time % (1000 * 60)) / 1000), 2, '0')
    }
    insertData(place, value) {
        place.textContent = value
    }
    //===========
}
//const targetDate = new Date('12.24.2021')
const myTimer = new CountdownTimer(new Date('12.24.2021'))
myTimer.start(new Date('12.24.2021'))