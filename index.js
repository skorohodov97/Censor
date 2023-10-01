function censor() {
		let matrix = [];
		return function(before, after = 0) {
			if(after == 0){
				for (let mat of matrix) {
					before = before.replace(new RegExp(mat[0], "ig"), mat[1]);
				}
				return before;
			}
			else
				matrix.push([before, after]);
	  };
	}
const changeScene = censor();
changeScene('PHP','JS');
changeScene('backend', 'frontend');
console.log(changeScene('PHP is the most popular programming language for backend web-development'));