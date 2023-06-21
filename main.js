class Shape {
  constructor(options) {
    this.element = document.createElement(options.elementType);
    this.element.style.backgroundColor = options.backgroundColor;
    this.wrapper = document.querySelector(`.${options.holder}`);
    this.wrapper.append(this.element);
  }
  hide() {
    this.element.style.display = "none";
  }
}

class square extends Shape {
  constructor(options) {
    super(options);
    this.element.style.border = "1px solid black";
    this.element.style.height = options.size + "px";
    this.element.style.width = options.size + "px";
  }
}

class rounded extends Shape {
  constructor(options) {
    super(options);

    this.element.style.border = "1px solid black";
    this.element.style.borderRadius = "50%";
    this.element.style.height = options.size + "px";
    this.element.style.width = options.size + "px";
  }
}

class triangle extends Shape {
  constructor(options) {
    super(options);
    this.element.style.borderTop = options.size + "px solid transparent";
    this.element.style.borderLeft = options.size + "px solid transparent";
    this.element.style.borderRight = options.size + "px solid transparent";
    this.element.style.borderBottom =
      options.size + `px solid ${inputColor.value}`;
    this.element.style.height = 0 + "px";
    this.element.style.width = 0 + "px";
    this.element.style.display = "inline-block";
  }
}

let form = document.querySelector(".form");
let inputColor = document.querySelector(".inputColor");
let inputSize = document.querySelector(".inputSize");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var sel = document.getElementById("select").selectedIndex;
  var options = document.getElementById("select").options;

  if (options[sel].text === "Square") {
    var createElement = new square({
      elementType: "div",
      backgroundColor: inputColor.value,
      holder: "wrapper",
      size: inputSize.value,
    });
  } else if (options[sel].text === "Triangle") {
    var createElement = new triangle({
      elementType: "div",
      borderColor: inputColor.value,
      holder: "wrapper",
      size: inputSize.value,
    });
  } else {
    var createElement = new rounded({
      elementType: "div",
      backgroundColor: inputColor.value,
      holder: "wrapper",
      size: inputSize.value,
    });
  }
  createElement.element.addEventListener("click", () => {
    createElement.hide();
  });
  form.reset();
});
