# Online Virtual Dressing Room

Virtual Dressing Room is a web application, aiming at enabling customers to try-on clothes before buying them online. <br><br>The traditional shopping experience often involves visiting physical stores and trying on multiple clothing items to find the right fit and style. However, this process can be time‑consuming, inconvenient, and limited by factors such as store availability and fitting room spaces. The concept of a virtual dressing room software stems from the desire to provide users with a convenient and immersive way to try on different outfits without physically wearing them. This technology has gained popularity.

## Development Tools

* Testing API: *Postman*
* GUI for managing MongoDB Database: *MongoDB Compass*
* Grammar Checker: eslint

## Installation

* Backend Springboot Project

Before you start to try anything with the frontend page, please run the backend project first.<br>

*Make sure you are in the root directory*. Direct to the directory of the springboot jar file.

``` text
cd springbootDemo\target
```

Then run the .jar file to start the backend project.

```text
java -jar springbootDemo-0.0.1-SNAPSHOT.jar
```

* Configure your MongoDB 'cetificate'

This will enable your backend to successfully connect to the database.<br>

*Make sure you are in the base root*

```text
cd springbootDemo\src\main\resources
```

Create the `.env` file in this directory using vim or other text editor. Paste the configuration and save.

``` text
MONGO_DATABASE="vdr-api-db"
MONGO_USER="manunitedhzk7"
MONGO_PASSWORD="p3JmLIQEnnHoFrR4"
MONGO_CLUSTER="cluster0.vlgriap.mongodb.net"
```

* Frontend React Project

*Make sure you are in the base root*

```text
cd ReactDev\MovieClient\movie-gold-v1>
```
Use package manager `npm` to install the frontend projects

``` text
npm install
```

If you haven't install nodejs on your computer, you will not be able to use the package manager `npm`, please install it via the link: [NodeJS Install](https://nodejs.org/en)(*Version:20.11.1*)

Run the app

``` text
npm start
```

* IvCam installation and configuration

We use the IvCam for the customer to take real time full-body image.<br>
Install IvCam via the link [IvCam](https://www.e2esoft.com/ivcam/)<br>
Please configure the ivcam with the mobile phone ip address to connect for image taking.




## Reference

* [Introduction to create a web application with MongoDB, spring boot and ReactJS(video)](https://www.youtube.com/watch?v=5PdEmeopJVQ)
  [Text tutorial](https://reflectoring.io/build-responsive-web-apps-with-springboot-and-react-tutorial/)
* [React reference Overview](https://react.dev/reference/react) [Introduction to React](https://react.dev/learn)
* [React in VS Code(Configuring Linting extension)](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#:~:text=You%20can%20open%20the%20preview,syntax%20highlighting%20in%20code%20blocks.)
* [Tutorial of creating a side navigation bar](https://www.youtube.com/watch?v=bFvfqUMjvsA&list=PLImJ3umGjxdCjoBGj1eGQwcopR0P0edAK)
* [Reference for the font icons for fontawesome library](https://fontawesome.com/v4/icons/)
* [Reference for Animated Icons](https://loading.io/)
* [React Loading using `react-loader-spinner`](https://mhnpd.github.io/react-loader-spinner/)

<!-- ## *HTML code* reference for the frontend pages

[Click to view the frontend view](https://projects.animaapp.com/?mode=code&layer=78%3A1031&utm_source=copylink) -->

## Contributions

Zhikai Hu: Frontend page, backend(other than the face/clothes changing part), database<br>
Yee Yang Tan: 2D Clothes swapping backend<br>
Zheyuan Jiang: 3D Clothes/Face swapping<br>
Chenglong Xia: Face swapping<br>
Elkin: clothes recommendation system<br>

---

## Appendix

### Usage of installed node.js dependencies(Partly)

***Install command***: `npm install dependency_name`(*Hint*: `install` is the same as `i`)

1. **axios**:
2. **bootstrap**: enable us to use bootstrp for  layout and styling purposes
3. **react-bootstrap**: enable us to use the bootstrap related components for ...
4. **@fortawesome/react-fontawesome**: enable us to easily install font awsome icons within react application
5. **@fortawesome/free-solid-svg-icons**
6. **react-player** : play with movie trailer
7. **react-router-dom**
8. **@mui/material @emotion/react @emotion/styled**
9. **react-material-ui-carousel**

