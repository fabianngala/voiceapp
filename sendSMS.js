const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: 'bc7203d54f67485eaf7637dd1bc30165a0c9d6b955964c5bee76aced8d4daf2e', 
    username: 'sandbox'
  });


module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
          to: '[+25412400604]', 
          message: 'Hey AT Ninja! Wassup...',
          from: '[FabianNgala]'
        });
        console.log(result);
      } catch(ex) {
        console.error(ex);
      } 

};