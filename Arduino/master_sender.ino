// master_sender.ino
#include <Wire.h>
int redLed = 13;
int greenLed = 12;
int blueLed = 11;
int SLAVE_ADDRESS = 0xA0;
String SA_val = "";
uint8_t SA_low, SA_high;
int REG_ADDRESS = 0x03;
String RA_val = "";
uint8_t RA_low, RA_high;
char incomingByte = 0;
int data;
String comdata = "";
uint8_t DA_low, DA_high;
int data_length = 0;
String receive_char;
String receive_string = "";

String getValue(String data, char separator, int index)
{
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length() - 1;

  for (int i = 0; i <= maxIndex && found <= index; i++)
  {
    if (data.charAt(i) == separator || i == maxIndex)
    {
      found++;
      strIndex[0] = strIndex[1] + 1;
      strIndex[1] = (i == maxIndex) ? i + 1 : i;
    }
  }
  return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}

int hexChar2Dec(char a, char b)
{
  int x, y;
  if (a <= '9' && a >= '0')
  {
    x = a - 48;
    x *= 16;
  }
  else if (a <= 'F' && a >= 'A')
  {
    x = a - 55;
    x *= 16;
  }
  else if (a <= 'f' && a >= 'a')
  {
    x = a - 97;
    x *= 16;
  }

  if (b <= '9' && b >= '0')
  {
    y = b - 48;
  }
  else if (b <= 'F' && b >= 'A')
  {
    y = b - 55;
  }
  else if (b <= 'f' && b >= 'a')
  {
    y = b - 97;
  }
  return x + y;
}

void setup()
{
  Wire.begin(); // join I2C bus as a Master
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(blueLed, OUTPUT);
  Serial.begin(9600);
  Serial.println("Type something to send:");
}

void loop()
{
  while (Serial.available() > 0)
  { //wait here until the data is available
    comdata += char(Serial.read());
    delay(2);
  }
  if (getValue(comdata, ',', 0) == "write_i2c")
  {

    SA_val = getValue(comdata, ',', 1);
    RA_val = getValue(comdata, ',', 2);
    comdata = getValue(comdata, ',', 3);

     SA_high = SA_val[0];
     SA_low = SA_val[1];
     SLAVE_ADDRESS = hexChar2Dec(SA_high,SA_low);

    RA_high = RA_val[0];
    RA_low = RA_val[1];
    REG_ADDRESS = hexChar2Dec(RA_high, RA_low);

    DA_high = comdata[0];
    DA_low = comdata[1];
    data = hexChar2Dec(DA_high, DA_low);

    Wire.beginTransmission(SLAVE_ADDRESS);
    Wire.write(REG_ADDRESS);
    Wire.write(data);
    Wire.endTransmission();
  }
  if (getValue(comdata, ',', 0) == "read_i2c")
  {
    receive_char = "";
  
    SA_val = getValue(comdata, ',', 1);
    RA_val = getValue(comdata, ',', 2);
    data_length = getValue(comdata, ',', 3).toInt();

     SA_high = SA_val[0];
     SA_low = SA_val[1];
     SLAVE_ADDRESS = hexChar2Dec(SA_high,SA_low);

    RA_high = RA_val[0];
    RA_low = RA_val[1];
    REG_ADDRESS = hexChar2Dec(RA_high, RA_low);

    Wire.beginTransmission(SLAVE_ADDRESS);
    Wire.write(REG_ADDRESS);
    Wire.endTransmission(false);
    Wire.requestFrom(SLAVE_ADDRESS, 1, true);
    if (Wire.available())
    {
      while(Wire.available()){
         receive_char += Wire.read(); //data
        }
     
    }

    Serial.println(receive_char);
  }
  if (getValue(comdata, ',', 0) == "read_all")
  {
 
    receive_string="";
      Wire.beginTransmission(SLAVE_ADDRESS);
      Wire.write(REG_ADDRESS);
      Wire.endTransmission(false);
      Wire.requestFrom(SLAVE_ADDRESS, 1, true);
      if (Wire.available())
      {
        while (Wire.available())
        {
          receive_string += Wire.read(); //data
          
        }
        
      }
    
 Serial.println(receive_string);
    
  }
  comdata = "";
}