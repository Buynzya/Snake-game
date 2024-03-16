const canvas =document.querySelector('.canvas');
const ctx = canvas.getContext('2d'); // x,y tenhlegt oruulj ugch 2d eer hudlunu

let gridsize =20; // x,y eere 20:20 gsen hemjeetei
let snakeColor = "green";
let snake = [{x:10,y:10}];
let foodColor ="red";
let food = {x:2, y:1};
let dx=1, dy=0;
let point=0;
const p = document.getElementsByTagName("p")[0];

function drawfood(){
    ctx.fillStyle=foodColor;
    ctx.fillRect(food.x*gridsize , food.y*gridsize , gridsize , gridsize);
}
// drawfood();
function drawsnake(snakeEl , color) {
    snakeEl.forEach(segment=>{
        ctx.fillStyle=color;
        ctx.fillRect(segment.x*gridsize , segment.y*gridsize , gridsize , gridsize);
    });
}
// drawsnake(snake,snakeColor);

function update() {
    let head = {x:snake[0].x+dx , y:snake[0].y+dy};
    snake.unshift(head);
    if(head.x==food.x && head.y==food.y){
        food ={x:Math.floor(Math.random()*20) , y:Math.floor(Math.random()*20)};
        point++;
    } else{
        snake.pop();
    }
    if(head.y<0 || head.x>20 || head.x<0 || head.y>20) {
        alert("You lose");
        snake=[{x:10,y:10}];
        point=0;
    }
    p.innerText = "Snake ate food numbers : " + point;
    ctx.clearRect(0,0,canvas.width , canvas.height);
    drawfood();
    drawsnake(snake,snakeColor);
}
setInterval(update,200);

document.addEventListener("keydown" , (event)=>{
    console.log(event.key);
    switch(event.key) {
        case "ArrowDown":
        if(dy!==-1){
            dx=0;
            dy=1;
        }
        break;
                case "ArrowUp":
                if(dy!==1){
                    dx=0;
                    dy=-1;
                }
            break;
            case"ArrowLeft":
            if(dx!==1){
                dy=0;
                dx=-1;
            }
        break;
                    case"ArrowRight":
                    if(dx!==-1) {
                        dy=0;
                        dx=1;
                    }
    }
 });