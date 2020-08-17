## Project Name

Ad Ignotum

## Project Description

Lovingly made for fellow explorers. Whether one is planning a day-long hike or observing celestial objects at night, we find that there is an optimal time for most outdoor activities. This application allows users to track twilight timings, as well as sun and moon parameters for a given date and location.  

## API and Data Sample

IPGeolocation: 
Unsplash

Sample JSON:
```json
{
    "location": {
        "ip": "1.1.1.1",
        "country_code2": "AU",
        "country_code3": "AUS",
        "country_name": "Australia",
        "state_prov": "Queensland",
        "district": "South Brisbane",
        "city": "Brisbane",
        "zipcode": "4101",
        "latitude": -27.47561,
        "longitude": 153.01537
    },
    "date": "2020-08-14",
    "sunrise": "06:18",
    "sunset": "17:27",
    "solar_noon": "11:52",
    "day_length": "11:09",
    "sun_altitude": 35.351661926074,
    "sun_distance": 1.5151971737031785E8,
    "sun_azimuth": 45.366261713013216,
    "moonrise": "03:47",
    "moonset": "13:27",
    "moon_altitude": 35.93568843333211,
    "moon_distance": 390887.3209477042,
    "moon_azimuth": 339.15960912319025,
    "moon_parallactic_angle": 124.76060868297662
}
```

## Wireframes

![Image of wireframe](https://wireframe.cc/vQNAqz)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find suitable external apis 
- Get data through axios call (IPGeolocation)
- Get input value from city search bar
- Access value
- Render data with photos on page (axios call to unsplash)
- CSS 
    - Classes for day, night, moon, sunrise, sunset
    - Media-query for responsive design
    - Scroll bar wire-frame (mobile)

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add option to search via IP or address
- Add second API (Wit.ai)
- Voice command abilities
- Scroll bar wire-frame (mobile)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes / Design | Incomplete
|August 17| Project Approval / HTML / JavaScript | Incomplete
|August 18| CSS / Responsive Mobile & Desktop | Incomplete
|August 19| Initial Clickable Model / MVP / Testing | Incomplete
|August 20| Post-MVP / Additional Debugging | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

![Image of wireframe](https://imgur.com/C1qFZks)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Set-up | H | 30min| 30min | 30min |
| Form | H | 20min| 20min | 20min |
| Get API Info | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS: Parallax Scroll | H | 2hr| 3hr | 3hr |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
