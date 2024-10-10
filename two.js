let kod = ''


const main = document.querySelector('#main')
const mainn = document.querySelector('#mainn')

function show(filteredMarks){
    let kod1 = ''
    main.innerHTML=''
    mainn.innerHTML=''
    let a = []
    a = filteredMarks ? filteredMarks : data
    a.map((element) => {
        kod1 += `<div id="a${element.id}" class="card">
            <div class="card-image">
                <img src="${element.images}" />
            </div>
            <div class="all-card">
                <div class="price"><span class="card-qiymet">${element.price}</span> <span class="card-val">${element.currency}</span></div>
                <div class="name"><span class="card-brand">${element.brand}</span>  <span class="card-model">${element.model}</span></div>
                <div class="info"><span class="card-year">${element.year}</span>, <span class="card-engine">${element.engine}</span>L, <span class="card-yurus">${element.odometer}</span> <span class="card-mil">${element.odometerUnit}</span></div>
                <div class="konum-2">
                    <span class="konum">${element.city}</span><span class="card-date">, bugün 18:33</span>
                </div>
            </div>
        </div>`
    })
    main.innerHTML = kod1
    mainn.innerHTML = kod1
}
show()



let kod2 = ''
const sc1 = document.querySelector('#sc1')
for (let i = 2024; i >= 1904; i--) {
    kod2 += `<option value="${i}">${i}</option>`
}
sc1.innerHTML += kod2


let kod3 = ''
const sc2 = document.querySelector('#sc2')
for (let i = 2024; i >= 1904; i--) {
    kod3 += `<option value="${i}">${i}</option>`
}
sc2.innerHTML += kod3


const model = [...new Set(data.map((item) => item.brand))]
const marka = document.getElementById('marka')
model.map((item) => marka.innerHTML += `<option value="${item}">${item}</option>`)


const city = [...new Set(data.map((item) => item.city))]
const seher = document.getElementById('seher')
city.map((item) => seher.innerHTML += `<option value="${item}">${item}</option>`)



const banType = [...new Set(data.map((item) => item.banType))]
const banner2 = document.getElementById('banner2')
banType.map((item) => banner2.innerHTML += `<option value="${item}">${item}</option>`)




const ac = document.querySelector("#ac")

function hjk() {
    ac.innerHTML += `
    <div class="arxa">
    <h3 onclick="bagla()" style="text-align: center; padding: 10px; ">Marka</h3>
    <div class="inpdiv">
        <input type="text" class="inpa" placeholder="Meselen, Mercedes">
    </div>

    <div style="padding-top: 10px;" class="pop">Populyar</div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>Mercedes</p><i class="fa-regular fa-square"></i></div>
    </div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>LADA(VAZ)</p>
        <input class="rightt" type="checkbox"></div>
    </div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>Hyundai</p>
        <input class="rightt" type="checkbox"></div>
    </div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>Kia</p>
        <input class="rightt" type="checkbox"></div>
    </div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>Toyota</p>
        <input class="rightt" type="checkbox"></div>
    </div>
    <div class="marka">
        <div class="flex"><img src="" alt=""><p>BMW</p>
        <input class="rightt" type="checkbox"></div>
    </div>

</div>
    `
}

function bagla(){
    ac.innerHTML = ''
}



const butun = document.querySelector('#butun')
const yeni = document.querySelector('#yeni')
const ikinciel = document.querySelector('#ikinciel')

function hms(){
    butun.style.background = "#ca1016"
    butun.style.color = "#fff"
    yeni.style.background = "#fff"
    yeni.style.color = "#8d94ad"
    ikinciel.style.background = "#fff"
    ikinciel.style.color = "#8d94ad"
}

function yn(){
    yeni.style.background = "#ca1016"
    yeni.style.color = "#fff"
    butun.style.background = "#fff"
    butun.style.color = "#8d94ad"
    ikinciel.style.background = "#fff"
    ikinciel.style.color = "#8d94ad"
}

function srlms(){
    ikinciel.style.background = "#ca1016"
    ikinciel.style.color = "#fff"
    yeni.style.background = "#fff"
    yeni.style.color = "#8d94ad"
    butun.style.background ="#fff"
    butun.style.color ="#8d94ad"
}

function krdt(){
    document.querySelector('#btn3').classList.toggle('clear')
}

function brtr(){
    document.querySelector('#btn4').classList.toggle('clear')
}
let filteredData = []
function getMark(mark){
console.log(mark.value);
 filteredData= data.filter(item=> item.brand.includes(mark.value))
console.log(filteredData);
chooseModel(filteredData)

}


// const modell = [...new Set(data.map((item) => item.model))]
function chooseModel(modell){
    const modelll = document.getElementById('model2')
    modelll.innerHTML ='<option value="">Model</option>'
    console.log(modell);
modell.map((item) => modelll.innerHTML += `<option value="${item.model}">${item.model}</option>`)
console.log(modell);
}

function showFilteredData(){
    console.log('salam');
    show(filteredData)
}














// const dataFilter = [
//     {
//         marka: "Toyota",
//         model: ["Camry", "Corolla", "RAV4", "Prius V", "Tundra"],
//     },
//     {
//         marka: "LADA (VAZ)",
//         model: ["2106", "2107", "2108", "2109", "Priora"]
//     },
//     {
//         marka: "BMW",
//         model: ["X5", "X6", "M3", "M4", "X7"]
//     },
//     {
//         marka: "Lexus",
//         model: [" LX 600", "LX 500d", "IS 300", "NX 300", "ES 250"]
//     },
//     {
//         marka: "Mercedes",
//         model: [" S 600", "G 63 AMG", "CLA 250", "GLS 450", "S 350 d", "V 220"]
//     }
// ]

// const markaTextInnerHTML = document.querySelector(".markaText");
// const search1 = document.querySelector("#search1");

// function showMarka() {
//     markaTextInnerHTML.innerHTML = `<ul><li class="sifirla"><i class="fa-solid fa-xmark"></i> Sıfırla</li></ul>`
//     dataFilter.filter(filter => filter.marka.toLowerCase().includes(search1.value.toLowerCase())).map(item => {
//         markaTextInnerHTML.innerHTML += `
//         <ul>
//             <li>${item.marka}</li>
//         </ul>`
//     })
//     searchClick()
// }
// showMarka()

// search1.oninput = function () {
//     markaTextInnerHTML.innerHTML = ""
//     showMarka()
// }


// function searchClick() {
//     const markaLi = document.querySelectorAll(".markaText li")
//     markaLi.forEach(item => {
//         item.onclick = function () {
//             search1.value = item.innerHTML
//             markaText.classList.toggle("none")
//             modelShow()
//             modelDisable()
//             searchModel.value = ""
//             console.log(models);
//             models = []
//         }
//     })

// }


// const sifirlaMarka = document.querySelector(".sifirla");

// sifirlaMarka.onclick = function () {
//     search1.value = " "

//     markaText.classList.toggle("none")
//     modelDisable()

//     modelTextInnerHTML.innerHTML = `  <ul>
//     <li class="sifirla"><i class="fa-solid fa-xmark"></i> Sıfırla</li>
// </ul>`
//     searchModel.setAttribute("disabled", "")

// }



// const modelTextInnerHTML = document.querySelector(".modelText");


// function modelShow() {
//     modelTextInnerHTML.innerHTML = `  <ul>
//         <li class="sifirlaModel"><i class="fa-solid fa-xmark"></i> Sıfırla</li>
//     </ul>`
//     dataFilter.filter(item => item.marka == search1.value)[0]?.model.map(item => modelTextInnerHTML.firstElementChild.innerHTML += `
//     <label class="modelCheckbox">
//     <li class="models" >
//     ${item}
//     </li>
//     <input id="disableNone" type="checkbox"  />
//     </label>
//     `)


//     const sifirlaModel = document.querySelector(".sifirlaModel")
//     const nullEl = document.querySelectorAll("#disableNone")
//     sifirlaModel.onclick = function () {
//         searchModel.value = "";
//         modelText.classList.toggle("none")
//         nullEl.forEach(item => {
//             if (item.checked == true) {
//                 item.checked = false
//             }
//         })
//         models = [];

//     }

//     const modelLi = document.querySelectorAll(".models");
//     modelLi.forEach(item => {
//         item.onclick = function () {
//             let sx = item.innerHTML.trim()
//             if (!models.includes(sx)) {
//                 models.push(sx)
//             }
//             else {
//                 models.splice(models.indexOf(sx), 1)
//             }
//             searchModel.value = models;
//         }
//     })
// }
// modelShow()

// function modelDisable() {
//     if (modelTextInnerHTML.firstElementChild.children.length > 1) {
//         searchModel.removeAttribute("disabled")
//     } else {
//         searchModel.setAttribute("disabled", "")
//     }
// }
// modelDisable()


// function elanlar() {

//     const elanlariGoster = document.querySelector("#elanlariGoster")
//     elanlariGoster.onclick = function () {
//         likePr()
//         show()

//         // modelText.classList.toggle("none")
//     }
// }
// elanlar()



// // const label = document.querySelectorAll(".labelRadio");
// // const radioInput = document.querySelector("#name");
// // const divHamisi = document.querySelectorAll(".hamisi");

// // label.forEach(lab => { console.log(lab);
// //     lab.onclick  = function () {
// //         divHamisi.classList.toggle("label")
// //     }
// // })

// const labels = document.querySelectorAll(".labelRadio");
// const radioInput = document.querySelector("#name");

// labels.forEach(label => {
//     const divHamisi = label.querySelector(".hamisi");

//     label.onclick = function () {
//         // İlk önce tüm ".hamisi" div'lerinden "label" sınıfını kaldırın
//         document.querySelectorAll(".hamisi").forEach(div => {
//             div.classList.remove("label");
//         });

//         // Sadece tıklanan etiketin altındaki ".hamisi" div'ine "label" sınıfını ekleyin
//         divHamisi.classList.add("label");
//     };
// });













// function show() {
//     main.innerHTML = ""
//     data
//         .filter((item) =>item.category.includes(category.value) && item.name.toLocaleUpperCase().includes(inp.value.toLocaleUpperCase()))	
//         .map((item) => main.innerHTML += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                                 <a href="#">
//                                     <img class="rounded-t-lg" src="${item.img}" alt="" />
//                                 </a>
//                                 <div class="p-5">
//                                     <a href="#">
//                                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
//                                     </a>
//                                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.composition}</p>
//                                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.category}</p>
//                                     <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                         ${typeof item.price == "object" ? `<select onchange="getZaid()">
//                                             ${Object.keys(item.price).map((item) => {
//             return ' <option >${item}</option>'
//         })}
//                                             </select>
//                                         ` : item.price} AZN
//                                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>`

//         )
// }
// show()

