task-lite
This is a slimmed-down version of the TASK. I have stripped excess bower data and 'node_modules' to reduce the overall size and ease of use for you.

I have left the Gruntfile.js in the root, so you can see which files are used from bower and minified.

NOTES:
- Bower installed angular was problematic with 'sb-admin-2' and so I used the angular as recommended by sb-admin-2 (see /js)
- 'scss/modules/_tables.scss' has a few bespoke tweaks to the responsive table - most notable is the cool feature of using the custom 'data-title-rt' to make 'Email' and 'Edit' strings, together with custom breakpoints
- use 'js/app.js' to edit the targets for sales and production - this should change colours of panels according to status (red = low, orange = in progress, green = on or better than target)
- In real world, this data would have come from a database, together with list of car types, which staff were assigned to departments, groups etc, so we could even track how efficient each group was during production... I really could have gone crazy with this task! :-) ... was even thinking of flagging staff attendance, assuming the company had an automated check-in id swipe (glad I did knew when to STOP!)


Happy to answer any questions you may have

Many thanks
Alex

