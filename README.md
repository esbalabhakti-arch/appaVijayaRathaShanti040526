# Vijaya Ratha Santhi – Family Album
### GitHub Pages Setup Guide

---

## 📁 FOLDER STRUCTURE

```
vijaya-ratha-santhi/          ← Root of your GitHub repository
│
├── index.html                ← Main album page (DO NOT RENAME)
├── data.js                   ← ✏️  EDIT THIS to add photos, videos, captions
├── README.md                 ← This guide
│
└── media/
    ├── photos/               ← 📷 Put ALL your JPEG/PNG photos here
    │   ├── arrival_01.jpg
    │   ├── pooja_01.jpg
    │   └── ...
    │
    └── videos/               ← 🎬 Put ALL your MP4/MOV videos here
        ├── ritual_highlights.mp4
        └── ...
```

---

## 🚀 STEP-BY-STEP: Publish to GitHub Pages

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up (free).

### Step 2 — Create a New Repository
1. Click the **"+"** icon → **New repository**
2. Name it: `vijaya-ratha-santhi` (or anything you like)
3. Set it to **Public** ✅ (required for free GitHub Pages)
4. Click **Create repository**

### Step 3 — Upload Files
In your new repository, click **"uploading an existing file"** or drag and drop:

1. Upload `index.html`
2. Upload `data.js`
3. Click the **media** folder → upload photos into `media/photos/`
4. Click the **media** folder → upload videos into `media/videos/`

**Tip:** GitHub lets you upload many files at once by dragging the whole `media` folder.

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main` · Folder: `/ (root)`
5. Click **Save**

### Step 5 — Get Your Link
After ~1 minute, your album is live at:
```
https://YOUR-USERNAME.github.io/vijaya-ratha-santhi/
```
Share this link with family! It works on phones and desktops.

---

## ✏️ HOW TO ADD YOUR PHOTOS & VIDEOS

Open `data.js` in a text editor (Notepad, TextEdit, VS Code, etc.)

### Adding Photos
Find the section you want to add photos to (e.g., `"pooja"`) and add entries:

```js
photos: [
  { src: "media/photos/pooja_01.jpg",  caption: "Homam begins" },
  { src: "media/photos/pooja_02.jpg",  caption: "Sacred fire" },
  { src: "media/photos/pooja_03.jpg",  caption: "" },   // empty caption is fine
]
```

### Adding a New Section
Copy one of the existing section blocks and change the id, title, and photos:

```js
{
  id:    "lunch",
  title: "Feast & Lunch",
  icon:  "🍛",
  photos: [
    { src: "media/photos/lunch_01.jpg", caption: "Grand feast" },
  ]
},
```

### Adding Videos
```js
videos: [
  {
    src:     "media/videos/my_video.mp4",
    title:   "Ritual Highlights",
    caption: "The sacred moments",
    poster:  "media/photos/pooja_01.jpg"   // thumbnail, can be any photo
  },
]
```

### Changing Father's Name / Event Details
At the top of `data.js`:
```js
honoree: "Appa",       // Change to e.g. "Krishnamurthy Iyer"
date:    "2025",        // Change to actual date
venue:   "Chennai",    // Optional
```

---

## 🙏 DEITY IMAGES

The three deity images (Mahaperiyava, Madurai Veeran, Muthu Mariamman) 
load from Wikimedia Commons public-domain URLs automatically.

If you prefer to use your own framed deity photos:
1. Save them as e.g. `media/photos/mahaperiyava.jpg`
2. In `data.js`, change the `url` for that deity:
```js
{ name: "Mahaperiyava", url: "media/photos/mahaperiyava.jpg", label: "ஸ்ரீ மஹா பெரியவா" }
```

---

## 📱 Mobile Tips

- Photos are tap-to-open with swipe navigation
- Videos have native controls (works on iPhone/Android)
- Sections scroll horizontally in the tab bar

---

*With love · Preserved for generations · விஜய ரத சாந்தி*
