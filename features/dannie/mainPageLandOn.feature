@dan18
Feature:User able to land on main page successfully
        As a user
        I want to navigate through the main page modules
        So that I can access different sections of the website

        Background:
                Given user is on the main page



        @dan18-1
        Scenario:Verify that user is on the main page


                Then user should see the Design module on the main page
                And user should see the Manufacturing module on the main page
                And user should see the About module on the main page


        @dan18-2
        Scenario:Verify that user able to see Design Module subpages


                When user hovers over the Design module
                Then user should see "PCBA" subpage under Design module
                And user should see "Mechanical Design" subpage under Design module
                And user should see "Embedded Software" subpage under Design module


        @dan18-3
        Scenario Outline: Verify that user able to navigate to Design Module subpages
                When user clicks on "<subpage>" under Design module
                Then user should be redirected to "<expected_url>" page
               

                Examples:
                        | subpage           |  expected_url                               | 
                        | PCBA Design | https://www.dannie.cc/pcba-design                 | 
                        | Mechanical Design | https://www.dannie.cc/mechanical-design     | 
                        | Embedded Software | https://www.dannie.cc/embedded-sw           | 


        



