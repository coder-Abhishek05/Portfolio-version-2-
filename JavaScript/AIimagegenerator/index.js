const API_KEY="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";
const submitIcon=document.querySelector(".enter");
const inputElement=document.querySelector("input");
const imageSection=document.querySelector(".images-section");

var flag=0;
getImages= async ()=>{
	if(flag%2==0){
		const options={
			method:"POST",
			headers:{
				"Authorization":`Bearer ${API_KEY}`,
				"Content-Type":"application/JSON"
			},
			body:JSON.stringify({
				prompt:inputElement.value,
				n:2,
				size:"1024x1024"
			})
		}
		try{
			const response=await fetch("https://api.openai.com/v1/images/generations",options)
			const data=await response.json()
			console.log(data);
			data?.data.forEach(imageObject=>{			
				const imageContainer=document.createElement("div");
				imageContainer.classList.add("image-container");
				const imageElement=document.createElement("img");
				imageElement.setAttribute("src",imageObject.url);
				imageContainer.append(imageElement)
				imageSection.append(imageContainer);
			})
		}
	
		catch (error){
			console.log(error);
		}
		
	}
	else{
		location.reload();
	}
	flag++;
	
}

submitIcon.addEventListener("click",getImages)
