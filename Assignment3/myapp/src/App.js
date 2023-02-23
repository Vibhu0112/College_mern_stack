import logo from './logo.svg';
import './App.css';

function App() {
 /* 
      function sprdFun1(){
        console.log("Spread Example");
        const [x,...y] = [1,2,3];
        console.log(x);
        console.log(y);
      }

       function sprdFun2(){
        let a, b, rest;
        [a, b] = [10, 20];
        console.log(a);
        console.log(b);
        [a, b, ...rest] = [60, 80, 30, 40, 50];
        console.log(a);
        console.log(b);
        console.log(rest);
       }
  
       function sprdFun3(){
         const {a, b, ...rest} = {a:10, b:20, c:30, d:40};
         console.log(a);
         console.log(b);
         console.log(rest);
      }

      function sprdFun4(){
        const foo= ['one', 'two'];
        const [r, y, g, b, p] = foo;
        console.log(r);
        console.log(y); 
        console.log(g); 
        console.log(b); 
        console.log(p); 
      }

      function sprdFun5(){
        const arr= [1,2,3];
        [arr[2], arr[1]] = [arr[1], arr[2]];
        console.log(arr); 
      }
      
      sprdFun1();
      sprdFun2();
      sprdFun3();
      sprdFun4();
      sprdFun5();

*/




function lSt() {
  var l= '';
  for(var i=0; i< arguments.length; i++) {
    if(arguments[i].length> l.length) {
      l= arguments[i];
    }
  }
  console.log(l);
}
lSt('lion','tiger','elephant','ant')

function sSt() {
     var l= '';
     for(var i=0; i< arguments.length; i++) {
       if(arguments[i].length<l.length) {
         l= arguments[i];
        }}
        console.log(l);
}
  sSt('lion','tiger','elephant','ant')

function hVal() {
  var l= 0;
  for(var i=0; i< arguments.length; i++) {
    if(arguments[i]< l) {l= arguments[i];
    }
  }
  console.log(l);
}
  hVal(200,150,90,800,70,55)
  
function lVal() {
  var l= 0;
  for(var i=0; i< arguments.length; i++) {
    if(arguments[i]>l) {
      l= arguments[i];
    }
  }
  console.log(l);
}
  lVal(200,150,90,800,70,55)



/*

  function func(arg) {
    arg= 50; 
    console.log(arguments[0]);
  }
  func(10);

  function func1(a) {
    arguments[0] = 50; 
    console.log(a);
  }
  func1(10); 
  
  function func3(a= 0) {
    console.log(arguments[0]);
  }
  func3(); 
  
  function func4(a= 0) {
    a= 99; 
    console.log(arguments[0]);
  }
  func4(10); 

*/
    }

export default App;
