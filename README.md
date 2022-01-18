# Holition Front-end Test - Calendar

This test is about building a calendar viewer similar in style to Apple Calendar **without using third party libraries**. We would love to see **good architecture, nice styling, correct routing and creative solutions**.

The UI images attached are for guidance, they don't need to be copied exactly.
But we do want to know your **skills with layouts**. For example, styling the different days as:
- days in the month
- weekends in the month
- days showed on the month that belongs to other months
- animations should be used, such as on hover, etc.

It is not required for everything to be completed if you are getting stuck on one part move on to other parts.
Unfinsihed parts we can simply talk about in the **review code interview**.
Don't spend an unreasonable about of time on this. Certainly nothing more than 10 hours.

## UI

### By year

* As the year changes it should update the routing.
* (Mobile) Again the 2 buttons on the top right are not expected to do anything
* (Desktop) *< Today >* should functions for moving the year, today taking you to the current year.
* (Desktop) the top search bar, plus is not required to do anything.
* page should be scrollable, either just in time loading in the years, or just load up to the next ~2 years.

#### Mobile
![](/doc/ui/mobile-year.png)

#### Desktop
![](/doc/ui/desktop-year.png)




## Routing

The page should using routing following the below scheme.

* /calendar
* /calendar/[year]

|  Examples      |                                    |
|----------------|------------------------------------|
| /calendar      | auto redirects to the current year |
| /calendar/2022 | shows the year view                |
