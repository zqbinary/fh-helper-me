		function getComment() {
        javaCode = document.querySelector("#input").value;
			let comments = javaCode.match(/[\s]*?\/\*[\s\S]*?\*\/|[\s]*?\/\/.*/g);
			if (!comments || !comments.length) {
				console.log('no comments')
				return
			}
        document.getElementById("demo").innerHTML=""
			for (let item of comments) {
				document.getElementById("demo").innerHTML += '<pre>' + item + '</pre>';
			}

		}
		function onEnter() {
			let key = window.event.keyCode;
			if (key === 13) {
				getComment()
			}

		}

document.querySelector("#input").onkeypress=onEnter

document.querySelector("#btn").onclick=getComment
