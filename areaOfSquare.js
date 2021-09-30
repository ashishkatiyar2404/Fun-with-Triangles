const side = document.querySelector(".sidesofsquare");
const calculateBtn = document.querySelector("#check");
const outPut = document.querySelector("#output");
calculateBtn.addEventListener("click",mainFunction)

function mainFunction(){
    console.log("working");
    if (side.value !==""){
        const sid=Number(side.value);
        const areaOfsquare = calculateAreaFunction(sid);
        //console.log(areaOfsquare);
        outPut.innerText="The area of Square of given length is : "+areaOfsquare+" unit²"
    }else{
        //console.log("Enter all the values")
        outPut.innerText="Enter all the values";
    }
}
function calculateAreaFunction(side){
    let area = side**2
    return area;
}