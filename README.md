# The Emoji Movie

An emoji-based `setInterval` project that, despite being a set of tiny terminal animations, is still better than the film of the same name.


### Introduction

The amazing thing about code is that it runs nearly instantaneously. But this can actually be a problem; how does a super fast computer interact with slow, slow, slooooow humans? The answer: the computer waits. A LOT.

The way we make the JavaScript interpreter slow down to human speed and wait for us is primarily through a technique called callbacks. What we do is pass the code we want to run to a `node` (or browser) function, and that built-in function is in charge of running it later, at the appropriate time for the human-speed user. When the user clicks to switch to dark mode, or a message comes in from another slow human, our environment (usually `node` or a browser) runs the code we told it to in that situation.

And that's asynchronous code!


### Project Workflow

* If you ever get stuck in a loop, or impatient for the animation to end, remember that you can exit out of any terminal application with Ctrl-C!
* There is no `main.js` or (for the most part) `process.argv` or `jest --watch-all` for this project. Instead, we'll be working through a simpler workflow: running `node` with a filename for each of our emoji animation functions. After you write `badDay.js`, you can run it via `node badDay.js` and make sure you got the result you wanted.
* You will have to pull in the array from `day.js` for each and every one of the files you make. By putting it in it's own file, we can simply refer to that data any time we want via `require`, rather than have to copy and paste it into each of our files. (And if you want to add an emoji, you can do it in one file, `day.js`, and all of your other files will grab the new data when run.)


### Tasks

* `badDay.js` - goes through the array from the start to the end, displaying each one for one second (see the next section for a full walk-through of this one!)
* `goodDay.js` - same as `badDay`, but it goes through the array from back to front.
* `slowDay.js` - same as `badDay`, but it runs the next-emoji function every 3 seconds instead of every 1. (Feel free to use CTRL-C to exit out of the function early once you see it works! 3 seconds per emoji can add up when you're trying to get back to work on it.) 
* `timeMaster.js` - same as `badDay`, but it takes in an argument via `process.argv` that's a time for your interval. If your user wants to switch emojis every 5 seconds or 10 seconds or half a second, they can customize the interval by entering a time when running the app.


### Bad Day - A Walkthrough

This is a step-by-step guide to making `badDay.js` work. After that, the rest of the functions are about modifying the basic version for a deeper understanding.

* Import `day` from `day.js` to get your array of emojis.
* Because we're doing a loop (if not a standard one!), having an `i` variable that our function can check and change will be helpful. Make one! It should probably start at 0, so we can hit the first value in our array once we start.
* Now let's declare our function. Name it whatever you want, and let's keep the code simple for testing purposes: just a one-line function with `console.log('hi')`, and we can move on to seeing if we can run it every second.
* Now that the function is declared, let's tell `node` to run it. Pass the function to `setInterval` (just our function's variable name, DON'T call it; we don't want to pass a return value, but the function ITSELF), along with a second argument, a number of milliseconds for an interval between function calls. `1000` is a good number for it!
* Try running our app with `node badDay.js`. You should see "hi" printed every second to the screen. Well done! Because we're not stopping it in any way, though, you'll have to hit CTRL-C to exit.
* Let's print out something more interesting. `console.log` our `day` array's value at our current `i`. We haven't changed `i`, so it should still be `0`. Run our app again, and we should see the ZZZ emoji printed out every second.
* For a better experience, play around with a message to display at the start, and with `console.clear` to get rid of emojis you've already printed.


### Next Steps

* Go through each of the tasks in the Tasks section!
* Then do the Stretch Goals.


### Stretch Goals

* `timeLoop` - when it hits the end of the array, it starts at the end (requires CTRL-C to exit, though!)
* `manualDay` - use `setTimeout` instead of `setInterval`. It runs your function after a set time, but only once. You'll have to set up a timeout again each time, but you'll know it works when you're still able to get the same display!
* Add your own emojis that tell a different (better?) story when iterated through.
* `accelerator` - lower the time between function calls every time it's called
* Do something crazy. Show it to us on Monday!
