window.addEventListener('load', function () {
	// count
	const count = document.querySelector('.count');
	const buyer = document.querySelector('.buyer');
	let intCount = +count.innerText;
	let intBuyer = +buyer.innerText;

	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}

	setInterval(function () {
		if (intCount < 100) return;

		count.innerText = intCount = intCount - 1;

		if (intBuyer > 50)
			buyer.innerText = intBuyer = Math.random() > 0.5 ? intBuyer - 1 : intBuyer + 1;
		else
			buyer.innerText = intBuyer = intBuyer + 1;

	}, randomInteger(50000, 30000));

	// time
	const iconClock = document.querySelector('.icon-clock');
	let hours = 0;
	let minute = 0;

	setInterval(function () {
		const currentdate = new Date();
		let hours = currentdate.getHours() < 10 ? '0' + currentdate.getHours() : currentdate.getHours();
		let minute = currentdate.getMinutes() < 10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes();

		const datetime = hours + ":" + minute;
		iconClock.innerText = datetime;
	}, 1000);

	// spin
	const formBlock = document.querySelector('.form-block');
	const form = document.querySelector('.form');
	const spinButton = document.querySelector('.spin-button');
	const spinImg = document.querySelector('.spin img');

	spinButton.addEventListener('click', function () {
		if (!formBlock.classList.contains('spin-end')) {
			spinImg.classList.add('rotation');

			setTimeout(function () {
				spinButton.disabled = true;
				formBlock.classList.add('spin-end');
			}, 9000);
		}
	});
	// scroll

	$('.s__main a').click(function () {

		if (formBlock.classList.contains('spin-end')) {
			toScroll = '.form';
		} else {
			toScroll = '.form-block';
		}

		$("html, body").animate({
			scrollTop: $(toScroll).offset().top
		}, 2000);
		return false;
	});
});
