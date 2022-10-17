class Media {　  　//创建一个Book父CD类Movie。创建一个名为Media.

    constructor(title) {
        this._this = title;
        this._isCheckedOut = false;
        this._rating = [];
    }

    get  title() {
        return this._title;
    }
    get  isCheckedOut() {
        return this._isCheckedOut;
    }
    get  rating() {
        return this._rating;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    /*在您的 getter 下，创建一个名为toggleCheckOutStatus更改保存到_isCheckedOut属性的值的方法。
    如果值为true，则将其更改为false。如果值为false，则将其更改为 true。*/
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    /*在.toggleCheckOutStatus()，创建一个名为 的方法getAverageRating。ratings返回数组 的平均值。
    使用reduce方法求ratings数组的总和。将此总和除以ratings数组的长度，然后返回结果。*/
    getAverageRating() {
        let ratingSum = this.rating.reduce((accumulator, rating) =>
        accumulator + rating);
        return ratingSum / this.rating.length;
    }
    addRating(value) { 
    //该方法addRating接受一个参数并将.push()其添加到ratings数组的末尾。
        this.rating.push(value);
    }

}
class Book extends Media {
   /*属性：（author字符串）、title（字符串）、
   pages（数字）、isCheckedOut（布尔值，最初为假）
   和ratings（数组，最初为空）。*/

    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() { //Getters : 所有属性都有一个 getter
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie  extends Media {

    constructor(director, title, runTime) {
        super(title);
        this._directot = director;
        this._runTime = runTime;
        
    }
    get directot() {
        return this._directot;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Shprt History of Nearly Everything',
544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
