function sendRating() {
	var ratingval = "";
	var ratingstr = "No rating selected";
	var topicUrl = location.href;
	var x = document.getElementsByTagName("meta");
	var txt = "";
	for (var i = 0; i < ratings.group1.length; i++) {
		if (ratings.group1[i].checked) {
			ratingval = ratings.group1[i].value;
		}
	}
	if (ratingval != "") ratingstr = "Was this helpful? " + ratingval;
	ratingstr += ". \r\n\r\n\Here are my additional comments:";
	ratingstr += ("\r\n\r\n\The URL of this page is: " + window.location.href)
 
	for (var j = 0;j < x.length;j++) {
		if (x[j].name == "objectid") txt = ", topic " + x[j].content;
	}
	slashloc = topicUrl.lastIndexOf("/");
	if (slashloc != -1) {
		part1 = topicUrl.substring(0, slashloc);
		part2 = topicUrl.substring(slashloc + 1, topicUrl.length);
		slashlocb = part1.lastIndexOf("/");
		if (slashlocb != -1) {
			part1 = part1.substring(slashlocb + 1, part1.length);    
			qloc = part2.indexOf("?");
			if (qloc != -1) {
				part2 = part2.substring(0, qloc); 
			}
			top.location.href = "mailto:techpubs@erwin.com?subject=Comment about erwin Mart Server v12 topic '" + document.title + "' in '" + part1 + "'&body=" + escape(ratingstr);
		}
	}
}