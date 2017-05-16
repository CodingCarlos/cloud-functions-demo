var TelegramBot = require('node-telegram-bot-api');

// replace the token and chatId
var token = 'YOUR_TELEGRAM_BOT_TOKEN';
var chatId = '00000000';


// Create a bot
var bot = new TelegramBot(token, {polling: false});

exports.telegramReport = function(req, res) {

	// Check if function has been called well, with all params, even you can check an authorization token... You know, that stuff

	var uid = req.body.userId;
	var name = req.body.userName;
	var type = req.body.type;
	var id = req.body.reportId;

	var message = name +' ('+ uid +') ha reportado contenido: '+ type +':'+ id;

	// Send a message!!
	bot.sendMessage(chatId, message);

	res.status(200).end();
};
