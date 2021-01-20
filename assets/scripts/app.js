const ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 14;

let chosenMxLife = 100;
let currentMonsterHealth = chosenMxLife;
let currentPlayerHealth = chosenMxLife;


adjustHealthBars(chosenMxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0) {
        alert('You won!! :)')
    } else if (currentPlayerHealth <= 0) {
        alert('You lost! :(')
    }
}
attackBtn.addEventListener('click',attackHandler)