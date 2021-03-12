var canvas=document.getElementById("canvas1");
 ctx=canvas.getContext("2d");
color=["blue","yellow","brown","green","red"];

ctx.beginPath();
ctx.arc(240,190,40,0,2*Math.PI);
ctx.arc(200,150,40,0,2*Math.PI);
ctx.arc(280,150,40,0,2*Math.PI);
ctx.arc(320,190,40,0,2*Math.PI);
ctx.arc(350,150,40,0,2*Math.PI);
ctx.lineWidth=2;
ctx.strokeStyle=color;

ctx.stroke();

