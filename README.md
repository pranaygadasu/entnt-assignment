# 🚢 Ship Maintenance Dashboard

A frontend-only **React-based dashboard** for managing ships, components, and maintenance jobs. This project simulates a real-world ship maintenance system using **localStorage** for data persistence (no backend).

Deployed Link: [Add Vercel/Netlify Link Here]
GitHub Repo: [Add Repo Link Here]

---

## 📌 Features

### 🔐 User Authentication (Simulated)

* Hardcoded users with roles: **Admin, Inspector, Engineer**
* Login with role-based access
* Session persistence using `localStorage`

### 🚢 Ships Management

* Add, edit, delete, and list ships
* View detailed **Ship Profile** (general info, components, maintenance history)

### ⚙️ Ship Components Management

* Manage components linked to ships
* Fields: Name, Serial Number, Installation Date, Last Maintenance Date

### 🛠️ Maintenance Jobs Management

* Create, edit, and update jobs for components
* Fields: Job Type, Priority, Status, Assigned Engineer, Scheduled Date
* Filter jobs by ship, status, priority

### 📅 Maintenance Calendar

* View scheduled jobs in **monthly/weekly** view
* Click on a date to see jobs scheduled that day

### 🔔 Notification Center

* In-app notifications for job events (**Created, Updated, Completed**)
* Notifications are dismissible

### 📊 KPI Dashboard

* Cards & charts showing:

  * Total Ships
  * Overdue Components
  * Jobs in Progress
  * Jobs Completed

---

## 🗄️ Data Persistence

* All data stored in **localStorage** (`users`, `ships`, `components`, `jobs`, `session`)
* No backend / API calls used

---

## 💻 Tech Stack

* **React (Functional Components + Hooks)**
* **React Router** (Navigation)
* **Context API** (Global State Management)
* **TailwindCSS** (UI Styling)
* **localStorage** (Data persistence)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Authentication/
│   ├── Dashboard/
│   ├── Ships/
│   ├── Components/
│   ├── Jobs/
│   ├── Notifications/
├── contexts/
├── pages/
├── utils/
├── styles/
```

---

## ⚡ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/ship-maintenance-dashboard.git
   cd ship-maintenance-dashboard
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run locally

   ```bash
   npm start
   ```

4. Build for production

   ```bash
   npm run build
   ```

---

## 🚀 Deployment

* Deploy using **Vercel, Netlify, or GitHub Pages**.
* Make sure `BrowserRouter` is configured properly for client-side routing.

---

## 🧪 Example Users

| Role      | Email                                           | Password    |
| --------- | ----------------------------------------------- | ----------- |
| Admin     | [admin@entnt.in](mailto:admin@entnt.in)         | admin123    |
| Inspector | [inspector@entnt.in](mailto:inspector@entnt.in) | inspect123  |
| Engineer  | [engineer@entnt.in](mailto:engineer@entnt.in)   | engineer123 |

---

## 📝 Known Issues / Limitations

* Calendar is basic (no drag-and-drop scheduling).
* Notifications reset if localStorage is cleared.
* No real-time backend integration (frontend-only).

---

## 🤔 Technical Decisions

* Used **Context API** over Redux to keep state simple.
* Chose **TailwindCSS** for fast and responsive styling.
* All CRUD operations abstracted into `utils/localStorageUtils.js` for maintainability.

---

## ⭐ Bonus Ideas (Future Enhancements)

* Dark Mode
* Export jobs/ships report as CSV
* Role-based dashboards with different KPIs

---

## 📧 Submission

Send the following to **[hr@entnt.in](mailto:hr@entnt.in)**:

* GitHub Repo Link
* Deployed Application Link

---

## 👨‍💻 Author

Pranay Gadasu

* [LinkedIn](https://www.linkedin.com/in/pranay-gadasu/)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
