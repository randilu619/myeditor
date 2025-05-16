function format(command) {
  document.execCommand(command, false, null);
}

function changeColor(color) {
  document.execCommand('foreColor', false, color);
}

function setFontSize(size) {
  document.execCommand("fontSize", false, size);
}

function setFontFamily(family) {
  document.execCommand("fontName", false, family);
}