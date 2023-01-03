let galleryImage = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImage) {
    galleryImage.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFulImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFulImgUrl.split("/img/thumb/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");


            newImg.onload = function() {
                let imgWidth = this.width;
                let calImgToEdge = ((windowWidth - imgWidth) / 2) - 80;



                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg()");
                newNextBtn.style.cssText = "right:" + calImgToEdge + "px;";

                let newPreBtn = document.createElement("a");
                let btnPreText = document.createTextNode("Prev");
                newPreBtn.appendChild(btnPreText);
                container.appendChild(newPreBtn);
                newPreBtn.setAttribute("class", "img-btn-prev");
                newPreBtn.setAttribute("onclick", "changeImg()");
                newPreBtn.style.cssText = "left:" + calImgToEdge + "px;";
            }


        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector(".img-btn-next").remove();
}