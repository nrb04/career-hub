
# This is a Assignment base project (JobSeeker)

A brief description of what this project does and who it's for




## Deployment

To deploy this project run

```bash
  npm install && npm run dev 
```
or 
```
yarn && yarn dev
````


## Lessons Learned

What did I learn while building this project? What challenges did I face and how did I overcome them?

* Chatgpt will take my job : 

  For this project I take lot of help from chatgpt. like localstroage,array problem, datashow problem and others. 
 
 * fontpage reload time show me website errorpage. the reason is react dom, when it enter the child page after that get back to my home is found my error after again I click home then show my home page that behind i can not give an array in card data load. but actual problem is dom componads 
 * 
    ````
     const filteredJobs = data.filter(job => appliedJobs.some(appliedJob => appliedJob.id === job.id));
     `````
     this also help from chatgpt. i dont want to get two data and make a array then loop in make final array,then final data show  . here my idea get two data and filter in and show the final data.
     
*  
