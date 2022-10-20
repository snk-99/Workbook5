let imageFiles = [
    { path: "https://via.placeholder.com/250/dumbell?lock=1", name: "Dumbells" },
    { path: "https://via.placeholder.com/250/barbell?lock=2", name: "Barbells" },
    { path: "https://via.placeholder.com/250/machine?lock=3", name: "Machines" },
];

let imagesList = document.getElementById('imagesList');
let imagesDiv = document.querySelector("#imagesDiv");

function loadimagesList() {
    imageFiles.forEach((imageFile) => {
        let option = new Option(imageFile.name, imageFile.name);
        imagesList.appendChild(option)
    })
}

function addImage() {
    let selectedValue = imagesList.value;
    let imageFile = imageFiles.find((imageFile) => imageFile.name === selectedValue);

    let img = document.createElement("img");
    img.src = imageFile.path;
    img.alt = imageFile.name;

    imagesDiv.appendChild(img);
}

function clearImage() {
    // imagesDiv.innerHTML = "";
    imagesDiv.innerText = "";
}

window.onload = () => {
    loadimagesList();

    let addBtn = document.querySelector("#addBtn");
    let clearBtn = document.querySelector("#clearBtn");

    addBtn.onclick = addImage;
    clearBtn.onclick = clearImage;
}
