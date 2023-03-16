function generateQRCode() {
    var api = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var img = document.createElement("img");
    var text = document.getElementById("text").value;
    var size = document.getElementById("size").value;
    var downloadBtn = document.getElementById("download-btn");

    if (text !== "" && size == "100") {
        img.src = api + "100x100" + "&chl=" + text;
    } else if (text !== "" && size == "150") {
        img.src = api + "150x150" + "&chl=" + text;
    } else if (text !== "" && size == "200") {
        img.src = api + "200x200" + "&chl=" + text;
    } else if (text !== "" && size == "300") {
        img.src = api + "300x300" + "&chl=" + text;
    } else {
        alert("Please Enter Desired Text For QR Code");
        return;
    }

    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
    downloadBtn.style.display = "inline-block";
    downloadBtn.onclick = function () {
        var newTab = window.open("download.html");
        newTab.onload = function () {
            var imgTag = newTab.document.createElement("img");
            imgTag.src = img.src;
            imgTag.style.display = "block";
            imgTag.style.margin = "auto";
            newTab.document.body.appendChild(imgTag);
        };
    };
}
