let dataList = [
    { desc: "Home", link: "home", isActive: true },
    { desc: "Area", link: "area", isActive: false },
    { desc: "Carbonate and Noncarbonate Hardness", link: "hardness", isActive: false },
    { desc: "Chemical Feeders", link: "feeders", isActive: false },
    { desc: "Chlorination", link: "chlorination", isActive: false },
    { desc: "Coagulation/Flocculation", link: "coag", isActive: false },
    { desc: "Conversion Factors", link: "convfactors", isActive: false },
    { desc: "Corrosion Control", link: "corrosion", isActive: false },
    { desc: "Density", link: "density", isActive: false },
    { desc: "Detention Time", link: "detention", isActive: false },
    { desc: "Dosage", link: "dosage", isActive: false },
    { desc: "Filtration", link: "filtration", isActive: false },
    { desc: "Flow", link: "flow", isActive: false },
    { desc: "Flow Conversion Chart", link: "flowchart", isActive: false },
    { desc: "Fluoridation", link: "fluoridation", isActive: false },
    { desc: "Jar Testing", link: "jar", isActive: false },
    { desc: "Lime Dosage", link: "lime", isActive: false },
    { desc: "Metric Conversions", link: "metric", isActive: false },
    { desc: "Mixing Energy", link: "mix", isActive: false },
    { desc: "Pounds", link: "pounds", isActive: false },
    { desc: "Pounds/gal to mg/mL Conversions", link: "poundsgal", isActive: false },
    { desc: "Power", link: "power", isActive: false },
    { desc: "Preliminary Treatment", link: "prelim", isActive: false },
    { desc: "Pumps", link: "pumps", isActive: false },
    { desc: "Sedimentation", link: "sedimentation", isActive: false },
    { desc: "Softening", link: "soft", isActive: false },
    { desc: "Solution Preparation", link: "solprep", isActive: false },
    { desc: "Specific Gravity", link: "specgrav", isActive: false },
    { desc: "Substitution of Bleach for HTH", link: "bleach", isActive: false }, 
    { desc: "Temperature", link: "temp", isActive: false },
    { desc: "Volume", link: "volume", isActive: false },
    { desc: "Well Formulas", link: "well", isActive: false }
]

let DataObj = {
    vol: 0,
    l: 0,
    w: 0,
    radius: 0,
    circum: 0,
    temp: 0,
    rectArea: 0,
    circArea: 0
}

const sample = function() {
    dataList.forEach((obj) => console.log(obj.desc))
}

const toggleSelection = (nextActive) => {
    console.log("Select has been toggled. -- " + nextActive)
    let prevActive = ""

    // get current active
    dataList.forEach((obj) => { if(obj.isActive){ prevActive = obj.link } })

    // set prev to inactive
    let prevObj = document.getElementById(prevActive+'Btn')
    let prevDom = document.getElementById(prevActive)

    // set next to active
    let nextObj = document.getElementById(nextActive+'Btn')
    let nextDom = document.getElementById(nextActive)

    // change data obj
    dataList.forEach((obj) => {
        if(obj.link === prevActive) { obj.isActive = false }
        if(obj.link === nextActive) { obj.isActive = true }
    })
    
    // replace DOM eles
    prevObj.classList.remove("active")
    prevDom.classList.remove("show")
    prevObj.classList.add("inactive")
    prevDom.classList.add("hide")
    
    nextObj.classList.remove("inactive")
    nextDom.classList.remove("hide")
    nextObj.classList.add("active")
    nextDom.classList.add("show")
}

// on init runsetup to assign links and appropriate css
const runSetup = () => {
    let links = document.getElementById("links");
    let html = ""

    dataList.forEach((obj) => {
        if (obj.isActive) {
            html += `<button onclick="toggleSelection('${obj.link}')" class="active card" id="${obj.link}Btn" >${obj.desc}</button>`
        } else {
            html += `<button onclick="toggleSelection('${obj.link}')" class="inactive card" id="${obj.link}Btn">${obj.desc}</button>`
        }
    })

    links.innerHTML = html

}

/* 
    CONTENT FUNCTIONALITY
*/

// AREA
const computeAreaRect = () => {
    const l = document.getElementById("areaRectLen").value
    const w = document.getElementById("areaRectWidth").value
    let areaRectEle = document.getElementById("areaRectResult")

    // error check for null
    
    const area = l * w 

    areaRectEle.innerHTML = area

    DataObj.rectArea = area

    console.table(DataObj)

}

const computeAreaCirc = () => {
    const d = document.getElementById("areaCircDiam").value
    let areaCircEle = document.getElementById("areaCircResult")

    const area = 0.785 * d

    areaCircEle.innerHTML = area

    DataObj.circArea = area

    console.table(DataObj)

}


runSetup()