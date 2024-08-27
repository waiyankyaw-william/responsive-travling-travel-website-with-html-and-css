const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const navHeight = navbar.getBoundingClientRect().height;
const navbarContainer = document.querySelector('.navbar-container');

const stickyNav = function (entries) {
	const [entry] = entries;
	console.log(entry);

	if (!entry.isIntersecting) {
		navbar.classList.add('sticky');
		navbarContainer.style.padding = '2rem 0';
		navbar.style.transition = 'all 1s';
	} else {
		navbar.classList.remove('sticky');
		navbarContainer.transition = 'all 1s';
	}
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
