# Water Sort Puzzle Game 
# Project Overview 
- Project Name: Water Sort Puzzle Game (with Azure Services)
- Created by:-  Sunny Jaiswal
 - Date: 21/01/2024
# Project Description:- 
The Water Sort Puzzle Game is an interactive and intellectually engaging web-based application designed to bridge the gap between entertainment and education. In response to the contemporary challenge of finding digital experiences that seamlessly blend enjoyment with cognitive development, this project introduces a captivating puzzle game that not only entertains but also stimulates critical thinking, problem-solving, and strategic planning.
# Prerequisites :
 - An Azure account with an active subscription. <a href="https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F" target="_blank">Create an account for free.</a>
 - Or simply login to your Student Account
   
Youtube Video ---- https://www.youtube.com/watch?v=TfojkT9Zi98

Project Demo URL ---- 
https://gray-field-06700e600.4.azurestaticapps.net/

Project pdf url ---- https://drive.google.com/file/d/1aM8oAaRaLeOkt5_Ctv4pwm15-1fx85_I/view?usp=sharing

# Industry Type :-
Lifestyle
# Core Azure Services :-
•	Azure App Service (For hosting the website)
•	Monitoring Alert (Tracking of new user login to report)
# Azure AI Services :
•	Azure AI Translator
# Web Technologies Used :
•	HTML
•	CSS
•	JavaScript
# IDE Used :
•	Visual Studio Code
# Steps Followed While Deploying :
First you want create a repository to git hub
To add a repository to GitHub, follow these steps:
1.	Sign in to GitHub: Ensure you are signed in to your GitHub account.
   ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/eae0594c-b763-4f62-acce-9fa9b86ad086)

2.	Create a New Repository:
•	Click on the "+" icon in the top right corner.
•	Select "New repository."
3.	Fill in Repository Details:
•	Provide a name for your repository.
•	Add a description (optional).
•	Choose public or private visibility.
•	Initialize this repository with a README if you want.
4.	Create Repository:
•	Click the "Create repository" button.
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/2453a703-1e9e-4b8e-bd72-d77c62eb8099)

5.	Copy the Repository URL:
•	Once the repository is created, copy the repository URL. You can find it on the repository page.
6. Now open azure portal
 ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/43efcdb2-3386-4195-ad17-7b78d13f0d6c)
7. Create a Resource Group
   1.	Sign in to the Azure Portal:
•	In the left navigation pane, click on "Resource groups."
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/d2b345ef-88d8-4260-8a7b-6a2de3b89df2)

  8. create resource group
     ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/8ba47652-cec3-4430-8ddb-a5c6ef793b77)
 9. Click the "Review + create" tab to review your settings.
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/43ad687b-b770-48cd-a0bf-80e3907bd20c)
10. Now create App Service
    
   •	In the left navigation pane, click on "App Services."
   ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/98240e00-39c1-475b-b83e-61a448dabcd3)
   
 11. •	Click the "+ Add" button to create a new App Service.
  ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/8f1e093e-b623-46b4-986e-c19012b3fb3f)

  12. now choose Azure static web App
  ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/7171acdc-0175-4a69-9f54-91d9b413e9a2)
   - Go to your Azure portal, find your Static Web App, and monitor the deployment process.
   - Now you can see your project url
     ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/fa29c5b9-a801-4d7e-9a89-93374c971f1f)


  14. Then •	In the left navigation pane, click on "Monitor.".	Alerts:
•	In the Monitor menu, select "Alerts."
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/e3fc02ab-e61a-472e-ab0f-5e32aa534cfc)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/37efee10-a30b-4146-acd4-2d60a636c4db)



15. •	Click the "+ Add alert rule" button to create a new alert rule.
    ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/6c29fe8b-87bd-43d7-9545-9cbffa345287)

16.   choose	Monitoring Alert (Tracking of new user login to report)
    ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/5b9a2477-bcd5-45ec-9d9b-9697f25ebcfc)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/d086d18b-dca5-476f-86c9-c441263666c8)

17. Now Create a Translator Resource
    ![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/da064748-de23-4e1e-98fb-650d0996e0c9)
18. 	Click on the "+ Create a resource" button.
•	Search for "Translator" and select "Translator" from the results.
•	Configure the resource settings (subscription, resource group, resource name, pricing tier, etc.).
•	Click "Review + create" and then "Create" to deploy the resource.
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/329acb4c-2812-4112-9a86-22b4b4c7a047)

18. Get API Key and Endpoint
.	Once the Translator resource is deployed, navigate to the resource in the Azure portal.
.	In the resource, go to the "Keys and Endpoint" section.
.	Note down the "Key1" (or "Key2") and the "Endpoint." These will be used to authenticate and access the Translator API.
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/45f4e93f-ad9c-4a5c-a3f6-0c88081f9211)
19. Now paste your Key1 to your javascript code .
20. Once you create all of this your project is ready.

# ScreenShots of Some Azure Resources :
Resoure Group
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/3958812c-5427-4716-b01c-fbc6a22c23ce)

App service
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/f927ad2f-8d0d-412e-8e02-b3cb81968446)

Alert service(Monitering)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/b430fb5b-2011-4e34-b6d8-bc842c29cf9b)

Azure AI Translator 
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/8c9a66ae-a552-4d49-9c38-efa306bdf69c)

# ScreenShots of the website after deploying :
Defoult page
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/688a7b9e-ac86-4ac0-aa47-2ee953bc46b6)

After choosing Spanish Language
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/4988e6cf-d511-4cc9-85a3-12c70ac64218)

After choosing French Language
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/361bc4c7-a180-4b5b-9260-1c092e544ac9)

Rules page
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/95e010be-51ee-4364-9c94-2f112126a2c4)




Screenshots of levels
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/397d9f52-a646-4d64-b808-5a9358aef0ea)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/a3744eaf-3202-4c47-8cf6-d70e8eb93d61)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/3ee4367f-b710-4c9c-9bd6-0be6e15ed0ef)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/93235f50-a653-471c-85e9-4a0b103f408b)
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/b7c9ec0f-0780-4803-8d57-127e01a54e48)

After Compleating a Game
![image](https://github.com/Sunny456123/liquiidsort456/assets/157024926/3e83f2fd-da14-45c1-83f6-deeaa36b3b3d)









    





















