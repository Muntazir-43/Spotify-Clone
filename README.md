# 🎧 Spotify Clone - Noha Streaming Web App

A modern, responsive **Noha music streaming** web app inspired by Spotify. It features trending nohas, popular artists, albums, and playlists with a fully customized playbar, dynamic data loading via JSON, and Cloudinary-hosted audios.

🔗 **Live Demo (Deployed on Vercel):**  
[https://muntazir-spotify-clone-zeta-wheat.vercel.app/](https://muntazir-spotify-clone-zeta-wheat.vercel.app/)

---

## 📱 Responsive Design

✅ Fully responsive on:
- ✅ **Mobile Devices**
- ✅ **Tablets**
- ✅ **Desktops & Laptops**

---

## 🔥 App Sections

The application consists of the following major sections:

1. **📈 Trending Nohas**  
   Displaying most-listened nohas from the JSON source.

2. **🎤 Popular Artists**  
   Clickable cards to browse all nohas by a selected artist.

3. **💿 Popular Albums**  
   Collection of nohas grouped into albums with unique thumbnails.

4. **🎵 Popular Playlists**  
   Curated sets of nohas based on mood or topic.

---

## 🚀 Features

- 🎧 Custom audio player with play/pause, next, previous, seekbar, and volume control  
- 💾 Persistent user session (last played noha & volume saved)  
- 🎨 Smooth and clean UI with hover effects  
- ⚙️ Cloud-based MP3 hosting using **Cloudinary**  
- 🔄 Dynamically loads nohas via a single `Nohas.json` file  
- 🧠 Minimal JavaScript stack — built with **Vanilla JS**, **HTML5**, and **CSS3**  
- 🌐 Deployed on **Vercel** — auto updates with GitHub commits

---

## 🛠️ Tech Stack

- **HTML5 & CSS3** – Semantic structure and responsive layouts
- **JavaScript (Vanilla)** – Audio playback, dynamic rendering, event handling
- **Cloudinary** – Hosted MP3 files (streaming optimized)
- **Vercel** – Deployment platform with GitHub integration
- **LocalStorage** for session handling

---

## 📂 Project Structure

```text
Spotify-Clone/
├── index.html
├── assets/
│   ├── pics/            # Artist and album images
│   ├── SVG/             # UI/icon assets (play, menu, etc.)
│   └── Nohas.json       # JSON mapping artists to Cloudinary MP3 URLs
├── css/
│   └── style.css        # All styles and responsive design
├── js/
│   └── script.js        # Core app logic (playback, views, localStorage)
└── README.md
```
---

## 🚧 How to Run Locally

```bash
git clone https://github.com/Muntazir-43/Spotify-Clone.git
cd Spotify-Clone
# Open index.html with Live Server OR
# Use any local server like VS Code's Live Preview
```
---

## 🚀 Deployment  
This project is deployed on **Vercel** using free hosting with GitHub integration.

### 🔗 Live Link  
👉 [https://muntazir-spotify-clone-zeta-wheat.vercel.app](https://muntazir-spotify-clone-zeta-wheat.vercel.app)

---

## 🛠 How it Works  
- Connect your GitHub repo to Vercel  
- Each push automatically triggers a build and deployment  
- Uses Cloudinary-hosted MP3 URLs to bypass CORS issues  

---

## 📷 Screenshots  
Here’s a preview of the app interface:  
![Preview](https://github.com/Muntazir-43/Spotify-Clone/blob/main/Assets/pics/Preview.png?raw=true)

---

## 🙋‍♂️ Developer

**👨‍💻 Name:** Muntazir Mehdi  
**🎓 Field:** Software Engineering Student  
**🏫 University:** The University of Azad Jammu and Kashmir (UAJK)  
**📍 Location:** Gilgit-Baltistan, Pakistan  
**🌐 GitHub:** [@Muntazir-43](https://github.com/Muntazir-43)

---

## 📜 License  
This project is open-source for **educational and non-commercial use**.  
🎙 All rights to the original Nohas belong to their respective reciters.

---

## 🙌 Credits  
Built with ❤️ by **Muntazir Mehdi**  
Design inspired by **Spotify UI**, content curated from public Islamic sources.
