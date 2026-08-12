var liElements = document.getElementsByTagName("li")

for (var i = 0; i < liElements.length; i++) {

    liElements[i].onclick = function () {

        for (var j = 0; j < liElements.length; j++) {
            liElements[j].classList.remove("color")
        }

        this.classList.add("color")
    }
}