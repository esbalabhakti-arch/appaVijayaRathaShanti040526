// ============================================================
//  VIJAYA RATHA SANTHI - FAMILY ALBUM DATA FILE
//  Edit THIS file to add/remove photos and videos.
//  All media files go inside the  media/  folder.
// ============================================================

const ALBUM_DATA = {

  // ── EVENT DETAILS ────────────────────────────────────────
  title:       "Vijaya Ratha Shanthi Mahotsavam",
  subtitle:    "Celebrating the 77th Year Milestone",
  honoree:     "Shri Tiruvarur Subramaniam Thiyagasundaram",
  date:        "5th April, 2026",
  venue:       "Shri S R Sharma Residence, Chennai, TN",
  blessing:    "ஸ்ரீ மஹா பெரியவா சரணம் | மதுரை வீரன் துணை | முத்து மாரியம்மன் அருள்",

  // Path to the invitation image (place in media/photos/)
  invitationImage: "media/photos/Invitation_file.png",

  // ── DEITY IMAGE URLs (free/public domain sources) ────────
  // These load from public URLs – no download needed.
  deities: [
    {
      name:  "Mahaperiyava",
      label: "ஸ்ரீ மஹா பெரியவா",
      // Public domain photo from Wikimedia Commons
      url:   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kanchi_Maha_Periyava.jpg/400px-Kanchi_Maha_Periyava.jpg"
    },
    {
      name:  "Madurai Veeran",
      label: "மதுரை வீரன்",
      // Public domain folk deity image
      url:   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Madurai_Veeran.jpg/400px-Madurai_Veeran.jpg"
    },
    {
      name:  "Muthu Mariamman",
      label: "முத்து மாரியம்மன்",
      // Public domain temple goddess image
      url:   "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mariamman_temple_Samayapuram.jpg/400px-Mariamman_temple_Samayapuram.jpg"
    }
  ],

  // ── PHOTO SECTIONS ───────────────────────────────────────
  // Add as many sections as you like.
  // Each photo's "src" is relative to the root of the site.
  // Put all your JPEG/PNG files inside  media/photos/
  sections: [
    {
      id:    "arrival",
      title: "Arrival & Welcome",
      icon:  "🪔",
      photos: [
        { src: "media/photos/arrival_01.jpg", caption: "Welcoming the auspicious day" },
        { src: "media/photos/arrival_02.jpg", caption: "" },
        { src: "media/photos/arrival_03.jpg", caption: "" }
        // Add more: { src: "media/photos/arrival_04.jpg", caption: "..." }
      ]
    },
    {
      id:    "pooja",
      title: "Pooja & Rituals",
      icon:  "🌸",
      photos: [
        { src: "media/photos/pooja_01.jpg", caption: "Homam begins" },
        { src: "media/photos/pooja_02.jpg", caption: "" },
        { src: "media/photos/pooja_03.jpg", caption: "" }
      ]
    },
    {
      id:    "family",
      title: "Family Moments",
      icon:  "👨‍👩‍👧‍👦",
      photos: [
        { src: "media/photos/family_01.jpg", caption: "All together" },
        { src: "media/photos/family_02.jpg", caption: "" },
        { src: "media/photos/family_03.jpg", caption: "" }
      ]
    },
    {
      id:    "blessings",
      title: "Blessings & Celebrations",
      icon:  "✨",
      photos: [
        { src: "media/photos/bless_01.jpg", caption: "" },
        { src: "media/photos/bless_02.jpg", caption: "" }
      ]
    }
    // Add more sections as needed!
  ],

  // ── VIDEOS ───────────────────────────────────────────────
  // Put your .mp4 / .mov files inside  media/videos/
  // "poster" is an optional thumbnail image (can be a photo from the event)
  videos: [
    {
      src:     "media/videos/ritual_highlights.mp4",
      title:   "Ritual Highlights",
      caption: "The sacred moments captured",
      poster:  "media/photos/pooja_01.jpg"
    },
    {
      src:     "media/videos/family_moments.mp4",
      title:   "Family Together",
      caption: "",
      poster:  ""
    }
    // Add more videos here
  ],

  // ── CLOSING MESSAGE ──────────────────────────────────────
  closingMessage: "May Mahaperiyava's grace, Madurai Veeran's protection, and Muthu Mariamman's blessings shower upon our family always. 🙏"
};
