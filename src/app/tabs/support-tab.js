var yo = require('yo-yo')

var css = require('./styles/support-tab-styles')

var infoText = yo`
  <div>
    Have a question, found a bug or want to propose a feature? Have a look at the
    <a target="_blank" href='https://github.com/nekonium/browser-solidity/issues'> issues</a> or check out
    <a target="_blank" href='https://remix.readthedocs.io/en/latest/'> the documentation page on Remix</a> or
    <a target="_blank" href='https://solidity.readthedocs.io/en/latest/'> Solidity</a>.
    For about original Ethereum Remix, please propose an issue
    <a href='https://github.com/ethereum/browser-solidity/issues'> here</a>.
  </div>
`

function supportTabView () {
  return yo`
    <div class="${css.supportTabView} "id="supportView">
      <div>
        <div class="${css.infoBox}">
          ${infoText}
        </div>
      </div>
      <div class="${css.chat}">
        <div class="${css.chatTitle}" onclick=${openLink} title='Click to open an invitation page of our Discord server'>
          <div class="${css.chatTitleText}">Come to our Discord server! 😺</div>
        </div>
      </div>
    </div>
  `
}

function supportTab (container, events) {
  let el = supportTabView()
  let gitterIsLoaded = false

  events.app.register('tabChanged', (tabName) => {
    if (tabName !== 'Support' || gitterIsLoaded) {
      return
    }

    yo.update(el, supportTabView())
    el.style.display = 'block'
    gitterIsLoaded = true
  })

  container.appendChild(el)
  return el
}

function openLink () {
  window.open('https://discordapp.com/invite/C8mJg44')
}

module.exports = supportTab
