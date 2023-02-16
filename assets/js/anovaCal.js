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


var AnovaTable={SSW:0,SSB:0,dfw:0,
                    dfb:0,SST:0,MSW:0,
                    MSB:0,F:0,dft:0}
/*function to sum all value in array*/  
function sumArray(array,dp=4){
  var result=0
  array.forEach((value)=>{result=result+Number(value)})
  return result.toFixed(dp)
  }

 function MargeArray(array,conjuction){
  var result=''
  array.forEach((value)=>{result=result+value+conjuction})
  return result.slice(0,-1)
  }

 function tableRow(tableArray,rootId,){
    var allRows=tableArray.map((row,index)=>{
      return row.reduce((tr,data)=>{
      return `${tr}<td>${data}</td>`},'')}).
    reduce((tr,data)=>{return `${tr}<tr>${data}</tr>`},'')
    return allRows
  }

var transpose=(Matrix)=>Matrix[0].map((col,c)=>Matrix.map(row=>row[c]))

function sd(arrayDat,dp=3){
let arrayData=arrayDat
let sum=sumArray(arrayData)
let n=arrayData.length
let mean=(sum/n).toFixed(dp)
let dev=arrayData.map(data=>(data-mean).toFixed(dp))
let sqDev=dev.map(data=>(data*data).toFixed(dp))
let sumSqDev=sumArray(sqDev)
let variance=sumSqDev/n
let std=Math.sqrt(variance)
return {sum:sum,n:n,mean:mean,dev:dev,sqDev:sqDev,
        sumSqDev:sumSqDev,variance:variance,std:std,
        sdTable:transpose([[...arrayData,sum],[...dev,0],[...sqDev,sumSqDev]])}}

function SS(array,idElement,dp,ij){
    let sdDetails=sd(array)
    let sdTable=sdDetails.sdTable

let table=`<table class='std' border=2 
            style="border-collapse: collapse;
           text-align: center;">
            <tr>
             <th>$x_${ij}$</th>
             <th>$x_${ij}-\\bar x_${ij}$</th>
             <th>$(x_${ij}-\\bar x_${ij})^2$</sup>
             </tr>
             ${tableRow(sdTable)}
             </table>`

let Rough1=`<div>
             <p>$\\sum x_${ij}=${sdDetails.sum}$<br>
                $N=${sdDetails.n}$<br>
                $\\bar x_${ij}=\\frac{\\sum x}{N}$<br>
                $\\bar x_${ij}=${sdDetails.sum}/${sdDetails.n}$<br>
                $\\bar x_${ij}=${sdDetails.mean}$<br><br>
                $\\sum (x_${ij}-\\bar x_${ij})^2=${sdDetails.sumSqDev}$<br>
                $SS_${ij}=${sdDetails.sumSqDev}$<br>
                </p>
              
             </div>`

document.getElementById(idElement).innerHTML+=`<div class="eachWork">
     <h4>Mean and Sum of Square $X_{${ij}}$</h4>`+table+Rough1+'</div>';
     return sdDetails.sumSqDev}

function SSWAnova(matrix){ 
    let allSS=[]
    document.getElementById('check').innerHTML+=
    "<h3><center>Mean and Sum of Square Wihin th Groups</center></h3>"
    AnovaTable.dft=0
    matrix.map((row,col)=>{
        let ss=SS(row,'check',2,col)
        allSS.push(ss)
        AnovaTable.dft+=row.length}
        )
    
    const SSW=sumArray(allSS)
    const SSWadd=MargeArray(allSS,'+')
    document.getElementById('check').innerHTML+=
     `<div style="padding-left:33px;">
      <h4>Sum of Square within the Group</h4>
      <p>$SSW=SS_0 + SS_1 + SS_2 + SS_3 + ....+SS_n$<br>
       SSW=${SSWadd}      <br>
      SSW=${SSW}
      </div>`;
      AnovaTable.SSW=Number(SSW)}

function MeanArray(arrayDat,dp=3){
let means=[]
arrayDat.map((row,col)=>
{let sum=sumArray(row)
let n=row.length
let mean=(sum/n).toFixed(dp)
means.push(mean)})
return means}

/*function to calculate the Sum of Square Between the Groups*/
function SSB(array){
document.getElementById('check').innerHTML+=
"<h3 style='margin:10px 0px 0px 20px;'>Sum of Square Between</center></h3>"
let ssb= SS(MeanArray(array),'check',2,'B')
AnovaTable.SSB=Number(ssb)
AnovaTable.dfb=MeanArray(array).length-1;
AnovaTable.dft=AnovaTable.dft-1;
AnovaTable.dfw=AnovaTable.dft-AnovaTable.dfb;
AnovaTable.SST=AnovaTable.SSB+AnovaTable.SSW
AnovaTable.MSB=AnovaTable.SSB/AnovaTable.dfb
AnovaTable.MSB=Number((AnovaTable.SSB/
    AnovaTable.dfb).toFixed(3))
AnovaTable.MSW=Number((AnovaTable.SSW/
    AnovaTable.dfw).toFixed(3))

AnovaTable.F=Number((AnovaTable.MSB/
    AnovaTable.MSW).toFixed(3))
}


/*funciton to add column to table*/
function addColumn(classname){
    allRow=document.getElementsByClassName(classname)
    noOfRow=allRow.length
    var col=allRow[1].childElementCount
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Col-${col}</i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 1; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <th class="head">    
                            <input type="number" class="input" style="width: 100%;">
                        </th>`
    }
}
var RowCol
function addColumn1(classname){
    allRow=document.getElementsByClassName(classname)  
    var col=allRow[1].childElementCount+1
    noOfRow=allRow.length
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Column ${col} </i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 1; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <td>
                        <input type="number" class="input">
                        </td>`
    }
}

function addRow(id='twoWay',classname='dataRows2') {
    let oneWayTable=document.getElementsByClassName(classname)
    let row=oneWayTable.length+1
    var col=oneWayTable[1].childElementCount
    var tds=`<td><i class="row">R-${row}</i></td>`
    while(col>2){
      tds+=`<td><input type="number" class="input"></td>`
      col--}
    document.getElementById(id).innerHTML+= 
     `<tr class="dataRows2">
          ${tds}
      <th class="head">
            <input type="number" class="input">
        </th>
      </tr>`
    }

   function addRow1(classname='dataRows1',id='oneWay') {
    oneWayTable=document.getElementsByClassName(classname)[1]
    var col=oneWayTable.childElementCount
    var tds=`<td><input type="number" class="input"></td>`
    while(col>1){
      tds+=`<td><input type="number" class="input"></td>`
      col--}
    document.getElementById(id).innerHTML+= 
     `<tr class="dataRows1">
          ${tds}
      </tr>`
    }

/* Function to generate analysis report table */
function Report(){
const {SSW, SSB, dfw, dfb,SST,MSW,MSB,F,dft}=AnovaTable
const table=`<table style="border-collapse:collapse;
                           margin:14px;" border=2>
          <tr>
            <th>Sources Of Variation</th>
            <th>SS</th>
            <th>df</th>
            <th>MST=SS/df</th>
            <th>F</th>
           </tr>

           <tr>
            <td><b>Between Groups</b></td>
            <td>${SSB}</td>
            <td>${dfb}</td>
            <td>${MSB}</td>
            <td>${F}</td>
           </tr>
           <tr>
            <td><b>Between Groups</b></td>
            <td>${SSW}</td>
            <td>${dfw}</td>
            <td>${MSW}</td>
            <td></td>
           </tr>
           <tr>
            <td><b>Total</b></td>
            <td>${SST}</td>
            <td>${dft}</td>
            <td></td>
            <td></td>
           </tr>
        </table>
           `
document.getElementById('summary').innerHTML=table
}
function dataSet(){
    let allTr=document.getElementsByClassName('dataRows1')
    let noOfRow=allTr.length
    var data=[]
    var i=0
    while(noOfRow>i){
    let tr=allTr[i].children
    let colData=Array.from(tr).map(td=>{
    let node=td.firstElementChild.tagName=='P'?1:0
        return Number(td.children[node].value)})
    data.push(colData)
    i++
    }
    workingData=data
    return data
    console.log(data)
}
var workingData=[]
let m=[[51,45,33,45,67],[23,43,23,43,45],[56,76,74,87,56]]
var data=[[4,5,3,6],[4,7,3,8],[3,8,4,5],[4,5,8,5],[4,6,3,6],[8,7,5,6]]
let allInput=document.getElementsByClassName('input')
Array.from(allInput).forEach(input=>input.addEventListener('input',dataSet))
function compute(){
    document.getElementById('check').innerHTML=''
    document.getElementById('result').innerHTML=''
    dataSet()
    workingData=transpose(workingData)
    SSWAnova(workingData)
    SSB(workingData)
    Report()
    latex()
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

