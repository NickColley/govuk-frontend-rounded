# govuk-frontend-rounded
Rounded corners for GOV.UK Frontend, useful when branding the GOV.UK Design System.

This project is compatible and tested with version 4.x of GOV.UK Frontend.

## Install

1. Install GOV.UK Frontend and GOV.UK Frontend Rounded
```bash
npm install govuk-frontend govuk-frontend-rounded
```

2. Import into your project
```scss
// Import GOV.UK Frontend
@import "node_modules/govuk-frontend/govuk/all.scss";

// Configure how round components should be.
$govuk-frontend-rounded: 10px;
@import "node_modules/govuk-frontend-rounded/all.scss";

// The rest of your SCSS...
```

> `$govuk-frontended-rounded` must be in pixels and can only be between 2px and 20px.

## Screenshots

### Before

![Button and Text input with square corners](https://user-images.githubusercontent.com/2445413/183426656-2a59c5e8-540b-4c81-9337-ec14f3422a3e.png)

### After
![Button and Text input with rounded corners](https://user-images.githubusercontent.com/2445413/183426671-8e60e111-fe0c-46cc-ad45-99c0fd40ed79.png)

[See all rounded components](https://govuk-frontend-rounded.netlify.app).
