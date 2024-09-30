const scoreElem = document.querySelector('#score')
const coin = document.querySelector('#coin')
const BuyUpgarade = document.querySelector('#BuyUpgrade')
const result = document.querySelector('#result')

let score = 0
let clickValue = 1
let upgradeCost = 100


coin.addEventListener('click', (event) => {
  score = score + clickValue
  scoreElem.innerHTML = score

  showCoinValue(event.clientX, event.clientY, clickValue)
})

BuyUpgarade.addEventListener('click', () => {
  if(score >= upgradeCost) {
    score = score - upgradeCost
    clickValue = clickValue + 1
    upgradeCost = upgradeCost * 2

    scoreElem.innerText = score

    BuyUpgarade.innerText = `Купить улучшение ${upgradeCost}🪙`

    result.innerText = `Вы купили улучшения, теперь у вас за каждый клик ${clickValue}`

    
  } else { 
      result.innerText = `У вас не достаточно коинов🪙`
  }
})

function showCoinValue(x, y, value){
  const coinCoinValueElem = document.createElement('div')
  coinCoinValueElem.innerText = `+${clickValue}`
  coinCoinValueElem.className = 'coin-value'
  coinCoinValueElem.style.position = 'absolute'
  coinCoinValueElem.style.left = `${x}px`
  coinCoinValueElem.style.top = `${y}px`
  coinCoinValueElem.style.color ='white'
  coinCoinValueElem.style.opacity = 1
  document.body.append(coinCoinValueElem)

  setTimeout(() => {
    coinCoinValueElem.style.transform = 'translateY(-30px)'
    coinCoinValueElem.style.opacity = 0

  }, 0);

  setTimeout(() => {
    coinCoinValueElem.remove()
  }, 90);
}
