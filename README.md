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