🎓 Yalaa Milga – Smart Scholarship Matching Platform  
Yalaa Milga is a smart platform that helps students discover personalized scholarships based on their academic profile, field of study, and preferences.  
The name combines the Arabic words "Yalla" (let's go) and "Milga" (scholarship), reflecting the platform’s energy and purpose.

---

🎯 Project Goals
- Make the scholarship search process easier and more efficient  
- Offer personalized results to students  
- Allow filtering and exploration of relevant opportunities  
- Support multilingual, RTL-friendly UI (Hebrew & Arabic)

---

✨ Features
- 🔐 Login & Sign Up – Secure user authentication and registration  
- 🏠 Dashboard – Displays top scholarship matches and alerts  
- 🎓 Scholarships List – Filter by field, country, funding type, and more  
- 📄 Scholarship Detail Page – Full description, eligibility, and apply/save buttons  
- 👤 Profile Page – Update student info and preferences  
- ⚙️ Settings & Help – Language, notifications, and FAQ  
- 🧑‍💼 Admin Panel – Manage scholarships and track KPIs with charts  

---

🛠️ Technologies and Tools Used
- Uizard.io – Wireframe & UI design  
- Figma / Draw.io – Diagrams and user flow  
- GitHub – Version control and project documentation  
- Markdown – For writing project docs  
- ChatGPT & Claude – Content refinement and wireframe generation  

---

📂 Documentation  
All project documentation is organized inside the `/docs` folder:

- UI wireframes for all main pages  
- Internal flow diagrams per screen  
- Navigation flow diagram  
- Descriptions of each page and UI elements  
- Link to full Uizard prototype  

While the wireframes are presented in a mobile-first layout, the system is intended as a responsive web application. All components and layouts are designed to adapt smoothly to desktop and tablet screens as well.

---

👨‍💻 Project Contributors

| Name             | ID Number  | Email                       |
|------------------|------------|-----------------------------|
| Abdallh Abureash | 211520044  | abdallh4664@gmail.com       |
| Layth Bader      | 325878627  | Layth12bader1@gmail.com     |

---

🏫 Submission Info  
- Course: Front-End Development  
- Institution: Ono Academic College  
- Instructor: Gilad Yariv  
- Date: March 2025  

---

🧩 React Page Applications (Structured Screens)  
Each page of the Yalaa Milga platform was built as a standalone React application using Vite.  
This modular structure allows each screen to be developed, tested, and run independently.

📦 Full React Project Structure (FeYalaa-milga)  
The `FeYalaa-milga` folder represents the full structured React project for the Yalaa Milga platform.  
It organizes all main pages, shared files, and configuration components as required by the course specifications.

> ⚠️ Due to some technical issues encountered during the GitHub upload process, not all files could be pushed correctly in one go. Therefore, each page may need to be reviewed or tested individually through its own folder or previous commits.

To explore the complete folder structure and organization, view the following directory:  
👉 [FeYalaa-milga](./FeYalaa-milga)

---

⚙️ How to Run a Page  
To run any page locally:

```bash
cd [folder-name]
npm install
npm run dev

```

Replace `[folder-name]` with the name of any of the folders below (e.g., `loginpage`, `dashboardpage`, etc.).

### 📂 Page Folders

- [`/loginpage`](./loginpage) – Login interface with email/password input and Google sign-in option.
- [`/signuppage`](./signuppage) – Registration form for new users including name, password confirmation, and terms agreement.
- [`/dashboardpage`](./dashboardpage) – Student homepage showcasing top scholarships and notification previews.
- [`/userprofilepage`](./userprofilepage) – Profile management page allowing users to edit personal info and notification preferences.
- [`/helpsettingspage`](./helpsettingspage) – Settings page for language preferences, password change, and access to FAQs.
- [`/scholarshiplistpage`](./scholarshiplistpage) – Dynamic list of scholarships with filters for country, field, amount, type, and deadline.
- [`/scholarshipdetailpage`](./scholarshipdetailpage) – Detailed view of a single scholarship including description, criteria, and apply/save buttons.
- [`/adminmaindashboard`](./adminmaindashboard) – Admin panel to manage student accounts and scholarships.
- [`/adminkpidashboard`](./adminkpidashboard) – Admin KPI dashboard showing charts and performance analytics (e.g., number of users, applications, deadlines).

> 🧠 Each folder contains its own `src/`, `index.html`, `vite.config.js`, and `package.json` files — making it an independently runnable React app.
