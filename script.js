const misfortunes = [
    //Timely:
    "Trump 2024.",
    //Timeless:
    "Your lucky colour is green; avoid all other colours.",
    "You amuse others.",
    "Imitation is the most sincere form of mockery.",
    "The only way to have a friend is to be your own.",
    "Love is on its way - make sure to have cash on hand.",
    "We have been trying to reach you about your car's extended warranty.",
    "A cheerful message from the government is on its way to you.",
    "Things couldn't possibly get any worse.",
    "At least the fortune cookie tasted good.",
    "When you come to a fork in the road, take it.",
    "You can observe a lot by just watching.",
    "A nickel ain’t worth a dime anymore.",
    "The future ain’t what it used to be.",
    "If you don't know where you're going, you might not get there.",
    "What people call love is just a chemical reaction that compels animals to breed.",
    "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV.",
    "Get your shit together. Get it all together. And put it in a backpack. All your shit. So it’s together. And if you gotta take it somewhere, take it somewhere, you know, take it to the shit store and sell it… Or put it in a shit museum, I don’t care what you do, you just gotta get it together. Get your shit together!",
    "If something's hard to do then it's not worth doing.",
    "You tried your best and you failed miserably. The lesson is: never try.",
    "Trying is the first step towards failure.",
    "If you're out of people's sight, you must constantly Twitter them what you're up to.",
    "One person can make a difference. But most of the time, they probably shouldn’t.",
    "Romance is dead. It was acquired by Hallmark and Disney in a hostile takeover, homogenized, and sold off piece by piece.",
    "Happiness is limited but misery has no end.",
    "You can just hang around outside in the sun all day, tossing a ball around, or you can sit at your computer and do something that matters!",
    "Life is short and that's why you have to do whatever you want all the time.",
    "Whatever you do, always give 100%. Unless you're donating blood.",
    "It's never too late to go back to bed.",
    "Silence is golden. Unless you have kids. Then silence is suspicious.",
    "An apple a day keeps anyone away if you throw it hard enough.",
    "Housework can't kill you, but why take a chance?",
    "This too shall pass. It might pass like a kidney stone, but it will pass.",
    "Happiness is like a cake. Have too much and you get sick of it.",
    "If you are living the dream, how do you know if you are asleep or awake.",
    "People say having kids is life changing, well that doesn't necessarily mean a good thing, does it?",
    "You won't get anything done by planning."
];

const cookie = document.getElementById('cookie');
const openCookie = document.getElementById('open-cookie');
const fortune = document.getElementById('fortune');
const btnFortune = document.getElementById('btn-fortune');

btnFortune.addEventListener("click", function(){
    if (btnFortune.innerText === "Open Fortune Cookie"){
        let index = Math.floor(Math.random() * misfortunes.length);
        let message = misfortunes[index];
        fortune.innerText = message;
        cookie.classList.add("open");
        openCookie.classList.add("reveal");
        fortune.classList.add("reveal");
        setTimeout(function(){ 
            btnFortune.innerText = "Get Another Cookie";  
        }, 3000);      
    } else {
        cookie.classList.remove("open");
        openCookie.classList.remove("reveal");
        fortune.classList.remove("reveal");
        btnFortune.innerText = "Open Fortune Cookie";
    }
});