
/* blinking menu items animation */
let blinkTextMenuLinks = document.querySelectorAll(".blink-text-menu li a");
blinkTextMenuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    i += 1;
    let span = document.createElement("span");
    let delay = i / 20;
    if (i % 2 === 0) {
      delay -= 0.1;
    } else {
      delay += 0.05;
    }
    let letterOut = document.createElement("span");
    letterOut.textContent = letter;
    letterOut.style.transitionDelay = `${delay}s`;
    letterOut.classList.add("out");
    span.append(letterOut);
    let letterIn = document.createElement("span");
    letterIn.textContent = letter;
    letterIn.style.transitionDelay = `${delay}s`;
    letterIn.classList.add("in");
    span.append(letterIn);
    link.append(span);
  });
});

/* scrolling animation */
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* back to top button function */
function scrollToTop(){
	window.scrollTo({top: 0, behavior: 'smooth'});
  };

/* intro typing animation */
function introType() {
	setTimeout(() => {typeWriter('A Pro-Gamer.', "intro");}, 1000);
}

async function typeWriter(txt, element) {
	sleepTime = 100;
	el = document.getElementById(element);
	for (let i = 0; i < txt.length; i++) {
		el.innerText = txt.substring(0, i + 1);
		await sleep(sleepTime);
	}
	await sleep(200);
	document.querySelector('.hidden-button').classList.add('show-button');
};

function sleep(ms){
	return new Promise((resolve) => setTimeout(resolve, ms));
}

introType();

/* change intro button function */
function IntroSwitch(){
	const intro = document.querySelector('#intro');
	document.querySelector('.button').classList.add('faded-button');
	InsertText('Future', 2, intro);
	
};

async function InsertText(text, idx, element) {
	
	document.getElementById("cursor").id = 'hiddenCursor';
	element.innerHTML = 'A <span id="cursor">|</span>Pro-Gamer.';
	let str = element.innerText.slice(0, idx);
	let str2 = element.innerText.slice(idx);
	await sleep(1000);

	document.querySelector('.button').remove();

	for (let i = 0; i < text.length; i++){
		element.innerText = str + text.substring(0, i + 1) + str2;
		await sleep(sleepTime);
	}
	await sleep(150);
	element.innerHTML = 'A Future P<span id="cursor">|</span>ro-Gamer.';
	await sleep(150);
	element.innerHTML = 'A Future Pr<span id="cursor">|</span>o-Gamer.';
	await sleep(150);
	element.innerHTML = 'A Future Pro<span id="cursor">|</span>-Gamer.';
	await sleep(150);
	element.innerHTML = 'A Future Pro-<span id="cursor">|</span>Gamer.';
	await sleep(300);
	element.innerHTML = 'A Future Pro<span id="cursor">|</span>Gamer.';
	await sleep(150);
	element.innerHTML = 'A Future ProG<span id="cursor">|</span>amer.';
	await sleep(300);
	element.innerHTML = 'A Future ProGr<span id="cursor">|</span>amer.';
	await sleep(150);
	element.innerHTML = 'A Future ProGra<span id="cursor">|</span>mer.';
	await sleep(150);
	element.innerHTML = 'A Future ProGram<span id="cursor">|</span>er.';
	await sleep(300);
	element.innerHTML = 'A Future ProGramm<span id="cursor">|</span>er.';
	await sleep(500);
	element.innerHTML = 'A Future ProGrammer.<span id="cursor">|</span>';

	secondIntro1 = document.querySelector('#hiddenIntro1');
	secondIntro2 = document.querySelector('#hiddenIntro2');
	secondIntro1.innerHTML = '<h1 class="mt-5">I am aiming to be multidisiplinary software engineer.</h1>'
	secondIntro2.innerHTML = '<h1>Welcome to be a withness of my journey.</h1>'
	await sleep(500)
	secondIntro1.classList.add('show-intro')
	await sleep(1000)
	secondIntro2.classList.add('show-intro')
};