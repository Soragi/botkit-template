//
// Respond to various 'hello' words, attach file by URL and from local file system
var fs = require('fs');

module.exports = function( controller ) {

    controller.hears( [ 'hi','hello','howdy','hey','aloha','hola','bonjour','oi','hallo'], 'message,direct_message', async ( bot,message ) => {
 
        await bot.reply( message,'Greetings! I am here to help!' );
        await bot.reply( message, { markdown: '> How can I help you?**\n> - Programs\n> - Incentives\n> - Partner status\n> - Profile settings' } );
        await bot.reply( message, { markdown: 'Or type `help` to see all available commands' } );
      });
    
     controller.hears( [ 'Wassup' ], 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message,'Greetings! I am here to help!' );
        await bot.reply( message, { markdown: '> How can I help you?**\n> - Programs\n> - Incentives\n> - Partner status\n> - Profile settings' } );
        await bot.reply( message, { markdown: 'Or type `help` to see all available commands' } );
      });


    controller.hears( 'happy boy', 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message, {
            text: 'Aww!',
            files: [ 'https://i.pinimg.com/280x280_RS/b0/0e/49/b00e4959dd26367688099678376d4296.jpg' ]
        });
        
    controller.hears( 'god', 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message, {
            text: 'I felt extremely uncomfortable as the focal point, in the spotlight. I really like the behind the scenes role, because all my freedom is there - Brian Eno',
            files: [ 'https://needled.files.wordpress.com/2013/03/eno3.jpg' ]
        });
    })

    controller.hears( 'local', 'message,direct_message' , async ( bot,message ) => {
        await bot.reply( message, {
            text: 'The source code',
            files: [ fs.createReadStream( './bot.js' ) ]
        })
    })

    controller.commandHelp.push( { command: 'hello', text: 'Greetings!' } );
    controller.commandHelp.push( { command: 'url', text: 'Attach a file via URL' } );
    controller.commandHelp.push( { command: 'local', text: 'Attach a file from the local file system' } );

}
