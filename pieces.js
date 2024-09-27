

function Piece(posx, posy) {

    this.x = posx;
    this.y = posy;
 
 
    this.nextPosition = function (keycode) {
       console.log(keycode);
 
 
       let { x, y } = this;
       if (keycode == "ArrowUp") x--;
       if (keycode == "ArrowDown") x++;
       if (keycode == "ArrowLeft") y--;
       if (keycode == "ArrowRight") y++;
 
 
       return { x, y };
 
    }
 
    this.moveTo = function (position, element, _parent) {
 
       this.x = position.x;
       this.y = position.y;
 
       element.style.top = calculaPosicao(this.x);
       element.style.left = calculaPosicao(this.y);
 
 
    }
 }
 