const client = new Paho.MQTT.Client("io.adafruit.com", Number("443"), "myClientId" + new Date().getTime());
const myTopic = "kigupta/feeds/sensor.intruder";

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({userName: "kigupta", password: "aio_ZQoI90AJ7JHxjTqjYj0l8XuDOanT", useSSL: true, onSuccess: onConnect });

let count = 0;
function onConnect() {
    console.log("onConnect");
    client.subscribe(myTopic);
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
    client.connect({userName: "kigupta", password: "aio_ZQoI90AJ7JHxjTqjYj0l8XuDOanT", useSSL: true, onSuccess: onConnect });
}

const publish = (dest, msg) => {
    console.log('dest :', dest, 'msg', msg)
    let message = new Paho.MQTT.Message(msg);
    message.destinationName = dest;
    client.send(message);
}

function onMessageArrived(message) {
    if (val == 1) {
        x.play();
    } 
}

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("Ahh! Someone is coming. Prepare yourself")
	);
}


