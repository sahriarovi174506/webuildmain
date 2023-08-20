function SearchBar() {
	document.querySelector(".search_box").classList.toggle("Search_toggle");
	if (document.querySelector(".navbar_Two .search_box.Search_toggle") != null) {
		document
			.querySelector(".navbar_Two .search_box")
			.classList.remove("Search_toggle");
	}
}

function SearchBarTwo() {
	document
		.querySelector(".navbar_Two .search_box")
		.classList.toggle("Search_toggle");
	if (document.querySelector(".search_box.Search_toggle") != null) {
		document.querySelector(".search_box").classList.remove("Search_toggle");
	}
}
window.onscroll = function () {
	scrollFunction();
	scrollTohide();
};
window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.querySelector(".navbar_Two").classList.add("NavTwoShown");
	} else {
		document.querySelector(".navbar_Two").classList.remove("NavTwoShown");
	}
}
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};
const scrolltopBtn = document.querySelector(".scrolltop");

function scrollTohide() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		scrolltopBtn.style.bottom = "30px";
		scrolltopBtn.style.transition = "0.3s";
		scrolltopBtn.style.opacity = "1";
	} else {
		scrolltopBtn.style.bottom = "-30px";
		scrolltopBtn.style.transition = "0.3s";
		scrolltopBtn.style.opacity = "0";
	}
}
// hamburger
const mobNav = document.querySelector(".navbar_One");
const hidemenu = document.querySelector(".hidemenu");

function hamburgerMenu() {
	mobNav.classList.toggle("mobile_menu");
	if (hidemenu.classList.contains("isVisible")) {
		hidemenu.classList.remove("isVisible");
	}
	hidemenu.classList.add("isVisible");
}

function hamburgerMenuTwo() {
	mobNav.classList.toggle("mobile_menu");
	if (hidemenu.classList.contains("isVisible")) {
		hidemenu.classList.remove("isVisible");
	}
	hidemenu.classList.add("isVisible");
}

function hideMobileNav() {
	if (mobNav.classList.contains("mobile_menu")) {
		mobNav.classList.remove("mobile_menu");
		hidemenu.classList.remove("isVisible");
	}
}

// Progressbar_area Waypoints
const Progressbar_area = document.getElementById("Progressbar_area");
window.addEventListener("scroll", function () {
	//	alert("hello");
	const Scroll = window.scrollY;
	const secHeight = Progressbar_area.offsetTop - 350;
	if (Scroll >= secHeight) {
		Progressbar_area.classList.add("progressAnimate");
	}
});
