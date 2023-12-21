let accordionButtons = document.getElementsByClassName("accordion-btn")
let descr = document.getElementsByClassName("description")

for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function () {
        let description = this.nextElementSibling
        let plusIcon = this.querySelector(".plus-icon")
        let minusIcon = this.querySelector(".minus-icon")
        if (description.style.display === "block") {
            description.style.display = "none"
            plusIcon.style.display = "block"
            minusIcon.style.display = "none"
        } else {
            description.style.display = "block"
            plusIcon.style.display = "none"
            minusIcon.style.display = "block"
        }
    })
}

