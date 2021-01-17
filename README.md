# React next JS google login
 Log in with google and post token on server (MERN)

![](https://raw.githubusercontent.com/georgecristian97/Logo/main/logo/mongodb-logo.png)	![](https://raw.githubusercontent.com/georgecristian97/Logo/main/logo/express-logo.png)	![](https://raw.githubusercontent.com/georgecristian97/Logo/main/logo/react-logo.png)	![](https://raw.githubusercontent.com/georgecristian97/Logo/main/logo/nodejs-logo.png)			![](https://raw.githubusercontent.com/georgecristian97/Logo/main/logo/firebase-logo.png)

- Steps

  - [Create new project](https://console.firebase.google.com/u/0/)

  - get started with </> and add the code to firebase.js that you'll have to make inside client folder

    - ```javascript
      import firebase from "firebase/app";
      import "firebase/auth";
      
      // Your web app's Firebase configuration
      var firebaseConfig = {
          apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          authDomain: "xxxxxxx-xxxxx.firebaseapp.com",
          projectId: "xxxxxxx-xxxxx",
          storageBucket: "xxxxxxx-xxxxx.appspot.com",
          messagingSenderId: "xxxxxxxxxxxx",
          appId: "x:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxxx"
      };
      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
      export default firebase;
      ```

  - Build :arrow_right: Authentication :arrow_right: Sing-in method :arrow_right: Google enable

  - Projects overview :arrow_right: :gear: :arrow_right: Project settings:arrow_right: Service accounts:arrow_right: Generate new private key

    :arrow_right:save it as serviceAccountKey.json into "firebase" folder from "server" folder

  - [install mongodb](https://www.mongodb.com/try/download/community) for database and follow the [setup](https://docs.mongodb.com/manual/administration/install-community/) 

  - [Install robo 3t](https://robomongo.org/download) for database visualization create new database localhost:27017

- Hint:

  -  Front end [localhost:3000](localhost:3000) 	
  - Backend [localhost:8000](localhost:8000)



:star:	Clone the project

> cd client
>
> npm install
>
> npm run dev
>
> cd server
>
> npm install
>
> npm run start



to be continued...
