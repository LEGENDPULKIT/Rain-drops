class Drops
{
    constructor()
    {
        this.x=random(width);
        this.y=random(-100,-300);
        this.yspeed=4
    }

    fall()
    {
        this.y=this.y+this.yspeed;

    }

    display()
    {
        stroke(255,255,255);
        strokeWeight(4);
        line(this.x,this.y,this.x,this.y+10);
    }
}

    
