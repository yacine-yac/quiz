# QUIZ Project 

This small project is build using **React js** library and **Typescript**.
the project release set of questions with some propositions and the user will check the right answers.

Nb: the answers can be one or multiple 

## Technologies 
* React js : for handling ui 
* php Api : Send the questions and answers, check the answers and return the result in Json format.
  
   
## User interface :
 The user interface is build by react Js libarary,the App component handle all the rest of components.
  ### Components list:
  * Area
      * ErrorBoundary
  * demo
  * result
  * start
  * component
     * Answers 
     * Time
     * quizButton
  
  Firstly,our **App** has a **router** which detecte the current path url and return the suitable component   component we used router for UI by  **React-router-dom** package.
 * path : 
      * /     =>  Start component
      * /quiz =>  Area  component  
 ### `Area Component` :
 this component handle the current ui, it has a state Management **page** which returns the component thats suits : 
 * 1: Component 
 * 2: Demo 
 * 3: Load page
 * 4: Result 
  
  Also, it has the time state which is initialized by undefined to controle the time in the entire app and change the current page state when the time is finish or started.
  to Make the diffrence between the UI in the state to check Answers and checked state we have mode state which is boolean and allows to make the difference.
  1. mode =false : enable to check input
  2. mode = true : don't enable to check input 
  
### `Errour Boundary` :
this component release a special UI when the error occurs, it accepts a child components as props. 
```javascript
<ErrorBoundary>
   <ChildComponent />
</ErrorBoundary>
```
It has an error state and implement the method **getDerivedStateFromError** which set error state if the child component throw an **Error** in her lifecycle if not it returns the child component.

### `Start Component` :
Our App route to **Start** component when the urli is in root **/** it return a UI describe some conditions with link page to **/quiz** .

### `Demo Component` :
This component is an intermediate **UI** between submit the answers to the server and realse the Result, further it has two button actions 
 * Whiche the first one allow to change **Area** component state to get back to quiz **UI**.
 * The second allows to change **Area** component state to pass data to the server.
 
### `Result` :
This component release the result content 
* Success or Wrong with pourcentage.
* Number of success Answers.
* Number of wrong Answers.

And allows to make some action :
* This UI allow to get back shows the right Answers.
* Or retake another quiz.
  
Nb:this action is taked by set state of **Area Component** .





---
# Install :
  To run this project we need to install node JS and react libarary
  ``` 
  npm i react
  ```
  clone this project by :
  ```
  git clone https://github.com/yacine-yac/quiz
  ```
  ___
## php Api
  
  The current api work to provide question and propositions for **React App** 

  * Directories structure  



