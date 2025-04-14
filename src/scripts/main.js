const colorNavItens = document.querySelectorAll(".colornav_list-item");
const imageIds = ["imageSide", "imageMagsafe", "imageTop"];
const imageType = ["side", "magsafe", "top"];

colorNavItens.forEach(item => {
    item.addEventListener("click", () => {
        const color = item.getAttribute("data-color");
        imageIds.forEach((id, index) => {
            const imageElement = document.getElementById(id);

            if(imageElement){
                imageElement.src = `./src/images/colors/design_${imageType[index]}_${color}.jpg`;
            }
        });

        colorNavItens.forEach(navItem => navItem.classList.remove("active"));

        item.classList.add("active");
    })
})