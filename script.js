var ScaleWindow = {
	trebleSvgWindow: document.getElementById('trebleSvgWindow'),
	trebleElement: document.getElementById('treble'),
	bassSvgWindow: document.getElementById('bassSvgWindow'),
	bassElement: document.getElementById('bass'),
	basePadding: 196,
	trebleSvgWidth: trebleSvgWindow.offsetWidth,
	trebleSvgHeight: trebleSvgWindow.offsetHeight,
	bassSvgWidth: bassSvgWindow.offsetWidth,
	bassSvgHeight: bassSvgWindow.offsetHeight,
	scale: null,

	scaleElements: function () {
		ScaleWindow.treble()
		ScaleWindow.bass()
	},

	treble: function () {
		var getAttribute = ScaleWindow.trebleElement.getAttribute('transform');
			sanitise = getAttribute.replace('scale(', '');
			ScaleWindow.scale = sanitise.replace(')', '');
		ScaleWindow.trebleSvgWindow.style.height = ScaleWindow.trebleSvgHeight * ScaleWindow.scale;
		ScaleWindow.trebleSvgWindow.style.width = ScaleWindow.trebleSvgWidth * ScaleWindow.scale;
	},

	bass: function () {
		var padding = ScaleWindow.basePadding * ScaleWindow.scale;
		ScaleWindow.bassSvgWindow.style.height = ScaleWindow.bassSvgHeight * ScaleWindow.scale;
		ScaleWindow.bassSvgWindow.style.width = ScaleWindow.bassSvgWidth * ScaleWindow.scale;
		ScaleWindow.bassElement.setAttribute('transform', "scale(" + ScaleWindow.scale + ")");

		ScaleWindow.bassSvgWindow.style.padding = padding + " 0 0 0";
	}
}

window.addEventListener('load', function loaded() {
        ScaleWindow.scaleElements();
    }, false);

