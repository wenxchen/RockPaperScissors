#README

##Rock Paper Scissors in HTML/JS/CSS##

This project was made for an [assignment from The Odin Project's](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors) introduction to DOM manipulation - a simple game of Rock Paper Scissors for the browser. A lot of code was refactored from an ealier assignment that didn't touch the DOM, functioning only using alerts and prompts. 

As a part of the update, buttons, scores and announcements of game states were added to demonstrate basic understanding of DOM manipulation.

##Post-Mortem##
As an introduction to DOM manipulation, I had a lot of fun learning what I could do with a little JS and some Googling. It took some time to figure how I wanted the player to know just what the computer picked instead of simply outputting text but I think at the end of the day I could live with the outcome.

Designing the HTML skeleton and CSS took a while but after that, refactoring the JS and making it all work went by in a flash.

##Challenges##
I had to wind up Googling a lot of methods I had never touched or heard of before, like setTimeout() and clearTimeout() in order to have the computer action arrow not bug out and have 2 show up at the same time due to timing problems from using CSS transitions. I wound up using these methods to remove button functionality for a quarter of a second in case the player clicked too fast. 

I used clearTimeout() to fix an issue with the computer action popping up after the game had already ended.

Along with these problems, I found myself stuck for a bit wondering just how much of my code I should refactor versus writing from scratch. I really had trouble wrapping my head around how to reuse the original game loop when in the end the loop wasn't even necessary given my use of listeners.

##To Do
I feel like the look of the game could use a lot of work - maybe add in at least some background colors and also the color of the button pressed doesn't stay that way if you click elsewhere. That's a simple element.classList.add("clickedButton"). I wish I did that instead of using CSS element:focus.

There's also a lot of JS that I could split into more functions to further improve readability but that comes at the cost of either global variables for elements or repeating myself which increases lines of code. At the end of the day, I'm not sure what exactly I should do yet.

##Technologies
Built with HTML, CSS, and JS. Utilizes icons from [Icons8](https://icons8.com)
