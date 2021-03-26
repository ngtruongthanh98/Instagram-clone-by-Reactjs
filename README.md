# Instagram-clone-by-Reactjs

Frontend: ReactJs / Backend: Firebase

To install node_modules:
`npm install`

To start the project:
`npm start`

---

Create new app: `npx create-react-app instagram-clone-by-reactjs`

## Setup Firebase

Access `https://firebase.google.com/`

![Firebase website](https://i.imgur.com/vBsYmS8.png)

Click `Go to console`

![Firebase website](https://i.imgur.com/yAzAaOb.png)

Click `Add new project` to create your new project

Set your project's name

![Firebase project name](https://i.imgur.com/HNiTyzz.png)

Click `Continue`

![Firebase setup](https://i.imgur.com/3DbsALs.png)

![Firebase setup](https://i.imgur.com/C0qnsEM.png)

![Firebase setup](https://i.imgur.com/EUW0fG7.png)

![Firebase setup](https://i.imgur.com/9wH0x7o.png)

![Firebase setup](https://i.imgur.com/V0JnKLk.png)

Create new Firebase project done

![Firebase setup](https://i.imgur.com/hXyBD9C.png)

---

Create app in Firebase, choose Web:

![Firebase App](https://i.imgur.com/44XSLof.png)

Set the app's name and click setup Firebase Hosting:

![Firebase App](https://i.imgur.com/nWWoVBR.png)

![Firebase App](https://i.imgur.com/iEwsaUr.png)

![Firebase App](https://i.imgur.com/C53KEG8.png)

![Firebase App](https://i.imgur.com/oRX7RT6.png)

`sudo npm install -g firebase-tools`

![Firebase App](https://i.imgur.com/YLd5wRu.png)

Create Firebase app done:

![Firebase App](https://i.imgur.com/kiDThlF.png)

---

Clean up the project, delete App.test.js, logo.svg, setupTests.js

Change App.js into this:

![App.js](https://i.imgur.com/u53qpBO.png)

![Sentence](https://i.imgur.com/9zMi74Z.png)

With App.css

```
* {
  margin: 0;
}
```

Change the website's elements margin: 0

![margin: 0](https://i.imgur.com/dDqpuPG.png)

I design follow the Instagram.com

![Instagram](https://i.imgur.com/yRZ4teV.png)

The web will have app header, posts

You can get style Instagram word via copy image address of the official Instagram, or using this link: `https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png`

![copy image address](https://i.imgur.com/e16tauc.png)

____________________________________________________
App header:


In App.js:

```
        <div className="App">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt=""
				/>
			</div>

            <h1>Let's build the Instagram clone</h1>

        </div>
```

In App.css:
```
* {
  margin: 0;
}

.app {
  background-color: #fafafa;
  height: 100vh;
}

.app__header {
  background-color: white;
  padding: 20px;
  object-fit: contain;
}
```

![Web app](https://i.imgur.com/swM7zWT.png)

Add border-bottom to app__header:

```
.app__header {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  object-fit: contain;
}
```
![border-bottom](https://i.imgur.com/ZjyThXD.png)

_____________________________________________
Post