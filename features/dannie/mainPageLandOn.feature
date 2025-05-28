@dan18
Feature:User able to land on main page successfully
As a user
I want to navigate through the main page modules
So that I can access different sections of the website

        Background:
                Given user is on the main page



        @dan18-1
        Scenario:Verify that user is on the main page


                And user able to see the Design,Manufacturing and About module on the main page


        @dan18-2
        Scenario:Verify that user able to see Design Module


                And user able to see subpages of Design module

        @dan18-3
        Scenario:Verify that user able to click to subPages of Design Module


                And user able to see PcbaPage under the Design module and click it
                And user able to see MechanicalPage under the Design module and click it
                And user able to see EmbeddedSoftwarePage under the Design module and click it

        @dan18-4
        Scenario: user able to see Manufacturing Module

                And user able to see subpages of Manufacturing Module

        @dan18-5
        Scenario:Verify that user able to click to subpages of Manufacturing Module

                And user able to see ComponentsSupplyPage under the Manufacturing module and click it
                And user able to see PcbAssemblPage under the Manufacturing module and click it
                And user able to see BoxBuildPage under the Manufacturing module and click it



