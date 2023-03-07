
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
      return `${tr}<td class="styleTd">${data}</td>`},'')}).
    reduce((tr,data)=>{return `${tr}<tr>${data}</tr>`},'')
    return allRows
  }

var transpose=(Matrix)=>Matrix[0].map((col,c)=>Matrix.map(row=>row[c]))
function removeEmpty(arr,value){
 return arr.filter((el)=>el!=value&&el!=undefined)
}
function removeEmptyFromMatrix(Matrix,value) {
  return Matrix.map((arr)=>removeEmpty(arr,value))
}
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
             <th class="styleTh">$x_${ij}$</th>
             <th>$x_${ij}-\\bar x_${ij}$</th>
             <th>$(x_${ij}-\\bar x_${ij})^2$</sup>
             </tr>
             ${tableRow(sdTable)}
             </table>`

let Rough1=`<div>
             <p>$\\sum x_${ij}=${sdDetails.sum}$<br>
                $N=${sdDetails.n}$<br><br>
                $\\bar x_${ij}=\\frac{\\sum x}{N}$<br><br>
                $\\bar x_${ij}=${sdDetails.sum}/${sdDetails.n}$<br>
                $\\bar x_${ij}=${sdDetails.mean}$<br><br>
                $\\sum (x_${ij}-\\bar x_${ij})^2=${sdDetails.sumSqDev}$<br>
                $SS_${ij}=${sdDetails.sumSqDev}$<br>
                </p>
             </div>`

document.getElementById(idElement).innerHTML+=`<div class="eachWork">
     <h4>Mean and Sum of Square $X_{${ij}}$</h4>`+table+Rough1+'</div>';
     return sdDetails}

function SSWAnova(matrix){ 
    let allSS=[]
  document.getElementsByClassName('SSWHeading')[0].innerHTML=
"Mean and Sum of Square Within the Groups"
  AnovaTable.dft=0
    matrix.map((row,col)=>{
        let ss=SS(row,'check',2,col).sumSqDev
        allSS.push(ss)
        AnovaTable.dft+=row.length}
        )
    const SSW=sumArray(allSS)
    const SSWadd=MargeArray(allSS,'+')
    document.getElementById('check').innerHTML+=
    `<div class="eachWork" style="padding: 20px 12px; font-size: 14px;">
  <h4>Sum of Square within the Group</h4>
      <p>$SSW=SS_0 + SS_1 + SS_2 + SS_3 + ....+SS_n$<br>
       SSW=${SSWadd}      <br>
      SSW=${SSW}
      </div>`;
      AnovaTable.SSW=Number(SSW)}

/*function to get the list of mean*/
function MeanArray(arrayDat,dp=3){
let means=[]
arrayDat.map((row,col)=>
{let sum=sumArray(row)
let n=row.length
let mean=(sum/n).toFixed(dp)
means.push(mean)})
return means}


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
                        </th>`}
}

function RemoveColumn(classname){
    allRow=document.getElementsByClassName(classname)
    noOfRow=allRow.length
    var col=allRow[1].childElementCount
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Col-${col}</i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 2; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <th class="head">    
                            <input type="number" class="input" style="width: 100%;">
                        </th>`}
}

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


function RemoveColumn1(classname){
   var allRow=document.getElementsByClassName(classname)  
    var noOfRow=allRow.length
    for (var i = 0; i <noOfRow; i++) {
        allRow[i].removeChild(allRow[i].lastElementChild)    }
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
      </tr>`}


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


function RemoveRow1(id='oneWay') {
    let table=document.getElementById(id)
    let tbody=table.children[0]
    tbody.removeChild(tbody.lastElementChild)
    }
/* Function to generate analysis report table */
function Report(){
const {SSW, SSB, dfw, dfb,SST,MSW,MSB,F,dft}=AnovaTable
const alpha=document.getElementById('alpha1').value
const FcritValue=Number(Fcrit(alpha,dfb,dfw))
const decison=FcritValue<F?`<b>Decision:</b> Reject the null hypothesis
since $(${F})F_{stat}$>F_{crit}(${FcritValue})`:
`<b>Decision</b>: We do not reject the null hypothesis
since $(${F})F_{stat} < F_{crit}(${FcritValue})$`
const conclusion=FcritValue<F?`<p><b>Conclusion:</b>at ${alpha} level of significant We have enough evidence to 
conclude that there all the means are not the same</p>`:
`<p><b>Conclusion:</b>at ${alpha} level of significant We do not have enough evidence to 
conclude that there all the means are not the same</p>`
const table=`<table style="border-collapse:collapse;
                           margin:14px;" border=2>
           <tr>
        <th class="styleTh">Sources Of Variation</th>
        <th class="styleTh">SS</th>
        <th class="styleTh">df</th>
        <th class="styleTh">MST=SS/df</th>
        <th class="styleTh">F</th>
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
        <p>$\\alpha =${alpha}$<br>
           $F_{${alpha}(${dfb},${dfw})}=${FcritValue}$<br>
            ${decison}</p>
        ${conclusion}
        <button class="details" onclick="ShowDetails()">Show full details</button>
     
           `
document.getElementById('summary').innerHTML=table
}




