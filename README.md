# Ad-extend-PT-interface-
Base on bluetooth to control Arduino for making communication with I2C device. 

## TODO 
- [x] Write I2c test
- [x] Read I2c test
- [] Optimize code module :Tab+ handleclick() + handlechange()
- [] Upgrade to Bluetooth 4.0
## Step by step
### Pre-request on Windows
- Needs Visual Studio (Visual C++) and its command line tools installed.
- Needs Python 2.x installed and accessible from the command line path.
  Install
- Arduino IDE
- Node.js 
- Git

### Clone the project
```git clone https://github.com/ShangQingLiu/Ad-extend-PT-interface-.git``` or go to the repository download
the Zip file. 

#### Project structure
```
------Ad-extend-PT-interface-
    |-----ad-extend
    |-----Arduino
    |-----server
        |-----controllers
```
### frontier
In the command line, go under the ad-extend file as ```cd Ad-extend-PT-interface-/ad-extend```
and run ```npm install``` then do ```npm start``` It will automatically start the frontier on **localhost:3000**

### Backend 
In the command line,go under the server/contorller as using command ```node bt.ctl.js``` 

### Arduino 
Start the master_sender.ino by Arduino IDE under Ad-extend-PT-interface-/Arduino and confirm that you move the code to the draft file.
On the top choose tools and choose the Arduino Uno or your own kinds of motherboard. Also choose the port that connect to your Arduino. (
You can check it in the device manager.
)
-  UNO-> HC-O5
- 0 RX-> TXD 
- 1 TX-> RXD
- GND -> GND
- VCC -> 5V
## Contact 
 If you get any unsolvable question, felling free to open the issue or sending that to my email: osmallfrogo.hchs@gmail.com

