
const setNext = () => {
    const body = document.querySelector('body');
    const amount = 0;
    body.setAttribute('style', `background-position-x: %`);
};



class Move {
    constructor() {
        this.position = 0;
        this.body = document.querySelector('body');
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        this.position += 25;
        this.body.setAttribute('style', `background-position-x: ${this.position}%`);
    }

    prev() {
        this.position -= 25;
        this.body.setAttribute('style', `background-position-x: ${this.position}%`);
    }
}

const move = new Move();

document.getElementById('next').addEventListener('click', move.next);
document.getElementById('prev').addEventListener('click', move.prev);