const renderPost=async ()=>{
	let url="https://maxwizardth.github.io/youngScientist/Pages/chisquare/db.json"
	const res = await fetch(url)
	const posts= await res.json()
	console.log(posts)
}
window.addEventListener("DOMContentLoaded",()=>renderPost())


const createPost=async(e)=>{
	form= document.getElementById('account')
	const doc =	
		{
		"name":`${form.user.value}`,
		"grade":`${form.password.value}`,
		"marks":{
			"maths":80,
			"physics":50,
			"chemistry":35
		}
		 }
	
            
		
await fetch("https://maxwizardth.github.io/youngScientist/Pages/chisquare/db.json/students",{
	        method:"POST",
	        body:JSON.stringify(doc),
	        headers:{"content-Type":"application/json"}})
		}
	