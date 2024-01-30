//Este metodo de function es poco utilizado
/**const Point = new Function('x','y',` 
this.x=x
this.y=y
this.dibujar=function(){console.log('Dibujando...')}`)
const p = new Point(1,2)
console.log(p)*/

//Esta es la mejor forma de definir un constructor
function Punto(x,y){
    this.x=x
    this.y=y
    this.dibujar=function(){console.log('Dibujando...')
}}

//Extender un objeto
let point ={z:1}//Objeto solo para garegar a Punto
//Punto.call(point,1,2)
Punto.apply(point,[1,2])
console.log(point)
