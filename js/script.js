$(function () {
	"use strict";

	// Dark mode start
	let darkmode = document.querySelector(".darkmode");
	let html = document.querySelector("html");
	let light_icon = document.querySelector(".light_icon");
	let dark_icon = document.querySelector(".dark_icon");
	dark_icon.style.display = "none";

	let number = 0;

	function handleDarkMode() {
		html.classList.toggle("dark");

		if (number === 0) {
			light_icon.style.display = "none";
			dark_icon.style.display = "block";
			number = 1;
		} else {
			light_icon.style.display = "block";
			dark_icon.style.display = "none";
			number = 0;
		}
	}

	darkmode.addEventListener("click", handleDarkMode);
	// Dark mode end ===================

	// Menu start
	const menu = document.querySelectorAll(".menu li a");
	const menuArr = Array.from(menu);
	console.log(menuArr.length);

	const tab_itemArray = Array.from(document.querySelectorAll(".tab_item"));
	const sideMenusArray = Array.from(
		document.querySelectorAll(".side_menu ul li a")
	);
	const Home_info = document.querySelector(".Home_info");
	const main_section = document.querySelector(".main_section");

	// Tab item active function
	const tabItemActive = (index) => {
		tab_itemArray.map((item, i) => {
			item.classList.add("hidden");
		});
		tab_itemArray[index].classList.remove("hidden");
	};

	// Big screen menu
	menuArr.map((menu, index) => {
		menu.addEventListener("click", (e) => {
			menuArr.map((item) => {
				item.classList.remove("active");
			});
			sideMenusArray.map((item) => {
				item.classList.remove("active");
			});
			e.currentTarget.classList.add("active");
			sideMenusArray[index].classList.add("active");
			tabItemActive(index);
		});
	});

	// Hide and show on Screen width
	function handleAboutSection() {
		Home_info.classList.add("hidden");
		main_section.classList.remove("mt-40");
	}

	window.addEventListener("resize", function () {
		let screenWidth = screen.width;
		if (screenWidth > 1024) {
			$(".side_menu").css("display", "none");
		}
		if (screenWidth > 1023) {
			Home_info.classList.remove("hidden");
			main_section.classList.add("mt-40");
		}
		if (screenWidth < 1023 && sideMenusArray[1].classList.contains("active")) {
			handleAboutSection();
		}
		if (screenWidth < 1023 && sideMenusArray[2].classList.contains("active")) {
			handleAboutSection();
		}
		if (screenWidth < 1023 && sideMenusArray[3].classList.contains("active")) {
			handleAboutSection();
		}
		if (screenWidth < 1023 && sideMenusArray[4].classList.contains("active")) {
			handleAboutSection();
		}
	});

	// Toggle menu start
	sideMenusArray.map((menu, index) => {
		menu.addEventListener("click", (e) => {
			$(".side_menu").slideToggle(300);

			sideMenusArray.map((item) => {
				item.classList.remove("active");
			});
			menuArr.map((item) => {
				item.classList.remove("active");
			});
			e.currentTarget.classList.add("active");
			menuArr[index].classList.add("active");
			tabItemActive(index);
			if (index === 0) {
				Home_info.classList.remove("hidden");
				main_section.classList.add("mt-40");
			}
			if (index === 1) {
				Home_info.classList.add("hidden");
				main_section.classList.remove("mt-40");
			}
			if (index === 2) {
				Home_info.classList.add("hidden");
				main_section.classList.remove("mt-40");
			}
			if (index === 3) {
				Home_info.classList.add("hidden");
				main_section.classList.remove("mt-40");
			}
			if (index === 4) {
				Home_info.classList.add("hidden");
				main_section.classList.remove("mt-40");
			}

			// console.log(index);
		});
	});
	// Toggle menu end

	$(".bars").click(function (e) {
		$(".side_menu").slideToggle(300);
	});
	// Side menu end

	// Tab item start

	// Tab item end

	// Menu end ===============

	// New date
	let currentYear = new Date().getFullYear();
	document.getElementById("year").innerHTML = currentYear;

	// About Section Brand slider
	$(".brand_slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	// Student Success Gallery
	const studentImages = [
		'05 sultan .jpg', 'ADEXEL 02.jpg', 'ADEXEL 03.jpg', 'aDEXEL.jpg', 'FAREWELL.jpg',
		'success (1).jpg', 'success (2).jpg', 'success (3).jpg', 'success (4).jpg', 'success (5).jpg',
		'success (6).jpg', 'success (7).jpg', 'success (8).jpg', 'success (9).jpg', 'success (10).jpg',
		'success (11).jpg', 'success (12).jpg', 'success (13).jpg', 'success (14).jpg', 'success (15).jpg',
		'success (16).jpg', 'success (17).jpg', 'success (18).jpg', 'success (19).jpg', 'success (20).jpg',
		'success (21).jpg', 'success (22).jpg', 'success (23).jpg', 'success (24).jpg', 'success (25).jpg',
		'success (26).jpg', 'success (27).jpg', 'success (28).jpg', 'success (29).jpg', 'success (30).jpg',
		'success (31).jpg', 'success (32).jpg', 'success (33).jpg', 'success (34).jpg', 'success (35).jpg',
		'success (36).jpg', 'success (37).jpg', 'success (38).jpg', 'success (39).jpg', 'Sultan 01.jpg',
		'sultan 02.jpg', 'sultan 03 .jpg', 'sultan 04.jpg'
	];

	const imagesPerPage = 6;
	let currentPage = 1;
	let currentImageIndex = 0;

	const galleryContainer = document.getElementById('student-gallery');
	const prevPageBtn = document.getElementById('prev-page');
	const nextPageBtn = document.getElementById('next-page');
	const pageInfo = document.getElementById('page-info');
	const prevImageBtn = document.getElementById('prev-image');
	const nextImageBtn = document.getElementById('next-image');

	function renderGallery(page) {
		const startIndex = (page - 1) * imagesPerPage;
		const endIndex = startIndex + imagesPerPage;
		const imagesToShow = studentImages.slice(startIndex, endIndex);

		galleryContainer.innerHTML = '';

		imagesToShow.forEach((image, index) => {
			const imageCard = document.createElement('div');
			imageCard.className = 'gallery-item bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:scale-105';
			imageCard.onclick = () => openGalleryModal(startIndex + index);

			imageCard.innerHTML = `
				<img src="./images/student-success/${image}" alt="Student Success ${startIndex + index + 1}"
					 class="w-full h-48 object-cover">
			`;

			galleryContainer.appendChild(imageCard);
		});

		updatePaginationButtons();
	}

	function updatePaginationButtons() {
		const totalPages = Math.ceil(studentImages.length / imagesPerPage);
		prevPageBtn.disabled = currentPage === 1;
		nextPageBtn.disabled = currentPage === totalPages;
		pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
	}

	function openGalleryModal(index) {
		currentImageIndex = index;
		const modal = document.getElementById("imageModal");
		const modalImg = document.getElementById("modalImage");
		modal.classList.add("active");
		modalImg.src = `./images/student-success/${studentImages[currentImageIndex]}`;
		document.body.style.overflow = "hidden";
	}

	function navigateImage(direction) {
		currentImageIndex += direction;
		if (currentImageIndex < 0) currentImageIndex = studentImages.length - 1;
		if (currentImageIndex >= studentImages.length) currentImageIndex = 0;

		const modalImg = document.getElementById("modalImage");
		modalImg.src = `./images/student-success/${studentImages[currentImageIndex]}`;
	}

	// Event listeners
	prevPageBtn.addEventListener('click', () => {
		if (currentPage > 1) {
			currentPage--;
			renderGallery(currentPage);
		}
	});

	nextPageBtn.addEventListener('click', () => {
		const totalPages = Math.ceil(studentImages.length / imagesPerPage);
		if (currentPage < totalPages) {
			currentPage++;
			renderGallery(currentPage);
		}
	});

	prevImageBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		navigateImage(-1);
	});

	nextImageBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		navigateImage(1);
	});

	// Keyboard navigation
	document.addEventListener('keydown', (e) => {
		if (document.getElementById('imageModal').classList.contains('active')) {
			if (e.key === 'ArrowLeft') {
				navigateImage(-1);
			} else if (e.key === 'ArrowRight') {
				navigateImage(1);
			} else if (e.key === 'Escape') {
				closeModal();
			}
		}
	});

	// Initialize gallery
	renderGallery(currentPage);
});
