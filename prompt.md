# Prompts used

### 1
I'm going to give you some yaml-style code that I want you to translate into a html file, a css file and a javascript file. Are you ready?

### 2
pseudo.yaml

## Output
First commit

### 3 

That is a good start. Now, can you reduce the height of the menu a bit, maybe by half. Can you also make sure that some margin is added to the right of the rightest menu items. 

Also, I would like you to remove the background color from the first text block. 

Also, under the customer testimonys, could you add a button that when you click it, and email subscribe form shows up. It should not be visible from the beginning, only when the customer presses "Subscribe now" (text of the button). The subscription buttons should not be in the testimonial buttons, but rather under them, in a new section.

### 4

The top menu is now a bit broken. Please go back to the first rendition with the logo to the left, app name in the middle and four menu items to the right. Make sure it is max 50px high. Please render the full html file with all the info you have until now, plus these changes.

### 5
Second commit

### 6
You're almost there. A few changes:
- There should not be a "subscribe now" button in the menu
- There should not be "subscribe now" buttons in the customer testimony modules.
- There is still nothing happening when clicking the "subscribe now" button that should be there. (Have you forgot to add it to the html file)? 

### 7
I'm getting a "subscribe button is null" error for line 5 in the js file. Also, still nothing happens when I press the button. Maybe you need some better instructions.

When pressing that button, the JS file should add a form into the DOM, containing the following fields:
- Your name
- Your email address
- A new button saying "confirm"
- When that button is pressed, it should display a text next to it saying "Thank you for subscribing"

### 8
Third commit