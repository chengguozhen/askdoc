function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else {
		obj.attachEvent('on' + type, fn);
	}
}
function autoSize() {
	var win_W = document.getElementById('container').clientWidth;
	var font = Math.round(win_W / 16);
	var HTML = document.getElementById('html');
	HTML.style.fontSize = font + 'px';
}
addEvent(window, 'load', autoSize);
addEvent(window, 'resize', autoSize);