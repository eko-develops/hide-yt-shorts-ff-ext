const DELAY = 500;

function debounce(cb, delay = 1000) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}

function handleScroll() {
	const videoContainer = document.querySelector('ytd-browse');
	const videos = videoContainer.querySelectorAll('ytd-grid-video-renderer');
	videos.forEach((video) => {
		const shortsOverlay = video.querySelector('[overlay-style="SHORTS"]');
		if (shortsOverlay) {
			video.style.display = 'none';
		}
	});
}

const debounceScroll = debounce(handleScroll, DELAY);
document.addEventListener('scroll', debounceScroll);
