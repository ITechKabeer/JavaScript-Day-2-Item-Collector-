document.title = "Item Selector";
let body = document.body;
Object.assign(body.style, {
    width: "100%",
    minHeight: "100vh",
    margin: "0",
    padding: "0",
    background: "linear-gradient(to right, #1A1A1A, #000000)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxSizing: "border-box",
})

let heading = document.getElementsByTagName('h1')[0]
Object.assign(heading.style, {
    fontSize: "40px",
    color: "#E0E0E0",
    textAlign: "center",
    textShadow: "0 0 5px rgba(224, 224, 224, 0.2)",
})

let themediv = document.getElementsByClassName("themediv")[0]
themediv.style.width = "100%"
themediv.style.maxWidth = "900px"
themediv.style.margin = "30px auto 0 auto"
themediv.style.display = "flex"
themediv.style.justifyContent = "start"
themediv.style.border = "none"

let themebtn = document.getElementsByClassName("togglebtn")[0]
Object.assign(themebtn.style, {
    width: "auto",
    cursor: "pointer",
    background: "linear-gradient(90deg, #00BCD4, #03A9F4)",
    boxShadow: "rgba(0, 123, 255, 0.4)",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",  
    fontWeight: "700",  
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",  
})
themebtn.addEventListener("mouseover", function(){
    this.style.opacity = "0.8";
    this.style.transform = "scale(0.95)";
})
themebtn.addEventListener("mouseleave", function(){
    this.style.opacity = "1";
    this.style.transform = "none";
})


let table = document.getElementsByClassName("item-table")[0]
Object.assign(table.style, {
    backgroundColor: "#1E1E1E",
    width: "100%",
    maxWidth: "900px",
    margin: "30px auto",
    alignItem: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.25)",
})

let tr1 = document.getElementsByClassName("tr1")[0]
Object.assign(tr1.style, {
    background: "linear-gradient(90deg, #00BCD4, #03A9F4)",
    width: "100%",
    borderBottom: "1px solid #333333",
    textAlign: "center",
    borderRadius: "10px 10px 0 0",
})

let td = document.querySelectorAll("td")
td.forEach(elem => {
    elem.style.width = "130px",
    elem.style.textAlign = "center",
    elem.style.fontSize = "20px"
});

let input = document.querySelectorAll("input")
input.forEach(elem => {
    elem.style.width = "30px",
    elem.style.fontSize = "15px"
    elem.style.cursor = "pointer"
    elem.style.accentColor = "#03A9F4"
});

let tr = document.querySelectorAll("tr")
tr.forEach(elem => {
    elem.style.display = "flex",
    elem.style.justifyContent = "space-around",
    elem.style.color = "white",
    elem.style.padding = "15px",
    elem.style.width = "100%",
    elem.style.cursor = "pointer"
    elem.style.boxSizing = "border-box"
    elem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
});

let btn = document.getElementsByClassName("button")[0];
btn.style.width = "auto";
btn.style.padding = "10px 22px";
btn.style.fontSize = "18px";
btn.style.fontWeight = "500";
btn.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
btn.style.border = "none";
btn.style.borderRadius = "30px";
btn.style.background = "linear-gradient(90deg, #00BCD4, #03A9F4)";
btn.style.color = "white";
btn.style.margin = "15px auto";
btn.style.display = "block";
btn.style.boxShadow = "0 0 10px rgba(0, 188, 212, 0.2)";
btn.style.transtiton = "all 0.3s";
btn.style.cursor = "pointer";
btn.addEventListener("mouseover", function(){
    this.style.opacity = "0.8";
    this.style.transform = "scale(0.95)";
})
btn.addEventListener("mouseleave", function(){
    this.style.opacity = "1";
    this.style.transform = "none";
})

let selecteditem = document.getElementsByClassName("sel-item")[0];
    selecteditem.style.width = "100%";
    selecteditem.style.maxWidth = "900px";
    selecteditem.style.boxSizing = "border-box";
    selecteditem.style.display = "block";
    selecteditem.style.textAlign = "center";
    selecteditem.style.margin = "15px auto";
    selecteditem.style.padding = "15px 20px";
    selecteditem.style.background = "#333333";
    selecteditem.style.color = "#ffffff";
    selecteditem.style.fontSize = "20px";
    selecteditem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    selecteditem.style.borderRadius = "10px";
    selecteditem.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.10)";
    selecteditem.style.cursor = "pointer";
    

let footer = document.getElementsByTagName("footer")[0]
Object.assign(footer.style, {
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpaing: "1px",
    fontWeight: "500",
    padding: "15px 20px 0 20px",
    boxSizing: "border-box",
    margin: "40px 0 20px 0"
})
// Functionality
btn.addEventListener("click", () => {
   let result = "";

   tr.forEach((elem, index) => {
    if (index === 0 ) return;

    let itemadd = elem.querySelector('.item-add')
    if (itemadd && itemadd.checked){
    let itemname = elem.querySelector('.item-name').innerText;
    let drink = elem.querySelector('.drink').checked; 
    let fries = elem.querySelector('.fries').checked; 
    let dessert = elem.querySelector('.dessert').checked;
    
    let more = [];
    drink ? more.push('Cold Drink,') : null; 
    fries ? more.push('Fries') : null; 
    dessert ? more.push(
        more.length > 0 ? "and Dessert" : "Dessert"
    ) : null; 
    
    result += more.length > 0 ? `<b>${itemname}</b> with ${more.join(" ")} <br>` : `<b>${itemname}</b> <br>` 
   }
   })
   selecteditem.innerHTML = result.length > 0 ? "<strong>Your Selected Item:</strong> <br>" + result : "<strong>Your Selected Items:</strong> <br>" + result || "⚠️ Please Select any Item!"
   console.log(more.length > 0 ? itemname + " " + more.join(" ") : itemname)
})

// Theme Button
let light = false;
themebtn.addEventListener("click", function(){
    light = !light;
     if(light){
         body.style.background = "linear-gradient(to right, #E6F7FF, #FFFFFF)",
         heading.style.color = "#000000"
         table.style.background = "#FFFFFF"
         table.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.25)"
         tr.forEach(elem => {
             elem.style.color = "black"
        });
            input.forEach(elem => {
                elem.style.accentColor = "blue"
        });
        tr1.style.background = "linear-gradient(90deg, #007BFF, #0056B3)";
        tr1.style.color = "white";
        themediv.style.justifyContent = "end"
        themebtn.innerText = "🌙 Dark Mode"
        themebtn.style.background = "linear-gradient(90deg, #007BFF, #0056B3)"
        themebtn.style.color = "white"
        btn.style.background = "linear-gradient(90deg, #007BFF, #0056B3)";
        btn.style.color = "white";
        selecteditem.style.background = "linear-gradient(90deg, #cce0eeff, #dee8f4ff)";
        selecteditem.style.color = "black";
        selecteditem.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.25)";
        footer.style.color = "#222222"
    }else{
        body.style.background = "linear-gradient(to right, #1A1A1A, #000000)"
        heading.style.color = "#E0E0E0"
        table.style.background = "#1E1E1E"
        table.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.25)"
        tr.forEach(elem => {
            elem.style.color = "white"
        });
        input.forEach(elem => {
            elem.style.accentColor = "#03A9F4"
        });
        tr1.style.background = "linear-gradient(90deg, #00BCD4, #03A9F4)";
        themediv.style.justifyContent = "start"
        themebtn.innerText = "☀️ Light Theme"
        themebtn.style.background = "linear-gradient(90deg, #00BCD4, #03A9F4)"
        themebtn.style.color = "white"
        btn.style.background = "linear-gradient(90deg, #00BCD4, #03A9F4)";
        selecteditem.style.background = "#333333";
        selecteditem.style.color = "#ffffff";
        selecteditem.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.10)";
        footer.style.color = "#ffffff"
    }
})