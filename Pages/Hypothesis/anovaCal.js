/*Switching of the Calculator*/
document.querySelector(".OneWay").addEventListener("click", OneWay)
function OneWay(){
    document.querySelector(".frame").style.display = 'block'
    document.querySelector(".frame2").style.display = 'none'
}

document.querySelector(".TwoWay").addEventListener("click", TwoWay)

function TwoWay(){ 
    document.querySelector(".frame").style.display = 'none'
    document.querySelector(".frame2").style.display = 'block'
}

document.querySelector(".OneWay2").addEventListener("click", OneWay)
function OneWay(){
    document.querySelector(".frame").style.display = 'block'
    document.querySelector(".frame2").style.display = 'none'
}
document.querySelector(".TwoWay2").addEventListener("click", TwoWay)
function TwoWay(){
    document.querySelector(".frame").style.display = 'none'
    document.querySelector(".frame2").style.display = 'block'
}
/*____________Switching End Here */



/*Funtion to convert the latex codes*/
function latex(){(function () {
  if (document.body.querySelector('math') ||
      document.body.textContent.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
    if (!window.MathJax||window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: {'[+]': [['$', '$']]}
        }
      };
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    document.head.appendChild(script);
  }
})();}


/*____________________latex end ________________________*/

function dataSet(id){
    let allTr=document.getElementsByClassName(id)
    let noOfRow=allTr.length
    var data=[]
    var i=0
    while(noOfRow>i){
    let tr=allTr[i].children
    let colData=Array.from(tr).map(td=>{
    let node=td.firstElementChild.tagName=='P'?1:0
        return td.children[node].value})
    data.push(colData)
    i++
    }
    workingData=data
    return data
    console.log(data)
}

function dataSet2(id){
    let allTr=document.getElementsByClassName(id)
    let noOfRow=allTr.length
    var data=[]
    var i=0
    while(noOfRow>i){
    let tr=allTr[i].children
    let colData=Array.from(tr).map(td=>{
    let node=td.firstElementChild.tagName=='P'?1:0
        return Number(td.children[node].value)})
    j=colData.slice(1,)
    data.push(j)
    i++
    }
    workingData=data
    return data
    console.log(data)
}

var workingData=[]
var data=[[4,5,3,6],[4,7,3,8],[3,8,4,5],[4,5,8,5],[4,6,3,6],[8,7,5,6]]
let allInput=document.getElementsByClassName('input')
Array.from(allInput).forEach(input=>input.addEventListener('input',dataSet))

function computeM2(){
document.getElementById('check').innerHTML=''
dataSet('dataRows1')
workingData=removeEmptyFromMatrix(transpose(workingData),'')
ZcalMean2(workingData)
Report()
latex()
topFunction()
}

function computeP2(){
document.getElementById('check').innerHTML=''
dataSet('dataRows1')
workingData=removeEmptyFromMatrix(transpose(workingData),'')
ZcalProp2(workingData)
Report()
latex()
topFunction()
}
function compute2(){
document.getElementById('check').innerHTML=''
dataSet2('dataRows2')
let cleanData=removeEmptyFromMatrix(workingData,'')
cleanData=cleanData.filter((arr)=>arr.toString()!='')
ChiSq(cleanData)
solveSummary(cleanData)
latex()
topFunction()
document.getElementById("check").style.display = 'none'
}


function topFunction() {
  document.body.scrollTop = 400;
  document.documentElement.scrollTop = 400;
}

function latex(){(function () {
if (document.body.querySelector('math') ||
  document.body.textContent.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
if (!window.MathJax||window.MathJax) {
  window.MathJax = {
    tex: {
      inlineMath: {'[+]': [['$', '$']]}
    }
  };
}
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
document.head.appendChild(script);
}
})();}

function ShowDetails(){
  document.getElementById('check').style.display = 'flex';
  document.querySelector('.details').style.display = "none";
  topFunction()}

document.getElementById('compute').addEventListener('click', () => {
  document.querySelector("#myDiv").style.display= 'none'
  document.querySelector(".SSWHeading").style.display= 'none'
    
  document.querySelector('#loader').style.display = 'block'
  setTimeout( () => {
      document.querySelector('#loader').style.display = 'none'
      document.querySelector("#myDiv").style.display= 'block'
      document.querySelector(".SSWHeading").style.display= 'block'
     
  }, 3000);
  
})

document.getElementById('ci').innerHTML=ZcalProp2(0.3,0.4,2)['propWorking']
latex()