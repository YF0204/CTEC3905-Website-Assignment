# Project Summary
For this assignment, I will be building a semantic HTML5, CSS and JavaScript website with a responsive design. I have decided to make the website based on video gaming as it is one of my greatest passions. From this module, I have learnt that when you are creating a website you must conform to information architecture standards. This means that websites should help users effortlessly find information and complete tasks, in order to create a high level of usability. During this assignment, I plan to achieve something along those lines. Below you will find my development process, along with any issues I faced & resolved and final thoughts.  


=======
### Starting Off - Initial Ideas

### Webpages, layout and structure
* Five webpages - Index (Homepage), Hottest Games (Best games available), Reviews (Review of games), About Me (A page about myself) and a gaming profile (Users can enter and save their gaming background).
* Target Audience - Gamers or people who are interested in taking up gaming as a hobby.
* Colours - Grey background, black font and blue footers.
* Font - Helvetica or Calibri
* Logo - Located in the top corner
* Consistent, user-friendly and accessible design.

### Coding the layout and structure

* I started by coding the navigation bar and the layout. Each article is displayed in its own border so users can easily identify the different content.
* I added in basic styles to edit the body, header and footer such as font family, colour, align, margin etc.
* I added a media query in the stylesheet to make the website responsive. The website displays correctly on a phone, tablet and desktop.
* The navigation bar at mobile and tablet view squashes into a box so users don't have to scroll across to the other links.
* The images and videos are enlarge and move accordingly when the screen becomes smaller.
* Also, I tried to use HTML5 tags as much as possible. However, I couldn't seem to stop using divs so I left these in to avoid any issues.

### Adding the core functions

* The core functionality of the website is controlled by JavaScript.
* On the hottest games page, there is a Wikipedia API which brings in search results to a list underneath the page. I used the lab work to code this onto my website.
* The review page contains buttons that display the score of a review. This is controlled by a simple 'Get Element by ID' function.
* The page about myself contains two seperate slideshows. The code flicks through different images and displays them on the screen.
* Lastly, another core function, which I added was the local storage feature. This allows users to create and update a gaming profile which is stored in local storage, when you inspect the browser.

### Final touches

* To finish off the website, I added in relevant content such as images and videos (in iframe tags).
* Aligned various elements such as the header, footer and images that didn't look right in tablet or phone view.
* Validated all files with no errors.
* Added comments to all files to explain what the code is doing.

### Issues Faced/Solved
* I had trouble setting up the GitHub repository. It took time getting use to the commands on CMD but after a while, it became quite easy to learn and use.
* Many times when I tested the responsiveness of my website, the content would not display appropriately. There are some points where the website dosen't look right but from the main screen sizes (phone, tablet and PC) the website looks fine. 
* The local storage took a lot of time to get working. However, after a while, I realised it was the inner.HTML of the variable that was preventing it from working. I changed this variable to a value and it began to work.

### Wireframe sketches
Here are some early sketches I did of the website. These sketches include what the website would look like in every screen size.

**Mobile**
![mobile wireframe](https://user-images.githubusercontent.com/23192621/33622544-0635ccbc-d9e6-11e7-8578-9038f85638e9.jpg)

**Tablet**
![tablet wireframe](https://user-images.githubusercontent.com/23192621/33622587-280d4c0c-d9e6-11e7-8a6e-7127b645fdd0.jpg)

**Desktop PC**
![pc wireframe](https://user-images.githubusercontent.com/23192621/33622600-33c7f128-d9e6-11e7-8691-54747928a5a3.jpg)

**Homepage** - A standard homepage which will contain latest news & events and trending news displayed in a slideshow controlled by JS.

![homepagecapture](https://user-images.githubusercontent.com/23192621/32460797-cdd99d42-c32b-11e7-9bc2-b6c5a17b7537.PNG)

**About Me** - A page which provides information about myself.

![aboutmecapture](https://user-images.githubusercontent.com/23192621/32460875-1330749c-c32c-11e7-807b-dd5818ff6376.PNG)

**Gaming Profile** - A user input form coded by JS where people can create and update a gaming profile.
![contactformcapture](https://user-images.githubusercontent.com/23192621/32461004-69875414-c32c-11e7-81d5-65f4c37cda18.PNG)

=======
### References and adaptation explanations
* Simple HTML5 LocalStorage Example by Olympsys - https://www.youtube.com/watch?v=Jc_Yycz7MEc

This was the initial snippet of code that helped me create the localstorage function. However, the issue was it used on click which is out of date. Therefore, I used the lab work to help me create an event listener to make the code more modern.

* Change image by Mouseover by McNealDataTutorials - https://www.youtube.com/watch?v=izfDLTK9kjo

This piece of code I used to make images change when they are hovered over.

* Get Element by ID Button by W3 - https://www.w3schools.com/jsref/prop_pushbutton_value.asp

I used this function to reveal scores with a button on my review page. This code contained on click so I had to change it to add event listener. 

* JS Slideshow by W3 - https://www.w3schools.com/w3css/w3css_slideshow.asp

This slideshow code I used on my About me page, however I had to change the timeout section so the images would change every 3 seconds.

* CSS Keyframe Animation by The Net Ninja - https://www.youtube.com/watch?v=PjR97QzOrJM

This video helped me create a keyframe animation. I altered the CSS to make my animation move upwards.

### User testing 
* I had two people test my website. The first person was someone who was interesed in taking up gaming as a hobby & the other person was slightly older and more well known with video games.
* The first person enjoyed the website, appreciated how usable it was at different sizes and was generally satisfied with the content & navigation.
* The second person liked the website too but felt it was a bit simple at times. She also said the website was easy to use in different screen sizes.
* Both users reported no errors while interacting with the website but did notice some elements out of alignment.
