# Holition Front-end Test - Calendar

This test is about building a calendar viewer similar in style to apple calendar.

This test is mostly about demostraighing good styling, animations should be used, such as on hover, selecting dates, etc...

The UI images attached are for guidance, they don't need to be copied exactly.

It is not required for everything to be completed if you are getting stuck on one part move on to other parts.
Unfinsihed parts we can simply talk about in the review code interview.
Don't spend an unreasonable about of time on this. Certainly nothing more than 10 hours.

## UI

### By month

* Clicking the current year in the top left takes you to the by year view below.
* As the month changes it should update the routing.
* The dots for events on days not not expected to be present, however if you want to hook them up, and you have time, that is ok.
* (Mobile) The 3 buttons on the top right are not expected to do anything
* (Desktop) "< Today >" should functions for moving the month, today taking you to the current month.
* (Desktop) the top search bar, plus is not required to do anything, search not required to do anything, the Day,Week,Month,and Year, only Month, and Year are expected to work, and should take you to the relevant views.
* both pages should be scrollable, either just in time loading in the months, or just load up to the next ~2 years.

#### Mobile
![](/doc/ui/mobile-month.png)

#### Desktop
![](/doc/ui/desktop-month.png)


### By year

* Clicking on a month should take you to the month view.
* As the year changes it should update the routing.
* (Mobile) Again the 2 buttons on the top right are not expected to do anything
* (Desktop) "< Today >" should functions for moving the year, today taking you to the current year.
* (Desktop) the top search bar, plus is not required to do anything, search not required to do anything, the Day,Week,Month,and Year, only Month, and Year are expected to work, and should take you to the relevant views.
* both pages should be scrollable, either just in time loading in the years, or just load up to the next ~2 years.

#### Mobile
![](/doc/ui/mobile-year.png)

#### Desktop
![](/doc/ui/desktop-year.png)




## Routing

The page should using routing following the below scheme.

* /calendar
* /calendar/[year]
* /calendar/[year]/[month]

|  Examples | |
|---|---|
| /calendar | auto redirects to the current year |
| /calendar/2022 | shows the year view |
| /calendar/2022/4 | shows the month view |
