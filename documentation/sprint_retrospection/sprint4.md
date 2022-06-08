# Sprint 4 Retrospective
### 1. Stories for sprint 4
| User stories                                                                                                                               | Points|Completed?
|1.As a user, I want to see the summary of my game board at the end off the game to see my perfomance.                                       |10      |YES
|2.As a user, I want to be notified if my guessed word is none-existant (not a proper english word) so that I can change the word.           |10      |Yes
|3.As a user, I want to be able compete with my friends when guessing -the-word-the-day                                                      |35      |Yes
|4.As a developer, I need to Store the word of the day in a database                                                                         |15      |NO(7)
|5.As a user, I want to have a new WORD-OF-THE-DAY on a daily basis so I can find a new challenge.                                           |15      |Yes
|6.As a user, I want my board to remain with my guesses even if I refresh the page.                                                          |20      |Yes
|7.As a user, I want to challenge my friends by setting a word for them to guess.                                                            |10      |Yes
|8.As a user, I want to see my friends guess attempts when using the multiplayer mode of the game                                            |35      |Yes
|9.As a user, I want to know when my account has been successfully been created                                                              |15      |Yes
|10.As a user, I want my password to be stored safely in the database                                                                        |15      |Yes
|11.As a developer, I need to check if the user trying to reset the password is the valid user that is registered on the database            |10      |NO(7)
|12.As a user, I want my login sessions to be recorded and stored safely in the database to make it easier to access my account .            |20      |NO
|13.As a developer, I want to be able to access the log of information stored on the database.                                               |35      |NO(15)
|14.As a developer, I want to log the time and date when a user logs in, as well as their name and ID and store it in the database.          |35      |NO(15)
|15.As a developer, I want to capture the guess made by a player as well as the players’ name, ID and date and store it in the database.     |35      |NO
|16.As a user, I want to see my friends guess attempts when using the multiplayer mode of the game                                           |35      |YES

# Sprint velocity = total points of completed stories/total number of sprints
                  = 244/4
                  = 61           

### 2. Retrospective:
We now have two game play modes, namely single player and multiplayer(2) modes. User accounts can be created and their credential are
stored in a secured database. We are now able to implement some persistance with the data by storing user infomation by date and by 
the user action. We are also able to ensure saftety in user login information by encrypting the password.

### 3.What the team did well
Team members pushed their change to the remote branch to prevent long lived branches which cause big merge conflicts.
Team members were able to finish most of the stories of which a lot of them were comparable to epics
The team was able to implement key functionalities 
More Javascript /functionality was implemented.

### 4. What went wrong
The number of issues in the backlog was large. The trunk got broken a few times during the sprint and a great deal of time had to 
be appointed to fixing it. The credentials of the login we mistakenly commited. There were a lot of big stories that had to implemented.
Some of the functionalities got broken and had to be fixed a few times along the run.

### 5. What could be improved
Breaking down big stories into smaller more manageable and easily implementable stories. Writting tests prior to implementation so that it is
easy to track progress and have assurance that the code that is merged to the trunk does not break it. Imrpove time management and estimation of
user story durations. 




