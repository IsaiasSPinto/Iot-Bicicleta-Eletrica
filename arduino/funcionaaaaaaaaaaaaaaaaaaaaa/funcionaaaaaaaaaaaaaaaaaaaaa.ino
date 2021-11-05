#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>


//Provide the token generation process info.
#include <addons/TokenHelper.h>

//Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>



/* 1. Define the WiFi credentials */
#define WIFI_SSID "Elisandro 2G"
#define WIFI_PASSWORD "99332989"

/* 2. Define the API Key */
#define API_KEY "AIzaSyBSI4B1pwhQxLMs5RP-KeJlUh0k4MI5zvE"

/* 3. Define the RTDB URL */
#define DATABASE_URL "https://bici-81f1b-default-rtdb.firebaseio.com/" //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app

/* 4. Define the user Email and password that alreadey registerd or added in your project */
#define USER_EMAIL "isaiascxs10@gmail.com"
#define USER_PASSWORD "99332989Isa"

//Define Firebase Data object
FirebaseData fbdo;
FirebaseData stream;

FirebaseAuth auth;
FirebaseConfig config;

void setup()
{

  Serial.begin(115200);

  pinMode(LED_BUILTIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

  //For the following credentials, see examples/Authentications/SignInAsUser/EmailPassword/EmailPassword.ino

  

  //Or use legacy authenticate method
  config.database_url = DATABASE_URL;
  config.signer.tokens.legacy_token = "jzHEpYrRqOeZQuyLWBNvog3vhnHRJ3gh5YEOqMX2";

  Firebase.begin(&config, &auth);

  Firebase.reconnectWiFi(true);

}

void loop()
{
 if (Firebase.getInt(fbdo, "/status")) {

     if (fbdo.dataTypeEnum() == fb_esp_rtdb_data_type_integer) {
      Serial.println(fbdo.to<int>());
    }

  } else {
    Serial.println(fbdo.errorReason());
  }

  int i = fbdo.intData();
  
  if(i == 1)
  {
    digitalWrite(LED_BUILTIN, HIGH);
  }
  else 
  {
    digitalWrite(LED_BUILTIN, LOW);
  }
 

  
}
