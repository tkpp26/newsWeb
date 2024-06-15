(()=>{"use strict";const t=Math.PI/180;let i=null;const s=document.getElementById("canvas"),h=s.getContext("2d");let n=s.width=window.innerWidth,e=n/2,a=s.height=window.innerHeight,r=a/2,o=[],l=20;h.strokeStyle="AliceBlue",h.lineCap="round";class c{constructor(t){this.x=t.x,this.X=t.x,this.y=t.y,this.w=2*t.r,this.h=2*t.r,this.angle=t.angle||90-180*Math.random(),this.cx=this.w/2,this.cy=this.h/2,this.amplitude=10+20*Math.random(),this.frequency=.025*Math.random(),this.start=Math.random()*Math.PI,this.speed=.5+Math.random(),this.angleDeviation=t.angleDeviation||1/(5+~~(20*Math.random())),this.lineWidth=1+~~(3*Math.random()),this.spacing=t.spacing||3*this.lineWidth,this.hatching=new g({x:this.x,y:this.y,w:this.w,h:this.h,angle:this.angle%45,spacing:this.spacing,angleDeviation:this.angleDeviation}),this.circle=new d({r:t.r})}draw(){this.hatching.update(),h.lineWidth=this.lineWidth,h.save(),h.beginPath(),h.arc(this.x+this.cx,this.y+this.cy,this.circle.r,0,2*Math.PI),h.clip(),this.hatching.draw({x:this.x,y:this.y}),h.restore(),this.circle.draw({x:this.x+this.cx,y:this.y+this.cy})}update(){if(this.y>-this.h-this.circle.lineLength)this.y-=this.speed;else{this.y=a+this.h;let t=Math.random()*n;this.x=t,this.X=t}this.x=Math.sin(this.y*this.frequency+this.start)*this.amplitude+this.X}}class g{constructor(i){this.x=i.x,this.y=i.y,this.w=i.w,this.h=i.h,this.spacing=i.spacing,this.angleDeviation=i.angleDeviation,this.cx=this.w/2,this.cy=this.h/2,this.r=.5*Math.sqrt(this.w*this.w+this.h*this.h),this.angle=i.angle*t%Math.PI/2,this.extra=.5*this.w*Math.tan(this.angle),this.angle<0&&(this.extra*=-1),this.points=[],this.getPoints()}getPoints(){for(let t=-this.extra;t<this.h+this.extra;t+=this.spacing){let i=this.angle+(.5-Math.random())*this.angleDeviation,s=.5-Math.random(),h=5*(.5-Math.random());this.hatch({x:this.cx+h,y:t+s},i),this.hatch({x:this.cx+h,y:t+s},i+Math.PI)}}hatch(t,i){let s=t.x+this.r*Math.cos(i),h=t.y+this.r*Math.sin(i);this.points.push(s),this.points.push(h)}draw(t){for(let i=0;i<this.points.length;i+=4)h.beginPath(),h.moveTo(t.x+this.points[i],t.y+this.points[i+1]),h.lineTo(t.x+this.points[i+2],t.y+this.points[i+3]),h.stroke()}update(){this.y<-this.h-this.extra-150&&(this.y=a+this.h+this.extra),this.y--}}class d{constructor(t){this.r=t.r,this.lineLength=50+70*Math.random(),this.circlePoints=[],this.stringPoints=[0,t.r],this.getPoints()}getPoints(){for(let i=-70;i<650;i+=20){let s=this.r*Math.cos(i*t)+4*Math.random(),h=this.r*Math.sin(i*t)+4*Math.random();this.circlePoints.push(s),this.circlePoints.push(h)}for(let t=0;t<this.lineLength;t+=20){let i=this.stringPoints[0]+(4-8*Math.random()),s=this.stringPoints[1]+t+(4-8*Math.random());this.stringPoints.push(i),this.stringPoints.push(s)}}draw(t){h.beginPath(),h.moveTo(t.x+this.circlePoints[0],t.y+this.circlePoints[1]);for(let i=2;i<this.circlePoints.length;i+=2)h.lineTo(t.x+this.circlePoints[i],t.y+this.circlePoints[i+1]);h.stroke(),h.beginPath(),h.moveTo(t.x+this.stringPoints[0],t.y+this.stringPoints[1]);for(let i=2;i<this.stringPoints.length;i+=2)h.lineTo(t.x+this.stringPoints[i],t.y+this.stringPoints[i+1]);h.stroke()}}let x=new c({x:50,y:a+50,r:50,angle:-45,spacing:5,angleDeviation:.2});o.push(x);let y=0;function p(){if(y++,y%70==0&&o.length<l){let t=10+~~(15*Math.random());o.push(new c({x:Math.random()*n,y:a+t,r:2*t}))}i=requestAnimationFrame(p),h.clearRect(0,0,n,a),o.map((t=>{t.update(),t.draw()}))}function w(){i&&(window.cancelAnimationFrame(i),i=null),n=s.width=window.innerWidth,e=n/2,a=s.height=window.innerHeight,r=a/2,h.strokeStyle="black",h.lineCap="round",p()}setTimeout((function(){w(),window.addEventListener("resize",w,!1)}),15)})();