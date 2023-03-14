# Growth Engineer - FACTORIAL

- [The Challenge](#the-challenge)
- [My Solution](#my-solution)

## The Challenge

### 🖥 Your Job

Your job is to create a simple app with a backend and a client, with a special emphasis on quality. Feel free to use whatever tools you feel more comfortable with for the frontend and the backend, but those must be separated (single-page application). You’ll get extra points if the tool can be easily run on our machines.


### 💪 The Challenge

**Your challenge is to build a Frontend + Backend application that allows you to post and visualize metrics in a usable way.** Each metric will have a timestamp, name, and value. The metrics will be shown in a timeline and must show averages per minute/hour/day and persisted in the database.

The maximum time for the challenge is 8 hours in the time frame we establish. Feel free to use any tools you need, but remember to keep your code accessible on the public GitHub repository and use one of our technologies (React, Next.js...). If possible include both the backend and frontend code in the same repo.



### ✅ To evaluate

Once you deliver the challenge, we’ll schedule a second meeting with the rest of the team to evaluate your coding process, your ability to write clean code, and beautiful CSS (you can use preprocessors like Sass, Stylus, CSS-in-JS,..., or vanilla CSS), your ability to analyze and test your solution, and your capacity to prioritize the project and your decisions.

--- 

## My solution

### 💻 Tech Stack

- NextJs
- TypeScript
- Sass
- [MUI Material](https://mui.com/)
- [Chart.js](https://www.chartjs.org/)
- [Faker js](https://fakerjs.dev/)
- [Mongodb](https://www.mongodb.com/it-it/cloud/atlas/register?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646473&adgroup=131761130372&cq_cmp=14412646473&gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0mjz-PsdeRDEMPk4-JwptSmvSYWAd4EzIXWIuRzXUCfrbUGEe3wGoaArD-EALw_wcB)

### 👣 The App

My app collects the steps registered by users. 
When you go in, yo can see a main layout with two sections: Go to the [dahsboard](#dashboard-section) or go to the [users section](#users-section)

#### Dashboard section

Here you can see the info added by the users.

At the top, you will see information such as the total number of registered users in the app, the total steps registered by those users and also the average number of steps.
This average will be displayed depending on the time unit you choose in the select input. 

In addition, here you can see a graph with the number of steps over time choosing the unit of time you prefer: per day, per hour or per minute.


#### Users section

In this section, you can see the info of all registered users at that time in our database.
Also, you can add or remove users if you want 🙂


### ⚙️ Make it work!

You have to run `npm install` in your local to install the necessary dependencies.
Then, run `npm run dev` to start it; the app will be up and runing on [http://localhost:3000](http://localhost:3000)!

You can also see the app working [here!](https://factorial-challenge-three.vercel.app/) 


### Thanks and ¡¡Enjoy!!

![thanks](https://media.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif)




