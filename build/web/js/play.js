var velo =1;
var area= 4;
var dens=0.3;
var sca = 0.5;
var that  = this;
var can, ctx,
    minVal, maxVal,
    xScalar, yScalar,
    numSamples, y;
// data sets -- set literally or obtain from an ajax call
var dataName = [ "f", "s", "t", "f" ];
var dataValue = [ 11000, 6200, 5800, 300 ];

var playState = {
	create: function() {
        this.isPause = false;
        this.addGameDetails();
    },

    onTimeOver: function() {
        console.log("on time over");
    },

    update: function() {

        this.sprite.angle += velo;
        this.sprite.alpha = dens;

    },

    addGameDetails: function() {
        this.sprite = game.add.sprite(200, 200,'turbine');
        this.sprite.anchor.setTo(0.5,0.5);
        var self = this;
        var speedslider = $("#speed").change(function(){
            var speed = speedslider.val();
            velo = (speed/10)*2;
            console.log(speed);
            dens = speed/10;
            self.sprite.scale.setTo(sca,sca);
            console.log(sca);
            //dataValue = [1000, 2000, 500, 11000];
            //for (i = 0; i < 4; i++) {
            //    ctx.fillRect(i + 1, 0, 0.5, dataValue[i]);
            //}
        });

        this.addGraph();
    },

    addGraph:function(){
        console.log("graph");
        numSamples = 4;
        maxVal = 12000;
        var stepSize = 1000;
        var colHead = 50;
        var rowHead = 60;
        var margin = 10;
        var header = "Millions";
        can = document.getElementById("can");
        ctx = can.getContext('2d');
        ctx.fillStyle = "black";
        yScalar = (can.height - colHead - margin) / (maxVal);
        xScalar = (can.width - rowHead) / (numSamples + 1);
        ctx.strokeStyle = "rgba(128,128,255, 0.5)"; // light blue line
        ctx.beginPath();
        // print  column header
        ctx.font = "14pt Helvetica";
        ctx.fillText(header, 0, colHead - margin);
        // print row header and draw horizontal grid lines
        ctx.font = "12pt Helvetica";
        var count =  0;
        for (scale = maxVal; scale >= 0; scale -= stepSize) {
            y = colHead + (yScalar * count * stepSize);
            ctx.fillText(scale, margin,y + margin);
            ctx.moveTo(rowHead, y);
            ctx.lineTo(can.width, y);
            count++;
        }
        ctx.stroke();
        // label samples
        ctx.font = "14pt Helvetica";
        ctx.textBaseline = "bottom";
        for (i = 0; i < 4; i++) {
            this.calcY(dataValue[i]);
            ctx.fillText(dataName[i], xScalar * (i + 1), y - margin);
        }
        // set a color and a shadow
        // translate to bottom of graph and scale x,y to match data
        ctx.translate(0, can.height - margin);
        ctx.scale(xScalar, -1 * yScalar);
        // draw bars
        for (i = 0; i < 4; i++) {
            ctx.fillRect(i + 1, 0, 0.5, dataValue[i]);
        }

    },

    calcY:function(value) {
    y = can.height - value * yScalar;
    }


};