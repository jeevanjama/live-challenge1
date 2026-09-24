const boxes = document.querySelectorAll(
    ".checklist input"
);

const message = document.getElementById("message");

boxes.forEach(function(box) {

    box.addEventListener("change", function() {

        let completed = 0;

        boxes.forEach(function(item) {

            if (item.checked) {
                completed++;
            }

        });

        if (completed === boxes.length) {

            message.innerHTML =
                "🎉 Amazing!<br>All habits completed!";

        } else {

            message.innerHTML =
                completed +
                " / " +
                boxes.length +
                "<br>habits completed";

        }

    });

});


document.getElementById("startButton")
.addEventListener("click", function() {

    alert("🌱 Your healthy journey starts today!");

});
