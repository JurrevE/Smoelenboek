let cards = document.querySelectorAll(".frame");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        this.classList.add("hidden");
    });
});

const skillButtons = document.querySelectorAll(".skill--buttons");
let selectedSkills = new Set();

skillButtons.forEach(skillButton => {

skillButton.addEventListener('click', function () {
    if (!selectedSkills.has(this.dataset.skill)) {
        selectedSkills.add(this.dataset.skill);
    } else {
        selectedSkills.delete(this.dataset.skill);
    }
    
    
    for (let i = 0; i < cards.length; i++) {
        let cardDataset = cards[i].dataset.skill.split(",");
        let hasAllSkills = [...selectedSkills].every(skill => cardDataset.includes(skill));
        cards[i].classList.toggle("hidden", !hasAllSkills);
    }
    console.log(selectedSkills);
    this.classList.toggle("clicked")
});
})
