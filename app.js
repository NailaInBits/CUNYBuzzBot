'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAaAsPUI8YYBAPfEKDd6HJrrLWhSzZC3YfGD922rZBPkRmx4uLzrwkIR5BoZBljGAaJ5Pf2fYAqLoJXA7r3XYMn0gloeLCjMhyVRp8WOWETUxGTxqwXjSCiorO1rlGoIh1yRFk7GqIXy3tHRxz3M50rkQZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
