# RPS implementation 1 notes

This is a beginner implementation inspired by Ania Kubow's [walkthrough](https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=1961s) on Youtube.
Below are some examples of the code used and some notes on new things I learned.
The GitHub repo for this project is found [here](https://github.com/dennis-nichols/yt_group_projects).

**This project basically accomplishes 3 main tasks *simultaneously* when the user clicks a button.**

## 1. Take user choice from buttons and display it

The buttons were coded in html using `<button>` elements.

The input from the buttons was displayed in the user choice section using the process below:

1. A variable was created for the button input using the [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) method of the document object. You have to be careful when using this method because it takes as arguments only valid CSS selectors. This would result, in our example, in grabbing all the buttons on the page. If there were other buttons we wanted to leave alone, we'd need to use the [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method after assigning the buttons ids within the html file. The method we call here returns a list ([NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)) of the elements that match our selector.

    ```js 
    const possibleChoices = document.querySelectorAll('button');
    ```

2. Next a [forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) method call is executed on the list of elements generated in the `possibleChoices` object. For each element in the list it executes the `possibleChoice` arrow function which calls the `addEventListener` method on the element. This method listens for an event (a button click in this case) and then executes another arrow function nested inside. This function lists as its paramater `e` (for event) and assigns the id of the target event (the name of the button clicked) to the `userChoice` variable. Then it assigns the value of this variable to the `innerHTML` attribute of the `userChoiceDisplay` variable. This has the effect of displaying the user's choice on the screen. The next 2 function calls are explained in subsequent sections.


    ```js
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
    }));
    ```

## 2. Generate a computer choice and display

This simply uses a random number generator to come up with a number within the length of the list of elements and assign and display the computer choice based on this number using simple conditional `if` logic.

## 3. Generate a result for the game and display it

This also uses simple `if` logic to evaluate the current set of user/computer choices against the set of all possible choice combinations and deliver a result.
