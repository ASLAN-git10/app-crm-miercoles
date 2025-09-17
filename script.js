let camposForm = document.querySelectorAll(".formulario__entrada");
camposForm.forEach(function (camposForm) {
    camposForm.addEventListener("keyup", function () {
        console.log("Presionando una tecla...")
    })
})
