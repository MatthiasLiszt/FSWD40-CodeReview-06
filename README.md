# MediaThek

## short description

some bootstrap json catalog thing for the purpose of a code review

## long description

You have a lot of Media objects in your apartment like CDs, Books, DVDs, Comics - and it is finally the time to categorize them. As a start, you need a web page that is saving them in a JavaScript  data structure and then render that list on the screen (aka create HTML on-the-fly).


Title (string)

Type (CD, Book, DVD, Comic)

Author (string)

Genre (possible selections: “Rock”, “Pop”, “SF”, “Crimi”, “Horror”, “Comedy”, “Drama”, “Documentary”, “Children”... feel free to add your categories)

Publisher (string)

Image (URL link)

Short Description (string) - used for Bonus Points

Rating (1 to 5) (hint: used for the display of the stars)


Base Points:

(20 points) Create a data model based on this input specification. Feel free to use an array of “classic old” JavaScript object, or to wrap your inputs in ECMA6 classes that are stored “somehow”. Create at least 2 test Media items per type CDs, Books, DVDs & Comics => total  at least 8 test Media objects.

(20 points) Use that data model to populate your objects on the screen (hint: to get the bonus points more easily, organize that part of your code as a JavaScript function. If you feel stuck, create an HTML that resembles the structure that you want to present, then move to the Bootstrap part to get enough points to pass this CR).

(10 points) create a visually appealing rendering of all the Media objects saved in your data structure. Use following images as a hint (not as a final design solution!!!) on how to organize your page, then improve: