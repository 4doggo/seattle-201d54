# Lab 11: BusMall
Read the document, in it's entirety, before beginning your lab. To view this lab assignment in it's own tab, click [HERE](https://codefellows.github.io/code-201-guide/curriculum/class-11/lab/){:target="_blank"}


## Problem Domain

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. The difference with BusMall is that instead of their catalog being placed in airplanes, they are placed on local busses while commuting through traffic.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you'll need to manage the size and the aspect ratio of the images. 

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

## User Stories

User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

> As a _____, I want _____, so that ___

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the clients need.

The development team will then create sub-bullets called ***Feature Tasks*** which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story. 

Below are your lab requirements in this format. Try and think up what the feature tasks would be for each story, once your done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

## Instructions

1. As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

    - Create a constructor function that creates an object associated with each product, and has the following properties:
        1. Name of the product
        1. File path of image
        
    - Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

    - Attach an event listener to the section of the HTML page where the images are going to be displayed.

    - Once the users 'clicks' a product, generate three new products for the user to pick from.

1. As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.
    - In the constructor function define a property to hold the number of times a product has been clicked.

    - After every selection by the viewer, update the newly added property to reflect if it was clicked.

1. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
    - By default, the user should be presented with 25 rounds of voting before ending the session.
    - Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

1. As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular. 
    - Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

    - After voting rounds have been completed, remove the event listeners on the product.
    
    - Display the list of all the products followed by the votes received and number of times seen for each. Example: `Banana Slicer had 3 votes and was shown 5 times`

### Stretch Goals

- Handle the display and voting for an arbitrary number of images
- Using a variable, declare in your JS how many images to show. 
- Based on that value, dynamically create that many ```<img>``` tags
- Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking.

## Resources

The assets for this lab can be found in your `class11/lab/assets` folder of your daily class repo.

Provided in your class repo is a suggested wireframe to follow while building out your BusMall application.

### Developer Style Guide

- Create a new repo for this weekly project called bus-mall at the root level of your `labs` directory.

- Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a `img/` directory.

- Include in your repository a `.eslintrc.json` file whose contents are copied from the `eslintrc.json` file in the class repository.

- Retrieve the assets from the `assets/` directory and place them in your image directory.

- Do today's work on a branch called `lab11-busmall`.

This is an individual assignment today, but you are free to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.

## Submission Instructions

1. When your work is complete and ready for submission, open a Pull Request from your current branch to `master`.
2. Submit the link to the above Pull Request to Canvas
3. Add a comment to this Canvas submission with answers to the following questions.
    - How did this go, overall?
    - What observations or questions do you have about what you've learned so far?
    - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
4. Once you've submitted your work, complete the merge of your current branch to `master`
