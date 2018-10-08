
class Move {
    constructor() {
        this.body = document.querySelector('#background');
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.nextArrow = document.getElementById('next');
        this.prevArrow = document.getElementById('prev');
        this.prevArrow.hidden = true;
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
            8: 100,
            9: 114
        };
    }

    next() {
        if (this.frame === 8) {
            this.nextArrow.hidden = true;
        }
        this.prevArrow.hidden = false;
        this.hideText(this.frame);
        this.frame += 1;
        this.showText(this.frame);
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
    }

    prev() {
        if (this.frame === 1) {
            this.prevArrow.hidden = true;
        }
        this.nextArrow.hidden = false;
        this.hideText(this.frame);
        this.frame -= 1;
        this.showText(this.frame);
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
    }

    showText(frameId) {
        let textEl = document.getElementById(`text-${frameId}`);
        textEl.setAttribute('style', 'opacity: 1');
    }

    hideText(frameId) {
        let textEl = document.getElementById(`text-${frameId}`);
        textEl.setAttribute('style', 'visibility: hidden');
    }
}

window.onload = () => {
    document.getElementById('monk').setAttribute('style', 'height: 1000px');
    document.getElementById('wrapper').setAttribute('style', 'opacity: 1');
    document.getElementById('background').setAttribute('style', 'opacity: 1');
    const overlayImg = document.getElementById('overlay-img');
    overlayImg.setAttribute('style', 'opacity: 0');
    setTimeout(() => {
        overlayImg.remove();
    }, 7000)
};

const move = new Move();

document.getElementById('next').addEventListener('click', move.next);
document.getElementById('prev').addEventListener('click', move.prev);