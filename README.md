# b7a9-career-hub-wahid9000

***
Things I have done in this project:

* LiveSite Link -> https://jobs-corner.netlify.app/

* Set up react router to route from one page to other easily.

* I have added a navbar.

* I have added a Header-Banner.

* I have added a 'Job Category List' section and the information are fetched from 'category.json' file.

* I have added a 'Featured Job' section and the information are fetched from 'jobs.json' file.

* I have implemented "Show All Jobs" button functionality where initially Four Jobs will show and later by pressing the button all the Jobs will get displayed.

* Clicking on the 'View Details' button the user can go to 'Job Details' page. This is done by adding a loader on the route that fetches job information from the 'jobs.json' and then accessing the job id using useParams() hook. After that, using useState() hook we matched the params.id with the given id using find method. In this way, I performed routing on the Job details page.

* In Job details page, when I press the button 'Apply Now' all the information of the job are stored in the local storage based on id.

* Then, Getting the information of the applied jobs from local storage, I showed them to the 'Applied Jobs' page. 

* In applied jobs page, I can also filter the jobs based on "Remote" & "Onsite".

* In the statistics page, I created an 'Area Chart' that shows my assignment marks in different assignments complete so far.

* In blogs page, I have answered the questions.