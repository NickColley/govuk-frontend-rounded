# govuk-frontend-rounded
Extension of GOV.UK Frontend to allow for rounded corners.

This project is compatible and tested with version 4.2.0 of GOV.UK Frontend.

## Install

1. Install GOV.UK Frontend and GOV.UK Frontend Rounded
```bash
npm install govuk-frontend@4.2.0 govuk-frontend-rounded
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