
var AnovaTable={SSW:0,SSB:0,dfw:0,
                dfb:0,SST:0,MSBr:0,
                MSBc:0,MSW:0,dft:0}

function sqData(arrayDat,dp=2){
  let rowSum=arrayDat.map((row)=>sumArray(row,dp))
  let grandSum=sumArray(rowSum,dp)
  let nrow=arrayDat.map((row)=>row.length)
  let ncol=transpose(arrayDat).map((row)=>row.length)
  let colSum=transpose(arrayDat).map((col)=>sumArray(col,dp))
  let N=colSum.length*rowSum.length
  let colVar=colSum.map(()=>'Col')
  var tableSum=[rowSum,colSum,nrow,ncol]
  var transformData=arrayDat.map((row)=>['Row',...row,sumArray(row,dp)])
  transformData=[[' ',...colVar,'Total'],...transformData,
          ['Total',...colSum,grandSum]]
  return {tableData:transformData,tableSum:tableSum,
    grandSum:grandSum,N:N}
}

squareArray=(array)=>array.map((value)=>value*value)
squareMatrix=(matrix)=>matrix.map(array=>squareArray(array))

 function MargeSquare(array,j,conj){
  var result=''
  array[j].forEach((value,index)=>{result=result+
    `\\frac{${value}${conj}}{${array[j+2][index]}}+`})
  return result.slice(0,-1)
  }

  function SumSquare(array,j){
  var sqn=array[j].map((value,index)=>(value**2/array[j+2][index]).toFixed(2))  
  return {sqn:sqn,sumSqn:sumArray(sqn)} 
  }

function SSB2Way(matrix){
  var AnovaTable={SSW:0,SSBc:0,SSBr:0,dfw:0,dfbr:0,
                  MSBr:0,dfbc:0,SST:0,MSW:0,
                  MSBc:0,F:0,dft:0}

  var parameters=sqData(matrix)
 const {tableData,tableSum,grandSum,N}=parameters
 const C=(grandSum**2/N).toFixed(2)
 var sst=sqData(squareMatrix(matrix))['tableData']
  AnovaTable['SSBr']= SSwR(matrix,'rows')[1]
  AnovaTable['SSBc']=SSwR(transpose(matrix),'columns')[1]
  AnovaTable['dft']=N-1

 let SStotal=sqData(squareMatrix(matrix))
  let SSTgrnd=SStotal['grandSum']
  let SST2W=(SSTgrnd/N).toFixed(2)
  let step1=`<p>$ SS Tota(SS_total )=∑∑\\frac{T_{ij}^2}{n_{ij}} -C$<br>
              $∑∑T_{ij}^2=${SSTgrnd}<br>$
              $n_{ij}=${N}<br>$
            $SS_{total}=\\frac{${SSTgrnd}}{${N}}$<br>
            $SS_{total}=${SST2W}$<br>`
     AnovaTable['SST']=SST2W
      AnovaTable['SSW']=(SST2W-AnovaTable['SSBr']-
                    AnovaTable['SSBc']).toFixed(2)
      AnovaTable['dfbc']=SStotal['tableSum'][1].length-1
      AnovaTable['dfbr']=SStotal['tableSum'][0].length-1
      AnovaTable['dfw']=AnovaTable['dft']-AnovaTable['dfbc']-AnovaTable['dfbr']
      AnovaTable['MSBc']=(AnovaTable['SSBc']/AnovaTable['dfbc']).toFixed(2)
      AnovaTable['MSBr']=(AnovaTable['SSBr']/AnovaTable['dfbr']).toFixed(2)
      AnovaTable['MSW']=(AnovaTable['SSW']/AnovaTable['dfw']).toFixed(2)
      console.log(AnovaTable)
 var rough1=`<p>From the table above<br>
             G=${grandSum}(the grand total)<br>
             N=${N}(number of overall data given)</p>

             <p>
             $Correction Term (C)= \\frac{G^2}{N}$ <br>
             $C=${grandSum}^2/${N}=${C}$
             </p>`

let table=`<div class='eachWork'>
            <table class='std' border=2 
            style="border-collapse: collapse;
           text-align: center;">
             ${tableRow(tableData)}
             </table>
             ${rough1}
            </div>
            <div class='eachWork'>
            ${SSwR(matrix,'rows')[0]}
            </div>
            <div class='eachWork'>
            ${SSwR(transpose(matrix),'columns')[0]}
            </div>
            <div class='eachWork'>
            <h3>Square of all the data given and sum</h3>
             <table class='std' border=2 
            style="border-collapse: collapse;
           text-align: center;">
             ${tableRow(sst)}
             </table>
             ${step1}
             </div>

             `

    document.getElementById('check').innerHTML=table
    return AnovaTable
     }


function SSwR(matrix,category) {
 var parameters=sqData(matrix)
 const {tableData,tableSum,grandSum,N}=parameters
 const C=(grandSum**2/N).toFixed(2)
 
 var rowSquare1=MargeSquare(tableSum,0,'^2')
 var rowSquare2=MargeArray(SumSquare(tableSum,0)['sqn'],'+')
 var rowSquare3=SumSquare(tableSum,0)['sumSqn']
 var rowSquare4=(rowSquare3-C).toFixed(2)
 var rough1=`<p>
             <h3>Sum of Square Between ${category}</h3>
             $SS Btw ${category} (SS_{${category}} )=∑\\frac{T_i^2}{n_i} -C$<br>
             where $T_i$ and $n_i$ represent the total and number of data in each ${category} respectively<br>
             $∑\\frac{T_i^2}{n_i} = \\frac{T_1^2}{n_1} +\\frac{T_2^2}{n_2}+\\frac{T_3^2}{n_3} $<br>
             $…….+\\frac{T_{${category}}^2}{n_{${category}}}$<br>
             $∑\\frac{T_i^2}{n_i} =${rowSquare1}$<br>
             $∑\\frac{T_i^2}{n_i} =${rowSquare2}$
             $∑\\frac{T_i^2}{n_i} =${rowSquare3}$
             </p>

             <p>
             $SSB_{${category}}=∑\\frac{T_i^2}{n_i} -C $<br>
             $SSB_{${category}}=${rowSquare3}-${C}$<br>
             $SSB_{${category}}=${rowSquare4}$
             </p>
             `
            return [rough1,rowSquare4]
           }


/* Function to generate analysis report table */
function Report2W(matrix){
const {MSBc,MSBr,MSW,SSBc,SSBr,SST,SSW,dfbc,dfbr,dft,dfw}=SSB2Way(matrix)
const Frow=(MSBr/MSW).toFixed(2)
const Fcol=(MSBc/MSW).toFixed(2)
const alpha=document.getElementById('alpha2').value
const Fcritrow=Number(Fcrit(alpha,dfbr,dfw))
const Fcritcol=Number(Fcrit(alpha,dfbc,dfw))

var decision=function(crit,stat,dfb,dfw,alpha,part){
const decison=crit<stat?`
<b>Decision:</b> Reject the null hypothesis
since $(${stat})F_{stat}$>F_{crit}(${crit})`:
`<b>Decision</b>: We do not reject the null hypothesis
since $(${stat})F_{stat} < F_{crit}(${crit})$`
const conclusion=crit<stat?`<p><b>Conclusion:</b>at ${alpha} level of significant We have enough evidence to 
conclude that there is significant different Between the means or all the means are the same are not the same</p>`:
`<p><b>Conclusion:</b>at ${alpha} level of significant The data do not have enough evidence to 
indicate that the given variable are differ</p>`
var summary=`<p><h3>${part} Variation </h3>
              $\\alpha =${alpha}$<br>
              $F_{${alpha}(${dfb},${dfw})}=${crit}$<br>
              ${decison}</p> 
              ${conclusion}`
return summary}

const table=`
            <div class='eachWork'>
            <table style="border-collapse:collapse;
                        margin-left:-10px;"
                           border=2>
           <tr>
        <th class="styleTh">Sources Of Variation</th>
        <th class="styleTh">SS</th>
        <th class="styleTh">df</th>
        <th class="styleTh">MSS=SS/df</th>
        <th class="styleTh">F</th>
       </tr>
        <tr>
            <td><b>Btw Rows</b></td>
            <td>${SSBr}</td>
            <td>${dfbr}</td>
            <td>${MSBr}</td>
            <td>${Frow}</td>
           </tr>

           <tr>
            <td><b>Btw Cols</b></td>
            <td>${SSBc}</td>
            <td>${dfbc}</td>
            <td>${MSBc}</td>
            <td>${Fcol}</td>
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
  ${decision(Fcritrow,Frow,dfbr,dfw,alpha,'Rows')}
  ${decision(Fcritcol,Fcol,dfbc,dfw,alpha,'Columns')}
  <button class="details" onclick="ShowDetails()">Show full details</button>
  </div>
  `
document.getElementById('summary').innerHTML=table
}



