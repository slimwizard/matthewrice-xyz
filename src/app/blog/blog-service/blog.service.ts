import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }


  blogPosts: BlogPost[] = [

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
        <div class='blog-image-container'><img class='blog-image' width=400px; height=300px; src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/running-final.jpg'/><div class='description-box'><p class='image-desc'>Me running a mile to class after wasting 10 minutes trying to find a closer parking spot. 🏃🏼‍♂️💨</p></div></div>\
         <p>This cold reality is what spurned the idea for my senior capstone project: <strong>Smart Lot</strong>, a (mostly) cheap and intelligent system that stores real-time information about parking lot availibility along with \
         a corresponding client application that will allow users to consume this availibility information in order to make better decisions on parking. The technical gist of the idea is as follows: </p> \
         <p><i>get a Raspberry Pi with an accompanying camera module, put it on the top of my school's Computer Science building, and have it send images of the parking lot to an API which then would use some type of object detection model to figure out where cars are in the image. If a detected object's bounding box overlaps with pixels that are determined to be within a spot, \
         update that spots availibility in a database to be 'occupied'. A native and/or web application could then pull this data from the DB through an API and present the information to the user via a map. </i> Simple enough, right? (The actual proposal used to get the project accepted can be read <a href=https://s3.us-east-2.amazonaws.com/matthewrice-xyz/smart_lot_proposal.pdf>here</a>).</p> \
         <p>Well, the problem is that I'm certainly no expert in Data Science or Machine Learning. Granted, I'm no slouch either. I've passed two Data Mining classes and am mostly familiar with the innerworkings of a convolutional neural network when used for image classification and the steps carried out when \
          mining data (known as the KDD process), but I have never tackled a real-world problem like this before. And as programmers, we are all about reusing and repurposing code as opposed to reinventing the wheel. So, the search for an open-source, pre-trained model was on.</p>\
         <p>...To make a long story short, none of the open source object detection models I could find were anywhere near accurate enough for this use case. \
         They just didn't lend themselves to the angle at which the images were being captured. Below is an image of the parking lot taken from the Raspberry Pi:</p> \
         <div class='blog-image-container'><img class='blog-image' width='300px' height='400px' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/rain.jpg'/><div class='description-box'><p class='image-desc'>A rainy day in Ruston, Louisiana. 🌧</p></div></div> \
         <p>As you can see, the view of the cars is not quite top-down but not quite head-on either; it is somewhere in between, and the two pre-trained models I found were only accurate when dealing with the two extremes. Of course, a fully top-down, bird's eye view of the lot would be ideal in all cases, as it would allow for all of the spots and vehicles to be uniform in size and angle. Capturing images at the angle \
          shown above causes more than a few problems for an object detection model, all of which stem from fact that both the size of the spots/vehicles and the angle at which they are captured change as you move towards the edges of the image. But, without roof-access to a <i>really </i> tall building adjacent to a parking lot on campus, I was forced into flexing my wrinkled, wet brain muscles and finding another solution. \
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
          <p>And setting it to run every 30 minutes involved creating a crontab process by running the <code class='inline-code'>crontab -e</code> command in the terminal, placing the following line into the editor, and saving the file:</p> \
          <div class='code-block-container'><div class='code-block'><code>*/30 * * * * /home/pi/camera_script.sh</code></div></div>\
          <p>Soon enough, the lot images came pouring in. The next step was writing a script to extract new images of all fully visible parking spots from the main lot image. </p>\
         <p><i>To Be Continued...</i></p> \
         " 
    },
    {
      date: 'April 6, 2019',
      tags: 'Machine Learning, Data Science',
      title: 'Collecting and Preprocessing Data for a Smart Parking System (Pt.2)',
      readTime: '12min',
      content: "<p>Quick recap of where we left off last time: I want to build a smart parking system but I can't find any pre-trained models for vehicle detection that are accurate enough for my scenario (big sad). Do I give up, cry a little, and binge watch Game of Thrones in its entirity for the 6th time? No! Do I collect my own data and train my own model? Yes! On we go. 🚀</p> \
      <p>As I mentioned at the end of the last post, I began collecting an image every 30 minutes so it was not long before I had more lot images than I knew what to do with: </p> \
      <div class='blog-image-container'><img class='blog-image' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/lotsolots.png'><div class='description-box'><p class='image-desc'>Lots of lots on lots on lots...</p></div></div> \
      <p>Keep in mind, the image above details a <strong>very</strong> small subset of the dataset that was collected. We're talking hundreds of lot images, each containing about 25 individual spots that would need to be extracted, labeled as either occupied or unoccupied, and saved as their own images. Doing this manually for thousands of spots would, of course, be an absolute nightmare much worse than those wherein you are being chased by a monster and you can't move your legs fast enough to run (is that just me?). \
      I had neither the money nor the academic clout to acquire worker drones to do this tedious bit of labor for me, so I was left with two options: dig in and do the work myself, or automate the entire process. Naturally, I went the automation route.</p> \
      <p>Using Python 3 as my weapon of choice, I began writing a script that would first iterate over an image of a lot and crop out each individual spot. Once again, the angle at which the images are being captured came back to haunt me, as it meant that the stride (or the value of pixels by which the crop box would need to be shifted to the right in order to move to the next spot) would need to be unique for each row. Also, the size of the crop box itself would need to be unique for each row, all due to the fact that the cars/spots grow in size as you scan down the image.</p> \
      <p>In order to start manipulating images I needed a good image library. The <a href='https://pillow.readthedocs.io/en/stable/index.html'>Pillow</a> module, which is a 'friendly' fork off of PIL (Python Image Library) that is compatible with Python 3, comes highly recommended and was easy enough to install with pip:</p>\
      <div class='code-block-container'> \
          <div class='code-block'> \
          <code> \
          pip3 install Pillow \
          </code> \
          </div> \
          </div> \
      <p>Like I mentioned earlier, I wanted to automate the entire process as much as possible, from extracting to labeling to saving. The pseudocode I came up with went a little something like this:</p>\
      <div class='code-block-container'> \
          <div class='code-block'> \
          <code> \
          <pre>\
unoccupied spots = 0 </br>\
occupied spots = 0 </br>\
for each row: </br>\
  for each spot: </br>\
    show spot </br>\
    wait for input </br>\
    if input is 'v' (for vehicle): </br>\
      save as 'occupied_{occupied spots}.jpg' </br>\
      occupied spots ++ </br>\
    if input is not 'v': </br>\
      save as 'unoccupied_{unoccupied spots}.jpg' </br>\
      unoccupied spots ++ </br>\
    hide spot\
      </pre>\
          </code> \
          </div> \
          </div> \
      </p> \
      <p>With this approach, the only work that would be required of me would essentially be letting the program cycle through each image and clicking 'v' if the spot being displayed is occupied or clicking the spacebar otherwise. \
      For thousands of images this would still take some time, but exponentially less time than if I were to do all of this manually. To make this work with actual code I needed to import certain modules that allowed me to interact with my machine. The full import list is shown below:</p>\
      <div class='code-block'> \
          <code> \
          from PIL import Image </br>\
          import os </br>\
          import psutil </br>\
          import sys,tty </br>\
          import subprocess </br>\
          </code> \
          </div> \
          </div> \
          <p>The <code>os</code> module is used when iterating over the directory of lot images. The <code>psutil</code> allows the program to iterate over the processes running on the machine so that the program can find the process displaying the spot image and kill it after a keypress.\
          The <code>sys</code> and <code>tty</code> modules help the program consume input from stdin without the need for prompting the user first, a task that was surprisingly hard to find information on how to accomplish.\
          Lastly, the <code>subprocess</code> module is used to bring the terminal back in to focus after each spot image is displayed. This was actually a huge time-saver because it kept me from having to manually click the terminal back into focus in order to give the input that would be used to label each spot image. </p>\
          <p>To actually iterate over the spots in each lot image, I first needed to play around with both the (x,y) coordinates for the starting points and the width and height values for the cropping box. After much frustration with the way in which the <code>Image.crop()</code> method is written (it's not very intuitive in the way it uses the input pixel values to construct the box), I finally found my starting points and my bounding box size. \
          The following bit of code handles iterating over all of the lot images and all of the spots in the first row of each image and calls an <code>extract()</code> function on each spot:</p>\
          <div class='code-block-container'> \
          <div class='code-block'> \
          <code> \
          <pre> \
for filename in os.listdir(image_path):</br>\
  # ignore .DS_Store file used by MacOS</br>\
  if filename=='.DS_Store': continue</br> \
  lot = Image.open(f'{image_path}/{filename}').rotate(1)</br> \
\
  # ROW 1 CROPPING</br> \
  crop_w = 200</br> \
  crop_h = 250</br> \
  start_x = 130</br> \
  start_y = 794</br> \
  stride_x = 190</br> \
  row_1_spots=10</br> \
  \
  for i in range(row_1_spots):</br> \
      spot = lot.crop((start_x,</br> \
      start_y, start_x + crop_w,</br>\
      start_y + crop_h))</br>\
      start_x += stride_x</br>\
      if i>3: start_y +=8</br>\
      extract(spot)</br>\
      </pre>\
          </code> \
          </div> \
          </div> \
          <p>The <code>extract()</code> function, which is shown in the following block of code, is where all the magic happens. It displays the image, uses the subprocess module to bring the 'code' process into focus (I was using the VSCode terminal), waits for and parses input, saves the new image accordingly, and, finally, kills the running process that is displaying the spot image. It then breaks from the while loop so that the next spot can be parsed and extracted. \
          Even when scripting I like to keep my programs as modular as possible so I wrote helper functions to handle saving the new image and killing the display process.</p> \
          <div class='code-block-container'> \
          <div class='code-block'> \
          <code> \
          <pre> \
def extract(spot): </br>\
  global occupied_spots</br>\
  global unoccupied_spots</br>\
  spot.show()</br>\
  subprocess.call('code')</br>\
  while True:</br>\
      key = ord(sys.stdin.read(1))</br>\
      if key:</br>\
          # 'v' key; occupied spot</br>\
          if key==118:</br>\
              save_image(True, spot)</br>\
              occupied_spots+=1</br>\
          # any other key; empty spot</br>\
          elif key!=99:</br>\
              save_image(False, spot)</br>\
              unoccupied_spots+=1</br>\
          kill_preview_proc()</br>\
          break\
      </pre>\
          </code> \
          </div> \
          </div> \
          <p>After working out the starting pixel coordinates, stride values, and bounding box size for the remaining rows, I was finally able to test out the script; and, hey, it worked like a charm! I had thousands of images of spots appropriately labeled and saved and all I had to do was tap a single key for each image (and write the script, of course...). The images below show some examples of the occupied and unoccupied spot images that were extracted:</p> \
          <div class='blog-image-container'><img class='blog-image' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/occupied.png'><div class='description-box'><p class='image-desc'>occupied spots that were extracted 🚙</p></div></div> \
          <div class='blog-image-container'><img class='blog-image' src='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/unoccupied.png'><div class='description-box'><p class='image-desc'>unoccupied spots that were extracted 🚫</p></div></div> \
          <p>Whew...that was kind of grueling, but now that it's done I can finally relax, right? WRONG! Now I have to train a machine learning model to recognize the difference between spots that are 'occupied' and spots that are 'unoccupied' using the newly extracted data, but I'll save those details for another post. </p> \
          <p>The full <code>extract_spots.py</code> script can be viewed <a href='https://s3.us-east-2.amazonaws.com/matthewrice-xyz/extract_spots.py'>here</a> (the Smart Lot project github is private for now). I'm sure it would not be difficult to manipulate the script so that it works for a similar use case. Also, I will be uploading the dataset to Kaggle once I'm done with the training process, at which point I will update this post with a link to the dataset; my hope is that others may find the images useful in some way.</p> \
          <p>If you've made it this far, I want to personally thank you. I also question your sanity 🤪. But, until next time...cheers 👋</p> \
      "




    }
  ]

  getBlog(title: string): BlogPost {
    return this.blogPosts.find(blog => blog.title == title)
  }

  getBlogs(): BlogPost[] {
    return this.blogPosts.reverse()
  }
}

export interface BlogPost {
  date: string
  tags: string
  title: string
  readTime: string
  content: string

}