const content = document.querySelectorAll(".content")
const item = document.querySelectorAll(".head")
console.log(item);

console.log(content);


content.forEach((val) => {

    val.setAttribute("data-hight", val.clientHeight)
    val.setAttribute("data-status", "off")
    val.style.height = 0

    item.forEach((val2, i) => {

        val2.addEventListener("click", () => {

            content.forEach((para, index) => {

                if (i != index) {
                    para.style.height = 0
                    para.setAttribute("data-status", "off")
                }

            })

            if (val2.nextElementSibling.getAttribute("data-status") == "off") {

                val2.nextElementSibling.style.height = val2.nextElementSibling.getAttribute("data-hight") + "px"
                val2.nextElementSibling.setAttribute("data-status", "on")
                val2.children[2].style.transform = "rotate(180deg)"

            } else {
                val2.nextElementSibling.style.height = 0
                val2.nextElementSibling.setAttribute("data-status", "off")
                val2.children[2].style.transform = "rotate(0deg)"
            }


        })

    })



})
