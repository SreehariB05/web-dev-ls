document.writeln("sadhanam kayyilundo?");
console.log("kambilipputhapp");
function rectArea(){
	console.log(document.getElementById("length").value);
	console.log(document.getElementById("breadth").value);
    const a=document.getElementById("length").value;
	const b=document.getElementById("breadth").value;
	let c="";
	c=parseInt(a)*parseInt(b);
	console.log(c);
	document.getElementById("area").innerText=`Area = ${c}`;
}