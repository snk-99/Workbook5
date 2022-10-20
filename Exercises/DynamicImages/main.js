let imageFiles = [
    { path: "https://via.placeholder.com/250/dumbell?lock=1", name: "Dumbells" },
    { path: "https://via.placeholder.com/250/barbell?lock=2", name: "Barbells" },
    { path: "https://via.placeholder.com/250/machine?lock=3", name: "Machines" },
];



function loadimagesList() {
    let imagesList = document.getElementById('imagesList');

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

    const imagesDiv = document.querySelector("#imagesDiv");
    imagesDiv.appendChild(img);


}

window.onload = () => {
    loadimagesList();
    let addBtn = document.querySelector("#addBtn");
    addBtn.onclick = addImage;
}
