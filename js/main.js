
class Move {
    constructor() {
        this.body = document.querySelector('#background');
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
            8: 100,
            9: 110
        };
    }

    next() {
        this.hideText(this.frame);
        this.frame += 1;
        this.showText(this.frame);
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
    }

    prev() {
        this.hideText(this.frame);
        this.frame -= 1;
        this.showText(this.frame);
        this.body.setAttribute('style', `background-position-x: ${this.frames[this.frame]}%`);
    }

    showText(frameId) {
        if (frameId !== 9) {
            let textEl = document.getElementById(`text-${frameId}`);
            textEl.setAttribute('style', 'opacity: 1');
        } else {
            let textEl1 = document.getElementById(`text-9`);
            textEl1.setAttribute('style', 'visibility: visible;');
        }

    }

    hideText(frameId) {
        let textEl = document.getElementById(`text-${frameId}`);
        textEl.setAttribute('style', 'visibility: hidden');
    }
}

window.onload = () => {
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