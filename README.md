# Nexus-Hackathon
Energy-Mavericks Nexus HACKATHON project

## Project Overview
Generation of Electrical power using a water wheel. Giving an optimum performance by choosing the most effective components and circuitry for the school's load. Integration of the school's database in order to schedule time of turning on the gen based on school timetable.

##Problem Statement
The Lagos State University, particularly the Epe campus, is facing a severe shortage of electricity. This issue affects both students and staff, hindering academic activities such as laboratory work and practical exercises. The lack of power also leads to water scarcity, limited access to technology, and increased living costs for students. The inadequate electricity supply lasts for only about 3 hours per day, with the national electric supply offering light for an average of 2 days a week, lasting about 2-5 hours.

##Solution Approach
###Hardware:
The utilization of water flow to generate electricity through a water wheel is a traditional yet highly effective method. It involves harnessing the kinetic energy of a flowing water to rotate a wheel, which in turn powers an electrical generator through mechanical transmission units.
A water wheel, also known as a hydro power wheel or water turbine, is a device designed to convert the energy of flowing water into mechanical energy. It typically consists of a large wheel with blades attached around it’s circumference. When water flows over or under the wheel, it rotates thereby converting the kinetic energy of the water into rotational energy.
###Software:
The integrated software makes use of the schools database to track students timetable and teachers to receive instructions from teachers via the platform and switch on the generator.

##Technologies Used
###An amplifier: to amplify electric signals and produce dc current directly.
###MySQL: this is used to manage the database to check on which hostels are on internships and prevents power from wasting to their apartments. 
Also used to keep track of the classes likely to hold on the days [timetable of the school] and supply electricity especially for practical and faulty of agriculture powering of the incubators.(Technology stack: MySQL)
###Adafruit.io: the integrated internet of things that makes use of a button to send a yes signal to the system, which would allow current to flow to the exact class that needs that power supply.

##Detailed instruction on how to run the code locally
Open the app.js file using nodejs to run it on your local terminal.
cd to the teacher-app/ by typing "cd teacher-app" and run the app by typing "node app.js" in the terminal
On the landing page, fill in the teacher's or instructor's sign in details i.e Username, password, Accesskey.
You would be taken to another page, and there for the teacher's authority, yo can turn on the power supply for the hall venueor practical lab to be used.
Remember to turn off the power supply when done.



##Future Development Plan
A software system that helps optimize the use of the machine, i.e. conducting routine maintenance and giving the best decision for the time to make use of the system. (Python and GPT tool)
It also uses Databases to check on which hostels are on Internships i.e 400L and prevents power from wasting to their apartments. (Technology stack: MySQL and python)


