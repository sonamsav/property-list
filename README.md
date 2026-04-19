#  Property Listing Application
Website Link: https://property-list-v3.vercel.app/
# Overview
This is a responsive **Property Listing Web Application** built using **Next.js**.
It displays a list of properties for **buy and rent**, with clean UI cards and basic navigation to property details.

The project focuses on:
* Component-based architecture
* Clean UI/UX
* Efficient data handling
* Deployment-ready setup
##  Features
*  Property listing with image, price, location, and BHK details
*  Highlighted **Buy / Rent badges**
*  Image loading skeleton (improves UX)
*  Dynamic routing for property detail pages
*  Fully responsive design
*  Deployed on Vercel
*  
## 🛠️ Tech Stack
* **Frontend:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Deployment:** Vercel

## 📂 Project Structure
app/
 ├── properties/
 │    └── [id]/page.tsx   # Property detail page
 ├── api/
 │    └── properties/route.ts  # API route for property data
components/
 └── PropertyCard.tsx     # Reusable card component
```
## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/property-app.git
cd property-app
### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
---

## 🌐 Deployment

The project is deployed using **Vercel**.

* Every push to the `main` branch triggers **automatic deployment**
* Preview deployments are generated for other branches

---

## 📊 Data Handling
* Property data is served via a **Next.js API route**
* Data is structured with:
  * id
  * title
  * location
  * price
  * bhk
  * type (`buy` | `rent`)
  * image


* Ability to build **scalable UI components**
* Awareness of **real-world trade-offs and improvements**

---
