AFRAME.registerComponent('change-site', {
    schema: {
        img: {type: 'string'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        el.addEventListener("mouseenter", function() {
            var parentEntity = el.parentNode;
            var grandParentEntity = parentEntity.parentNode;

            var thisAPlane = parentEntity.querySelector("a-plane");
            thisAPlane.classList.remove("clickable");

            var allAPlane = grandParentEntity.querySelectorAll("a-plane");
            Object.keys(allAPlane).forEach(function(key) {
                if (allAPlane[key] != thisAPlane){
                    allAPlane[key].classList.add("clickable");
                }
            });

            var allBox = grandParentEntity.querySelectorAll("a.box");
            Object.keys(allBox).forEach(function (key) {
                allBox[key].setAttribute("visible", "false");
            });

            var parentEntityABox = parentEntity.querySelector("a-box");
            parentEntityABox.setAttribute("visible", "true");

            var allAText = grandParentEntity.querySelectorAll("a-text");
            Object.keys(allAText).forEach(function (key){
                allAText[key].setAttribute("color", "gray");
            });

            var aText = thisAPlane.querySelector()

            var mySky = document.querySelector("#my-sky");
            mySky.setAttribute("src", data.img);
        });
    }
});