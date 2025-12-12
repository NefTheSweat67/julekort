let canvas = document.createElement("canvas");
document.body.appendChild(canvas); 
let ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Rektangel {
    constructor(x, y, bredde, høyde, farge, hastighet) {
        this.x = x; 
        this.y = y; 
        this.bredde = bredde;
        this.høyde = høyde;
        this.farge = farge;
        this.hastighet = hastighet;
    }

    
    oppdater() {
        this.y += this.hastighet; 
        if (this.y > canvas.height) {
            this.y = -this.høyde; 
            this.x = Math.random() * (canvas.width - this.bredde); 
        }
    }

    
    tegn() {
        ctx.fillStyle = this.farge;
        ctx.fillRect(this.x, this.y, this.bredde, this.høyde);
    }
}


let rektangler = [];
for (let i = 0; i < 10; i++) { 
    rektangler.push(new Rektangel(
        Math.random() * canvas.width, 
        Math.random() * -canvas.height,
        10, 
        10, 
        "white", 
        5 + Math.random() * 5 
    ));
}


function animasjon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rektangler.forEach(rekt => {
        rekt.oppdater();
        rekt.tegn();
    });

    requestAnimationFrame(animasjon); 
}


animasjon();
