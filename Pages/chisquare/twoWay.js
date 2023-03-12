squareArray=(array)=>array.map((value)=>(value*value).toFixed(2))
squareMatrix=(matrix)=>matrix.map(array=>squareArray(array))

 function MargeSquare(array,j,conj){
  var result=''
  array[j].forEach((value,index)=>{result=result+
    `\\frac{${value}${conj}}{${array[j+2][index]}}+`})
  return result.slice(0,-1)
  }

  function SumSquare(array,j){
  var sqn=array[j].map((value,index)=>
    (value**2/array[j+2][index]).toFixed(2))  
  return {sqn:sqn,sumSqn:sumArray(sqn)} 
  }

  function allSum(matrix,dp=2){
 let rowSums=matrix.map((row)=>sumArray(row,dp))
 let colSums=transpose(matrix).map((row)=>sumArray(row,dp))
 let grndSums=sumArray(rowSums,dp)
 return {grandSums:grndSums,rowSums:rowSums,
          colSums:colSums}
}

function transformData(matrix,dp=2){
  const {colSums,rowSums,grandSums}=allSum(matrix)
  let colVar=colSums.map((row,index)=>`<b>C <sub>${index+1}</sub></b>`)
 var transform=matrix.map((row,index)=>[`<b>R<sub> ${index+1}</sub></b>`,...row,sumArray(row,dp)])
transform=[[' ',...colVar,'<b>Total</b>'],...transform,
    ['<b>Total</b>',...colSums,`<b>${grandSums}</b>`]] 
return transform
}


function chisqData(arrayDat,dp=2){
    let rowSum=allSum(arrayDat)['rowSums']
  let grandSum=sumArray(rowSum,dp)
  let ncol=arrayDat.map((row)=>row.length)
  let nrow=transpose(arrayDat).map((row)=>row.length)
  let colSum=allSum(arrayDat)['colSums']
  let N=colSum.length*rowSum.length
  let df=(ncol[0]-1)*(nrow[0]-1)
  let colVar=colSum.map(()=>'Col')
var tableSum=[rowSum,colSum,nrow,ncol]

var expTable=arrayDat.map((row,i)=>
    row.map((col,j)=>(rowSum[i]*colSum[j]/grandSum).toFixed(2)))


var error=arrayDat.map((row,i)=>
    row.map((col,j)=>(col-expTable[i][j]).toFixed(2)))

var errorSq=squareMatrix(error)
var chi=errorSq.map((row,i)=>
    row.map((col,j)=>(col/expTable[i][j]).toFixed(2)))
let addition=chi.map((row)=>sumArray(row,dp))
console.log('addition')

var chiSq=sumArray(addition)

var result= {tableSum:tableSum,
    grandSum:grandSum,N:N,'originalData':arrayDat,
    expTable:expTable,error:error,errorSq:errorSq,
    chi:chi,chiSq:chiSq,df:df,nrow:nrow,ncol:ncol,
    }
    console.log(result)
    return result
}

function createTable(tablerow){
return `<table class='std' border=2 
            style="margin-left:-14px;">
             ${tableRow(tablerow)}
             </table>`
}


function sumMatrix(matrix,dp=2) {
   newMatrix=matrix.map((row)=>sumArray(row,dp))
   return sumArray(newMatrix,dp)
 }

function labeling(matrix){
 var rowlabel=matrix.map((row,index)=>`<b>Row  ${index+1}</b>`)
 var collabel=transpose(matrix).map((row,index)=>`<b>Col ${index+1}</b>`)
var joint2=rowlabel.map(()=>collabel)
var joint1=joint2.map((row,index)=>row.map(()=>`<b>Row ${index+1}</b>`))
joint1=MTA(joint1)
joint2=MTA(joint2)
return [joint1,joint2]
}

function summaryTab(data,dp=2) {
  const {tableSum,grandSum,N,
  originalData, expTable, error,
  errorSq, chi, chiSq, df,nrow,ncol}=chisqData(data)
  var label=labeling(data)
  var label1=['<b>Rows</b>',...label[0],'<b>Total</b>']
  var label2=['<b>Colums</b>',...label[1],' ']
  var obs=['<b>O</b>',...MTA(originalData),`<b>${sumMatrix(originalData)}</b>`]
  var expt=['<b>E</b>',...MTA(expTable),`<b>${sumMatrix(expTable)}</b>`]
  var err=['<b>D</b>',...MTA(error),`<b>${sumMatrix(error)}</b>`]
  var errSq=['<b>D<sup>2</sup></b>',...MTA(errorSq),`<b>${sumMatrix(errorSq)}</b>`]
  var xsq=['<b>D<sup>2</sup>/E</b>',...MTA(chi),`<b>${sumMatrix(chi)}</b>`]
  var Fstat=sumMatrix(chi)
  var summary=[label1,label2,obs,expt,err,errSq,xsq]
  var alpha=document.getElementById('alpha2').value
  var crit=chiCrit(df,alpha)
  var decide=decision(crit,Fstat,alpha)
  chiFormu=`
            <h3>$X^2 =\\sum \\frac{(O-E)^2}{E}$<br>
            $X^2 =${chiSq}$</h3>
            <p >$df=(r-1)(c-1)$<br><br>
              $r=${nrow[0]}, c=${ncol[0]}$<br><br>
              $df=(${nrow[0]}-1)(${ncol[0]}-1)$<br><br>
              $df=${nrow[0]-1}*${ncol[0]-1}=${df}$<br>
              $\\alpha=${alpha}$
              </p>
              <p>$X_{crit}=${crit}$
              </p>
              ${decide}

              `

  return createTable(transpose(summary))+chiFormu
}



  function ChiSq(data){
 const {tableSum,grandSum,N,
  originalData, expTable, error,
  errorSq, chi, chiSq, df,nrow,ncol}=chisqData(data)
   
 let table= `
             <div class='eachWork'>
            <h3 style="margin-left:-14px;">Observed values (O)</h3>
             ${createTable(transformData(originalData))}
             ${workingTotal(originalData)}
             </div>

             <div class='eachWork'>
             <h3 style="margin-left:-14px;">Expected values (E)</h3>
             ${Expected(originalData)}
             </div>

             <div class='eachWork'>
             <h3 style="margin-left:-14px;">Expected values (E)</h3>
            
             ${createTable(transformData(expTable))}
             ${workingTotal(expTable)}
             </div>

             <div class='eachWork '>
             <h3 style="margin-left:-14px;">Deviation (O-E)</h3>
             ${deviation(originalData,expTable)}
             </div>
            `
document.getElementById('check').innerHTML=table
latex()

}



function MTA(matrix){
      let array=[]
      matrix.forEach((row)=>array=[...array,...row])
      return array
}

function workingTotal(matrix) {
  rows=`<div> <h3>Rows and Columns Total</h3>`
  sumItem=[]
  matrix.forEach((row,index)=>
    {rows+=`<p>R $_{${index+1} total} = $ ${MargeArray(row,"+")}</p>
    <p>R $_{${index+1}total} =$ ${sumArray(row)}</p>`
    sumItem.push(sumArray(row))})
  transpose(matrix).forEach((row,index)=>
    {rows+=`<p>C $_{${index+1}total} = $ ${MargeArray(row,"+")}</p>
    <p>C $_{${index+1}total} =$ ${sumArray(row)}</p>`})

  var step2=`<p>$Total_{grand}=${MargeArray(sumItem,"+")}$</p>
             <p>$Total_{grand}=${sumMatrix(matrix)}$</p>`
  return rows+step2+"</div>"
 } 

 function deviation(matrix1,matrix2) {
  working=`<h4>$D_{ij}=O_{ij}-E_{ij}$</h4>`
  matrix1.forEach((row,i)=>{
     row.forEach((col,j)=>{
      step1=`<p><h4>$D_{${i+1},${j+1}}=O_{${i+1},${j+1}}-E_{${i+1},${j+1}}$</h4>
                $D_{${i+1},${j+1}}=${col}-${matrix2[i][j]}$<br>
                $D_{${i+1},${j+1}}=$${(col-matrix2[i][j]).toFixed(2)}
              </p>`
      working+=step1})
    })
    return working
  }

function Expected(matrix) {
  working=``
  let label=labeling(matrix)
  allSums=chisqData(matrix)['tableSum']
  rowSums=allSums[0]
  colSums=allSums[1]
  grandSum=chisqData(matrix)['grandSum']
  rowSums.forEach((row,i)=>{
     colSums.forEach((col,j)=>{
      step1=`<p><h4>$E_{R${i+1},C${j+1}}=\\frac{R_{${i+1}total}*C_{${j+1}total}}{Total_{grand}}$</h4>
                $E_{${i+1},${j+1}}= \\frac{${row}*${col}}{${grandSum}}$
                = ${(row*col/grandSum).toFixed(2)}
              </p>`
      working+=step1
     })
  })
  return working
}

var decision=function(crit,stat,alpha){
const decison=crit<stat?`
<b>Decision:</b> Reject the null hypothesis
since $(${stat})X_{stat}>X_{crit}(${crit})$`:
`<b>Decision</b>: We do not reject the null hypothesis
since $(${stat})X_{stat} < X_{crit} (${crit})$`
const conclusion=crit<stat?`<p><b>Conclusion:</b>at ${alpha} level of significant We have enough evidence to 
conclude that the variables are related</p>`:
`<p><b>Conclusion:</b>at ${alpha} level of significant The data do not have enough evidence to 
indicate that the given variables are related</p>`
var summary=`<p>${decison}
              ${conclusion}
              </p>`
return summary}

function solveSummary(data){
  document.getElementById('summary').innerHTML=
  ` <p id='hypothesis'><b>H<sub>0:</sub> Variable1 (column) and variable2 (Rows) are not related in the population;<br><br>
              H<sub>a</sub>: Variable1 (column) and  variable2 (Rows) are related in the population
              </b></p>
     ${summaryTab(data)}
  <button class="details" onclick="ShowDetails()">Show full details</button>
`
}
