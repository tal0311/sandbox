var model = {
  lines: [
    {
      txt: "",
      x: 0,
      y: 0,
      textAlign: "center",
      color: "#1a73e8",
      font: "ariel"
    }
  ]
};

function getTextForDisplay() {
  return model.txt;
}

function setTxt(value) {
  model.lines[0].txt = value;
  console.log("value:", model.lines[0].txt);
}

function getEmptyLine(text, x, y, textAlign, color, font) {
  return {
    text,
    x,
    y,
    textAlign,
    color,
    font
  };
}

export const canvasService = {
  setTxt,
  model
};
