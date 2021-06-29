Project was developed with node version '15.14.0' and npm version '7.10.0'.

To use the Website follow these steps:
1. run 'npm install' to install all necessary packages. 
1. Start the Backend server with the command 'node BE-server/app.js'. The Server will start on 'http://localhost:3000'. 
1. Start the Frontend Server with the command 'node app.js'. The Server will start on 'http://localhost:4200'.

To access the website of the attacker, go to 'http://a-meisenhelter.bplaced.net/'.

______________

***Testfälle:*** 

**Mit Schutz:**

1. Der User öffnet die Buchungsseite.
1. Der User wählt sich ein Event aus und drückt auf den “Event Buchen” Button.
1. Login Seite öffnet sich.
1. Der User loggt sich mit validen Daten ein.(‘SameSite = Strict’ Cookie wird gesetzt.)
    1. Strict
    1. Username = Username
    1. Password = Password1
1. Der User klickt auf den “Submit” Button.
1. Das Formular zum Buchen öffnet sich.
1. Der User öffnet einen neuen Tab im Browser.
1. Der User navigiert zu der böswilligen Website.

*Die böswillige Website sendet heimlich einen Request, mit dem Buchungsformular für ein Event, an die Buchungsseite. Da das Session-Cookie ‘Samesite=Strict’ ist, wird es im 3rd Party Kontext von dem Browser nicht mitgeschickt und der Angriff ist nicht erfolgreich.*


**Ohne Schutz**

1. Der User öffnet die Buchungsseite.
1. Der User wählt sich ein Event aus und drückt auf den “Event Buchen” Button.
1. Login Seite öffnet sich.
1. Der User loggt sich mit validen Daten ein.(‘SameSite = None‘ Cookie wird gesetzt.)
    1. None
    1. Username = Username
    1. Password = Password1
1. Der User klickt auf den “Submit” Button.
1. Das Formular zum Buchen öffnet sich.
1. Der User öffnet einen neuen Tab im Browser.
1. Der User navigiert zu der böswilligen Website.

*Die böswillige Website sendet heimlich einen Request, mit dem Buchungsformular für ein Event, an die Buchungsseite. Da das Session-Cookie ‘Samesite = None ist, wird es im 3rd Party Kontext von dem Browser mitgeschickt und der Angriff ist erfolgreich.*
