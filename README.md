# Ad-extend-PT-interface-
Base on blue tooth to control Arduino and its' extend

##PC
inside of PC you need following package install.
1. python2.x
2. vs2015
## server
For testing, inside the server/contorller using command ```node led.ctl.js COMX ``` X stands for your COM port which connet to the Arduino.

## webpage
To start the react project.
using ```npm install``` inside the path ad-extend under the whole project.
And using ```npm start``` to start the website on local:3000.

In the frontier just click the color to make the counterpart light bulb switch on.

## arduino
First you need to load the serial test inside of Arduino as following.
```
   int redLed = 13;
   int greenLed = 12;
   int blueLed = 11;
   int data;
   
   void setup() {
     // put your setup code here, to run once:
     pinMode(redLed, OUTPUT);
     pinMode(greenLed, OUTPUT);
     pinMode(blueLed, OUTPUT);
     Serial.begin(9600);
   }
   
   void loop() {
     while (Serial.available() > 0) {     //wait here until the data is available
       data = Serial.read();
     }
   
     if (data == '1') {
       digitalWrite(redLed, HIGH);
       digitalWrite(greenLed, LOW);
       digitalWrite(blueLed, LOW);
       Serial.println("Red On");
       data = '4';
     }
   
     if (data == '2') {
       digitalWrite(redLed, LOW);
       digitalWrite(greenLed, HIGH);
       digitalWrite(blueLed, LOW);
       Serial.println("Green On");
       data = '4';
     }
   
     if (data == '3') {
       digitalWrite(redLed, LOW);
       digitalWrite(greenLed, LOW);
       digitalWrite(blueLed, HIGH);
       Serial.println("Blue On");
       data = '4';
     }
   
     // put your main code here, to run repeatedly:
   
   }
   ```