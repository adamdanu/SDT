<h1 align="left">Automation Test</h1>

## Requirements
   installed feelio app on emulator
   
   change directory to stored automation script via terminal
## How to run

   ## task 1
  Run through terminal
  
    maestro test android/test/LoginPage --format html && mv report.html task1.html

note: it will run 3 cases inside folder LoginPage and create report task1.html

  ## task 2
  Run through terminal
  
    maestro test android/test/DiaryPage/createNewDiary.yaml --format html && mv report.html task2.html
note: 
- it will run createNewDiary.yaml and create report task2.html
- screenshot will be saved in root folder named beforeSubmission.png and afterSubmission.png


  ## task 3
  Run through terminal
  
      maestro test android/test/HomePage/monthSelector.yaml --format html && mv report.html task3.html
note: it will run monthSelector.yaml and create report task3.html

## Test Report

  ## Task 1
  How to open report task 1

  Run through terminal
  
    open task1.html

  ![image](https://github.com/user-attachments/assets/1ddca14b-6f39-46f6-a429-7011ab755cc8)

 ## Task 2
 How to opern report task 2

 Run through terminal

    open task2.html

  ![image](https://github.com/user-attachments/assets/33f14745-b80f-4257-86a8-a6c055488df8)


 ## Task 3
 How to opern report task 2

 Run through terminal

    open task3.html  

![image](https://github.com/user-attachments/assets/24475953-21a6-48bb-abae-a64ba01f0856)




## Additional note

- Test case can be improved to cover all apps
- In future might make automation to make preparing test data like in task 3 is automated, currently when i automated it and change the time backwards on device the feelio app will not respond
- Test structure can be improved
