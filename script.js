var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
				var listMembers = JSON.parse(this.responseText);

				var toOutput = '<div class = "row">';
				for (i = 0; i < listMembers.length; ++i) {
					toOutput += '<div align="center" class="col-sm-3">';
					toOutput += '<img width="200px" src="' + listMembers[i].image + '" alt="" /> <br>';
					toOutput += '<b>' + listMembers[i].name + '</b> <br>';
					toOutput += '<span>' + listMembers[i].jabatan + '</span>';
					toOutput += '</div>';
				}
				toOutput += '</div>';

				document.getElementById("teamMembers").innerHTML = toOutput;
    }
};

xmlhttp.open("GET", "json.txt", true);
xmlhttp.send();