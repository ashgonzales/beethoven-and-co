## Project Name

Ad Ignotum

## Project Description

This application allows users to track twilight timings, as well as sun and moon parameters for a given date and location for optimal stargazing. By adding the location name (town, city), a user should be able to see sunrise, sunset, day length, and other moon information that could affect their stargazing experience. 

## API and Data Sample

**IPGeolocation:** Astronomical data for a given location

**Unsplash:** Images for CSS

**Sample JSON:**
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

![Wireframe](https://wireframe.cc/vQNAqz)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find suitable external apis 
- Get data through axios call (IPGeolocation)
- Get input value from city search bar
- Access values
- Render data with photos on page (axios call to unsplash)
- CSS 
    - Classes for day, night, moon, sunrise, sunset
    - Media-query for responsive design

#### PostMVP  

- Add option to search via IP or address
- Add second API (Wit.ai)
- Scroll bar wire-frame (mobile)
- Local Storage

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes / Design | Complete
|August 17| Project Approval / HTML / JavaScript | Incomplete
|August 18| CSS / Responsive Mobile & Desktop | Incomplete
|August 19| Initial Clickable Model / MVP / Testing | Incomplete
|August 20| Post-MVP / Additional Debugging | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://imgur.com/C1qFZks)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Set-up | H | 2hrs | 2hrs | 2hrs |
| Form | H | 1hr | 1hr | 1hr |
| Axios Requests | H | 1hr | 1hr | 1hr |
| Append Data to DOM | H | 2hrs | 2.5hrs | 2.5hrs |
| CSS: Media-Query | H | 1.5hr | 1.5hr | 1.5hr |
| CSS: Flexbox | H | 3hrs | 3hrs | 3hrs |
| CSS: Parallax Scroll | H | 2hrs | 3hrs | 3hrs |
| Debugging | H | 3hrs | 3hrs | 3hrs |
| Post-MVP: Second API | H | 2hrs | 3hrs | 3hrs |
| Total | H | 15hrs| -hrs | -hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
