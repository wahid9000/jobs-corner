# b7a9-career-hub-wahid9000

***
Things we have done in this project:

* We have added a navbar.

* We have added a Header-Banner.

* We have added a 'Job Category List' section and the information are fetched from 'category.json' file.

* We have added a 'Featured Job' section and the information are fetched from 'jobs.json' file.

* We have implemented "Show All Jobs" button functionality where iniotially Four Jobs will show and later by pressing the button all the Jobs will get displayed.

* Clicking on the 'View Details' button the user can go to 'Job Details' page. This is done by adding a loader on the route that fetches job information from the 'jobs.json' and then accessing the job id using useParams() hook. After that, using useState() hook we matched the params.id with the given id using find method. In this way, we performed routing on the Job details page.

* In Job details page, when we press the button 'Apply Now' all the information of the job are stored in the local storage based on id.

* Then, Getting the information of the applied jobs from local storage, we show them to the 'Applied Jobs' page. 

* In the statistics page, we created an 'Area Chart' that shows my assignment marks in different assignments complete so far.

* In blogs page, I have answered the questions.