import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }


  blogPosts = [

    {

      date: 'March 31, 2019',
      tags: 'Machine Learning, Data Science',
      title: 'Collecting and Preprocessing Data for a Smart Parking System (Pt.1)',
      readTime: '5min',
      content:

        "<p>Campus parking for the average college student...well, kind of sucks. </p>\
        <p>There's really just no way around it; it's an inescapable truth, a fact of life that's no easier to swallow than \
        the fact that most things that make us feel <strong>really, really</strong> good need to be consumed in moderation (see <a target='_blank' href='https://www.google.com/search?source=hp&ei=jgGhXM_AII7usQXtmpCoDg&q=pizza&btnK=Google+Search&oq=pizza&gs_l=psy-ab.3..0i131i67j0i67l3j0l3j0i131j0l2.1099.1665..1840...0.0..0.160.818.0j6....2..0....1..gws-wiz.....0..35i39j0i228.Fikw0ev1puM'>pizza</a>).</p> \
        <p>Time and time again we are faced with the same dilemma: pull up to campus with 10 minutes to spare. Do we accept our fate, park in one of the many open spots on the outskirts of campus, and power walk to class? But, wait! \
        There's always that (small) chance there could be an open spot right next to the building we need to go to! And if that lot is full, there must be something closer, right? Attempting to get a closer spot means taking the risk of spending 8 of those 10 precious minutes stuck in traffic only to find there is nothing available. We're left \
        still having to park in Egypt but with the added bonus of being late for class. Ouch.</p> \
        <div class='blog-image'><img width=400px; height=300px; src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/running-final.jpg'/><div class='description-box'><p class='image-desc'>Me running a mile to class after wasting 10 minutes trying to find a closer parking spot. 🏃🏼‍♂️💨</p></div></div>\
         <p>This cold reality is what spurned the idea for my senior capstone project: <strong>Smart Lot</strong>, a (mostly) cheap and intelligent system that stores real-time information about parking lot availibility along with \
         a corresponding client application that will allow users to consume this availibility information in order to make better decisions on parking. The technical gist of the idea is as follows: </p> \
         <p><i>get a Raspberry Pi with an accompanying camera module, put it on the top of my school's Computer Science building, and have it send images of the parking lot to an API which then would use some type of object detection model to figure out where cars are in the image. If a detected object's bounding box overlaps with pixels that are determined to be within a spot, \
         update that spots availibility in a database to be 'occupied'. A native and/or web application could then pull this data from the DB through an API and present the information to the user via a map. </i> Simple enough, right? (The actual proposal used to get the project accepted can be read <a href=https://s3.us-east-2.amazonaws.com/matthewrice-xyz/smart_lot_proposal.pdf>here</a>).</p> \
         <p>Well, the problem is that I'm certainly no expert in Data Science or Machine Learning. Granted, I'm no slouch either. I've passed two Data Mining classes and am mostly familiar with the innerworkings of a convolutional neural network when used for image classification and the steps carried out when \
          mining data (known as the KDD process), but I have never tackled a real-world problem like this before. And as programmers, we are all about reusing and repurposing code as opposed to reinventing the wheel. So, the search for an open-source, pre-trained model was on.</p>\
         <p>...To make a long story short, none of the open source object detection models I could find were anywhere near accurate enough for this use case. \
         They just didn't lend themselves to the angles at which the images were being captured. Below is an image of the parking lot taken from the Raspberry Pi:</p> \
         <div class='blog-image'><img width='300px' height='400px' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/rain.jpg'/><div class='description-box'><p class='image-desc'>A rainy day in Ruston, Louisiana. 🌧</p></div></div> \
         <p>As you can see, the view of the cars is not quite top-down but not quite head-on either; it is somewhere in between, and the two pre-trained models I found were only accurate when dealing with the two extremes. Of course, a fully top-down, bird's eye view of the lot would be ideal in all cases, as it would allow for all of the spots and vehicles to be uniform in size and angle. Capturing images at the angle \
          shown above causes more than a few problems for an object detection model, all of which stemming from fact that both the size of the spots/vehicles and the angle at which they are captured change as you move towards the edges of the image. But, without roof-access to a <i>really </i> tall building adjacent to a parking lot on campus, I was forced into flexing my wrinkled, wet brain muscles and finding another solution. \
          </p>\
          <p>With the Pi on the roof, I knew that starting my own data collection process would be as easy as writing a script to automate the capturing and storing of an image and running said script every 30 minutes with a cron job. \
          The following BASH script (camera_script.sh) seemed to do the trick: </p> \
          <div class='code-block-container'> \
          <div class='code-block'> \
          <code> \
          #!/bin/bash </br> \
          DATE=`date +%Y-%m-%d-%I\:%M%p` </br>\
          raspistill -o /home/pi/lot_images/$DATE.jpg </br>\
          \
          </code> \
          </div> \
          </div> \
          <p>And setting it to run every 30 minutes involved creating a crontab process by running <code class='inline-code'>crontab -e</code> command in the terminal, placing the following line into the editor, and saving the file:</p> \
          <div class='code-block-container'><div class='code-block'><code>*/30 * * * * /home/pi/camera_script.sh</code></div></div>\
         <p><i>To Be Continued...</i></p> \
         " 



    }


  ]

}
