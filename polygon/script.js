var origin = {"x":0,"y":0};
var arr = [
	{"x": -86.84,"y": 95.78},
	{"x": 0.85,"y": -39.16},
	{"x": -85.56,"y": -42.77},
	{"x": -81.21,"y": 45.58},
	{"x": 12.18,"y": 81.73},
	{"x": -82.24,"y": 91.50},
	{"x": -25.65,"y": -88.06},
	{"x": -91.26,"y": -20.36},
	{"x": -0.30,"y": -67.07},
	{"x": 77.36,"y": 35.93},
	{"x": 99.32,"y": -34.92},
	{"x": -15.66,"y": -98.96},
	{"x": 6.26,"y": 8.33},
	{"x": 12.56,"y": -29.20},
	{"x": -43.33,"y": 82.91},
	{"x": -41.28,"y": 13.39},
	{"x": -59.38,"y": 92.00},
	{"x": 37.69,"y": -8.98},
	{"x": -44.58,"y": 43.89},
	{"x": 18.04,"y": -33.56}
];
function isInPolygon(origin,arr) {
	const isEqual = (n1,n2) => (Math.abs(n1 - n2) < 1e-10);
	const quadrant = (p) => {
		var ox = origin['x'],oy = origin['y'];
		var px = p['x'],py = p['y'];
		if(py >= oy && px >= ox)	return 1;
		if(py >= oy)				return 2;
		if(px < ox)					return 3;
		return 4;
	};
	const isPositive = (x,y) => (x[0]*y[1] + x[1]*y[2] + x[2]*y[0] - x[0]*y[2] - x[2]*y[1] - x[1]*y[0] >= 0.0);
	arr.sort((p1,p2) => {
		var q1 = quadrant(p1),q2 = quadrant(p2);
		if(q1 != q2)	return q1 - q2;
		var x = origin['x'],x1 = p1['x'],x2 = p2['x'];
		var y = origin['y'],y1 = p1['y'],y2 = p2['y'];
		var t1 = (y1 - y) / (x1 - x),t2 = (y2 - y) / (x2 - x);
		if(!isNaN(t1) && !isNaN(t2) && t1 != Infinity && t2 != Infinity)	return t1 - t2;
		if(t1 == Infinity)	return -1;
		return 1;
	});
	var sign = isPositive([origin['x'],arr[arr.length - 1]['x'],arr[0]['x']],[origin['y'],arr[arr.length - 1]['y'],arr[0]['y']]);
	for(var i = 1;i < arr.length;i++) {
		if(sign != isPositive([origin['x'],arr[i-1]['x'],arr[i]['x']],[origin['y'],arr[i-1]['y'],arr[i]['y']]))
			return false;
	}
	return true;
}
console.log(isInPolygon(origin,arr));