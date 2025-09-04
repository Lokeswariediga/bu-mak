function createButton() {
      let text = document.getElementById("btnText").value;
      let width = document.getElementById("btnWidth").value;
      let height = document.getElementById("btnHeight").value;
      let bg = document.getElementById("btnBg").value;
      let color = document.getElementById("btnColor").value;
      let radius = document.getElementById("btnRadius").value;

      let button = document.createElement("button");
      button.innerText = text || "My Button";
      button.style.width = width + "px";
      button.style.height = height + "px";
      button.style.backgroundColor = bg;
      button.style.color = color;
      button.style.borderRadius = radius + "px";
      button.style.border = "none";
      button.style.cursor = "pointer";
      button.style.fontSize = "16px";
      button.style.padding = "5px 10px";

      let preview = document.getElementById("preview");
      preview.innerHTML = "";
      preview.appendChild(button);
    }