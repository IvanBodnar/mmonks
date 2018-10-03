
class Move {
    constructor() {
        this.body = document.querySelector('body');
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.frame = 0;
        this.frames = {
            0: 0,
            1: 13,
            2: 23,
            3: 37,
            4: 50,
            5: 65,
            6: 80,
            7: 100,
            8: 110
        };
    }


    next() {
        this.frame += 1;
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
        console.log(this.frame);
    }

    prev() {
        this.frame -= 1;
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
        console.log(this.frame);
    }
}

const move = new Move();

document.getElementById('next').addEventListener('click', move.next);
document.getElementById('prev').addEventListener('click', move.prev);