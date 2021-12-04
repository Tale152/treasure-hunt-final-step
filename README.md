Simple react app for a treasure hunt created for my friends.  

This web app is deployed automatically on Heroku using [this action](https://github.com/Tale152/treasure-hunt-final-step/blob/master/.github/workflows/deploy.yml) and is available at [king-treasure-hunt.herokuapp.com](https://king-treasure-hunt.herokuapp.com/) .  

Not my best code, but I need something as fast as I can.  

I decided to only run the app (and not build it) in the Dockerfile because I need to keep the keys to win secret, even if my friends come here to cheat; to obtain this in the fastest way possible without having to create a backend server to verify keys, I decided to store the keys in **environment variables** (that are not reachable from a built react app... or at least I wasn't able to).  
**Said variables are set directly on Heroku (or in the docker-compose file)**.

There are the environment variables to keep in mind while using this web app (all starting with REACT_APP due to React environment variables restrictions):
- **REACT_APP_FIRST_KEY**, **REACT_APP_SECOND_KEY**, **REACT_APP_THIRD_KEY**, **REACT_APP_FOURTH_KEY**:  
In the landing page there are 4 textboxes that corresponds to this four variables.
- **REACT_APP_FINAL_KEY**:  
Once the fist 4 keys are guessed, there will be another textbox to input the final key.
- **REACT_APP_FINAL_PAGE_TEXT**:  
Message for the winners.  

There are also 3 additional variables used to set parameters to **send an email** when a step is completed. You don't need to specify them, the mail simply won't be sent.  
If you want to send a mail, [here](https://www.youtube.com/watch?v=NgWGllOjkbs) is a tutorial of what you need to do.
- **REACT_APP_EMAILJS_USER_CODE**
- **REACT_APP_MID_MAIL_TEMPLATE**
- **REACT_APP_FINAL_MAIL_TEMPLATE**