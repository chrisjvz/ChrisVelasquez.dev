<div align="center">

# ChrisVelasquez.dev

<!-- TODO: IMAGEHERE -->

*Portfolio website with the intent to showcase my abilities and learn some React.js
while I'm at it* :sweat_smile: 

![image](./site-screenshot-6-11-25.png)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fchrisvelasquez.dev%2F&up_message=Live&label=ChrisVelasquez.dev)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/amnesiacsloth/chrisvelasquez.dev/dev?label=Commit%20Activity)
![GitHub Tag](https://img.shields.io/github/v/tag/amnesiacsloth/chrisvelasquez.dev?label=Tag)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/amnesiacsloth/chrisvelasquez.dev?label=Issues)

[Tools Used](#tools-used) | [Deployment](#deployment) | [Site Components](#site-components) | [Restropective](#retrospective)

</div>

## :hammer_and_wrench: Tools Used
* [Vite](https://vite.dev/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/) 
* [Npm]()
* [Major League Baseball API](https://statsapi.mlb.com) 
* [DateTime API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Github Actions](https://github.com/features/actions)

## :rocket: Deployment 

Github Actions with a basic deploy.yml file,
hooked up to a domain from porkbun

## :part_alternation_mark: Site Components 

### LocalTime 

Leverage DatetimeAPI
<!-- TODO: Add image here-->

### DodgersWin

Use MLB API
<!-- TODO: Add image here-->

## :baseball: Using The Public MLB API

> Note: The MLB api updates around 10am pst

### Useful info for DodgersWin widget

Dodgers team ID: 119

MLB league ID: sportsId=1

Get previous 5 games from game schedule
`https://statsapi.mlb.com/api/v1/teams/<teamId>?hydrate=previousSchedule`


## :thinking: Retrospective  

React has some funny quirks, tbh had a lot more trouble just working with javascript and 
debugging without types, made things go a lot slower than they should have.
