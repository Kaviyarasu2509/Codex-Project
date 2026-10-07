# Project gallery photos and slideshows

Put each project's photos inside its own folder. One folder = one project card.
The folder name becomes the project title. The first photo is the card cover.
Use 01, 02, 03 etc. to control photo order; photo 10 comes after photo 9.

Example:

software/mobile-apps/food-delivery-app/
  01-home.jpg
  02-login.jpg
  03-menu.jpg
  04-cart.jpg
  05-payment.jpg

This creates ONE card titled Food Delivery App with FIVE photos.
Click the card to open the animated slideshow. It advances every 4 seconds,
with Pause/Play, previous/next buttons, photo dots, keyboard arrows and mobile swipe.
Hover pauses playback; manual navigation stops autoplay.
Reduced-motion preferences disable autoplay and transitions.
Closing the preview stops its timer. Single-photo projects work too.

Available category folders:
software/ai-ml
software/deep-learning
software/php
software/react
software/web-development
software/mobile-apps
hardware/embedded
hardware/iot
hardware/robotics
mechanical/fabrication
mechanical/design-analysis

Supported photos: JPG, JPEG, PNG, WebP and AVIF.
Repeat the project-folder structure in any of the categories listed above.
Loose photos directly inside a category still appear as individual project cards.
Photos outside these categories are ignored; empty folders do not create cards.
Restart the dev server after adding photos; rebuild and deploy for the live website.
Use descriptive filenames and resize very large photos for faster loading.
