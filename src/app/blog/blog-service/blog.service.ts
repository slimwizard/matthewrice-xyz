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
      title: 'Collecting and Preprocessing Data for a Smart Parking System',
      content:

        "<p>Campus parking for the average college student sucks. </p>\
        <p>There's really just no way around it; it's an inescapable truth, a fact of life that's no easier to swallow than \
        the fact that most things that taste <strong>really, really</strong> good are actually quite bad for us (see <a target='_blank' href='https://www.google.com/search?source=hp&ei=jgGhXM_AII7usQXtmpCoDg&q=pizza&btnK=Google+Search&oq=pizza&gs_l=psy-ab.3..0i131i67j0i67l3j0l3j0i131j0l2.1099.1665..1840...0.0..0.160.818.0j6....2..0....1..gws-wiz.....0..35i39j0i228.Fikw0ev1puM'>pizza</a>).</p> \
        <p>Time and time again, we are faced with the same dilemma: pull up to campus with 10 minutes to spare before class starts. Do we accept our fate, park on the outskirts of campus, and make the 10 minute walk? But, wait! \
        There's always that (small) chance that there could be an open spot right next to building we need to go to! To even attempt this means taking the risk of getting stuck in traffic only to find that there are no availible spots, which subsequently means we \
        still have to park in Egypt but with the added bonus of now being late for class. Yay!</p> \
         <p>This cold reality is what spurned the idea for my senior capstone project: <strong>Smart Lot</strong>, a (mostly) cheap and intelligent system that stores real-time information about parking lot availibility and \
         a corresponding client application that will allow users to consume this availibility information in order to make better decisions on parking. The technical gist of the idea is as follows: </p> \
         <p><i>get a Raspberry Pi with an accompanying camera module, put it on the top of my school's Computer Science building, and have it send images of the parking lot to an API which then would use some type of object detection model to figure out where cars are in the image. If a detected object's bounding box overlaps with pixels that are determined to be within a spot, \
         update that spots availibility in a database to be 'occupied'. A native and/or web application could then pull this data from the DB through an API and present the information to the user via a map. </i> Simple enough, right? (The actual proposal used to get the project accepted can be read <a href=https://s3.us-east-2.amazonaws.com/matthewrice-xyz/smart_lot_proposal.pdf>here</a>).</p> \
         <p>Well, the problem is that I'm certainly no expert in Data Science and Machine Learning. Granted, I'm no slouch. I've passed two Data Mining classes and am mostly familiar with the innerworkings of a CNN and the steps carried out when mining data (known as the KDD process), but I have never tackled a real-world problem like this before. And as programmers, we are all about reusing and repurposing code as opposed to reinventing the wheel. So, the search for an open-source, pre-trained model was on.</p>\
         <p>To make a long story short, none of the open source object detection models I could find were anywhere near accurate enough for our use case. They just didn't lend themselves to the angles at which the images were being captured. Below is an image of the parking lot taken from the Raspberry Pi:</p> \
         <div class='blog-image' style='text-align:center;'><img width='300px' height='400px' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/rain.jpg'/></div> \
         <p>As you can see, the view of the cars is not quite top-down but not quite head-on either; it is somewhere in between, and the two pre-trained models I found were only accurate when dealing with the two extremes. Of course, a fully top-down, bird's eye view of the lot would be ideal in all cases, as it would allow for all of the spots and vehicles to be uniform in size and angle. Capturing images at the angle shown above causes more than a few problems, all of which stemming from fact that both the size of the spots/vehicles and the angle at which they are captured change as you move towards the edges of the image. But, without roof-access to a <i>really </i> tall building adjacent to a parking lot on campus, I was forced to find another solution.</p>\
         <p><i>To Be Continued...</i></p> \
         " 



    }


  ]

}
