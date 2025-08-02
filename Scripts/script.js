// menu Toggling code
const menuToggle = document.getElementById("menuToggle");
const menuIcon = document.getElementById("menuIcon");
const links = document.querySelector(".links");
const account_li = document.querySelector(".dis_none");

let menuOpen = false;

menuToggle.addEventListener("click", function () {
  menuOpen = !menuOpen;

  if (menuOpen) {
    links.classList.add("show");
    menuIcon.src = "./SVG/Cross.svg"; // use your close icon
    menuToggle.classList = "cross_icon_round";
    menuIcon.alt = "Close Menu";
  } else {
    links.classList.remove("show");
    menuIcon.src = "./SVG/menu.svg"; // back to hamburger
    menuToggle.classList.remove("cross_icon_round");
    menuIcon.alt = "Open Menu";
  }
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (menuOpen && !menuToggle.contains(event.target) && !links.contains(event.target)) {
    links.classList.remove("show");
    menuIcon.src = "./SVG/menu.svg";
    menuToggle.classList.remove("cross_icon_round");
    menuIcon.alt = "Open Menu";
    menuOpen = false;
  }
});

// Search bar expand code -------------------
const searchBar = document.getElementById("searchBar");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", (e) => {
  if (window.innerWidth <= 550) {
    e.stopPropagation();
    searchBar.classList.toggle("expanded");

    // Focus input when expanded
    if (searchBar.classList.contains("expanded")) {
      const input = searchBar.querySelector("input");
      input?.focus();
    }
  }
});

// Collapse on click outside
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 550 && !searchBar.contains(e.target)) {
    searchBar.classList.remove("expanded");
  }
});

// Remove expanded state on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 550) {
    searchBar.classList.remove("expanded");
  }
});

// Trending bar scrolling code ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const opacityWrapper = document.querySelector(".trending");
  const leftSlide = document.getElementById("leftSlide");
  const rightSlide = document.getElementById("rightSlide");
  const scrollContainer = document.getElementById("trendingContainer");

  if (!scrollContainer) {
    console.error("Scroll container not found!");
    return;
  }

  // Show/hide arrows on hover
  opacityWrapper.addEventListener("mouseover", () => {
    updateSlides(); // ensure visible state updates
    leftSlide.style.pointerEvents = "auto";
    rightSlide.style.pointerEvents = "auto";
  });

  opacityWrapper.addEventListener("mouseout", () => {
    leftSlide.style.opacity = "0";
    rightSlide.style.opacity = "0";
    leftSlide.style.pointerEvents = "none";
    rightSlide.style.pointerEvents = "none";
  });

  // Scroll handlers
  function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  }

  // Add event listeners to scroll buttons
  leftSlide.addEventListener("click", scrollLeft);
  rightSlide.addEventListener("click", scrollRight);

  // Show/hide slide arrows based on scroll position
  function updateSlides() {
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const pos = scrollContainer.scrollLeft;

    if (pos <= 0) {
      leftSlide.classList.remove("visible");
    } else {
      leftSlide.classList.add("visible");
    }

    if (pos >= max - 5) {
      rightSlide.classList.remove("visible");
    } else {
      rightSlide.classList.add("visible");
    }

    // Only update opacity if we're hovering (optional)
    if (opacityWrapper.matches(":hover")) {
      leftSlide.style.opacity = leftSlide.classList.contains("visible") ? "1" : "0";
      rightSlide.style.opacity = rightSlide.classList.contains("visible") ? "1" : "0";
    }
  }

  // Listen for scroll and load
  window.addEventListener("load", updateSlides);
  scrollContainer.addEventListener("scroll", updateSlides);
});

// cart play button hovering code--------------
let carts = document.querySelectorAll(".cart");

carts.forEach(cart => {
  let playBtn = cart.querySelector(".play");

  cart.addEventListener("mouseover", () => {
    playBtn.style.opacity = "1";
    playBtn.style.top = "125px";
  });

  cart.addEventListener("mouseout", () => {
    playBtn.style.opacity = "0";
    playBtn.style.top = "165px";
  });
});

// profile play button hovering code--------------
let profiles = document.querySelectorAll(".profile");

profiles.forEach(profile => {
  let playBtn = profile.querySelector(".play");

  profile.addEventListener("mouseover", () => {
    playBtn.style.opacity = "1";
    playBtn.style.top = "125px";
  });

  profile.addEventListener("mouseout", () => {
    playBtn.style.opacity = "0";
    playBtn.style.top = "165px";
  });
});

// Popular bar scrolling code ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const opacityWrapper = document.querySelector(".popular_artist_wrapper");
  const leftSlide = document.getElementById("P_leftSlide");
  const rightSlide = document.getElementById("P_rightSlide");
  const scrollContainer = document.getElementById("popularContainer");

  const leftBtn = document.getElementById("P_leftBtn");
  const rightBtn = document.getElementById("P_rightBtn");

  if (!scrollContainer) {
    console.error("Popular scroll container not found!");
    return;
  }

  // Show/hide arrows on hover
  opacityWrapper.addEventListener("mouseover", () => {
    updateSlides();
    leftSlide.style.pointerEvents = "auto";
    rightSlide.style.pointerEvents = "auto";
  });

  opacityWrapper.addEventListener("mouseout", () => {
    leftSlide.style.opacity = "0";
    rightSlide.style.opacity = "0";
    leftSlide.style.pointerEvents = "none";
    rightSlide.style.pointerEvents = "none";
  });

  // Scroll handlers
  function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  }

  // Add event listeners to buttons
  leftBtn.addEventListener("click", scrollLeft);
  rightBtn.addEventListener("click", scrollRight);

  function updateSlides() {
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const pos = scrollContainer.scrollLeft;

    if (pos <= 0) {
      leftSlide.classList.remove("visible");
    } else {
      leftSlide.classList.add("visible");
    }

    if (pos >= max - 5) {
      rightSlide.classList.remove("visible");
    } else {
      rightSlide.classList.add("visible");
    }

    if (opacityWrapper.matches(":hover")) {
      leftSlide.style.opacity = leftSlide.classList.contains("visible") ? "1" : "0";
      rightSlide.style.opacity = rightSlide.classList.contains("visible") ? "1" : "0";
    }
  }

  window.addEventListener("load", updateSlides);
  scrollContainer.addEventListener("scroll", updateSlides);
  // optional: handle resize too
  window.addEventListener("resize", updateSlides);
});

// Album play button hovering code--------------
let albums = document.querySelectorAll(".album");

albums.forEach(album => {
  let playBtn = album.querySelector(".play");

  album.addEventListener("mouseover", () => {
    playBtn.style.opacity = "1";
    playBtn.style.top = "125px";
  });

  album.addEventListener("mouseout", () => {
    playBtn.style.opacity = "0";
    playBtn.style.top = "165px";
  });
});

// Album bar scrolling code ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const opacityWrapper = document.querySelector(".albums_wrapper");
  const leftSlide = document.getElementById("A_leftSlide");
  const rightSlide = document.getElementById("A_rightSlide");
  const scrollContainer = document.getElementById("albumContainer");

  const leftBtn = document.getElementById("A_leftBtn");
  const rightBtn = document.getElementById("A_rightBtn");

  if (!scrollContainer) {
    console.error("Popular scroll container not found!");
    return;
  }

  // Show/hide arrows on hover
  opacityWrapper.addEventListener("mouseover", () => {
    updateSlides();
    leftSlide.style.pointerEvents = "auto";
    rightSlide.style.pointerEvents = "auto";
  });

  opacityWrapper.addEventListener("mouseout", () => {
    leftSlide.style.opacity = "0";
    rightSlide.style.opacity = "0";
    leftSlide.style.pointerEvents = "none";
    rightSlide.style.pointerEvents = "none";
  });

  // Scroll handlers
  function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  }

  // Add event listeners to buttons
  leftBtn.addEventListener("click", scrollLeft);
  rightBtn.addEventListener("click", scrollRight);

  function updateSlides() {
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const pos = scrollContainer.scrollLeft;

    if (pos <= 0) {
      leftSlide.classList.remove("visible");
    } else {
      leftSlide.classList.add("visible");
    }

    if (pos >= max - 5) {
      rightSlide.classList.remove("visible");
    } else {
      rightSlide.classList.add("visible");
    }

    if (opacityWrapper.matches(":hover")) {
      leftSlide.style.opacity = leftSlide.classList.contains("visible") ? "1" : "0";
      rightSlide.style.opacity = rightSlide.classList.contains("visible") ? "1" : "0";
    }
  }

  window.addEventListener("load", updateSlides);
  scrollContainer.addEventListener("scroll", updateSlides);
  // optional: handle resize too
  window.addEventListener("resize", updateSlides);
});

// Playlist play button hovering code--------------
let playlists = document.querySelectorAll(".playlist");

playlists.forEach(playlist => {
  let playBtn = playlist.querySelector(".play");

  playlist.addEventListener("mouseover", () => {
    playBtn.style.opacity = "1";
    playBtn.style.top = "125px";
  });

  playlist.addEventListener("mouseout", () => {
    playBtn.style.opacity = "0";
    playBtn.style.top = "165px";
  });
});

// Playlist bar scrolling code ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const opacityWrapper = document.querySelector(".playlist_wrapper");
  const leftSlide = document.getElementById("Pl_leftSlide");
  const rightSlide = document.getElementById("Pl_rightSlide");
  const scrollContainer = document.getElementById("playlistContainer");

  const leftBtn = document.getElementById("Pl_leftBtn");
  const rightBtn = document.getElementById("Pl_rightBtn");

  if (!scrollContainer) {
    console.error("Popular scroll container not found!");
    return;
  }

  // Show/hide arrows on hover
  opacityWrapper.addEventListener("mouseover", () => {
    updateSlides();
    leftSlide.style.pointerEvents = "auto";
    rightSlide.style.pointerEvents = "auto";
  });

  opacityWrapper.addEventListener("mouseout", () => {
    leftSlide.style.opacity = "0";
    rightSlide.style.opacity = "0";
    leftSlide.style.pointerEvents = "none";
    rightSlide.style.pointerEvents = "none";
  });

  // Scroll handlers
  function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  }

  // Add event listeners to buttons
  leftBtn.addEventListener("click", scrollLeft);
  rightBtn.addEventListener("click", scrollRight);

  function updateSlides() {
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const pos = scrollContainer.scrollLeft;

    if (pos <= 0) {
      leftSlide.classList.remove("visible");
    } else {
      leftSlide.classList.add("visible");
    }

    if (pos >= max - 5) {
      rightSlide.classList.remove("visible");
    } else {
      rightSlide.classList.add("visible");
    }

    if (opacityWrapper.matches(":hover")) {
      leftSlide.style.opacity = leftSlide.classList.contains("visible") ? "1" : "0";
      rightSlide.style.opacity = rightSlide.classList.contains("visible") ? "1" : "0";
    }
  }

  window.addEventListener("load", updateSlides);
  scrollContainer.addEventListener("scroll", updateSlides);
  // optional: handle resize too
  window.addEventListener("resize", updateSlides);
});

// Section Switching Logic -------------------
document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    trending: document.querySelector(".trending_showall"),
    artist: document.querySelector(".artist_showall"),
    album: document.querySelector(".popular_album_showall"),
    playlist: document.querySelector(".popular_playlist_showall"),
    content: document.querySelector(".content"),
  };

  function hideAllSections() {
    Object.values(sections).forEach(section => {
      if (section) section.style.display = "none";
    });
  }

  function showSection(name) {
    hideAllSections();
    if (sections[name]) {
      sections[name].style.display = "block";
    }
  }

  // Detect if it's a refresh
  const isRefresh = performance.getEntriesByType("navigation")[0]?.type === "reload";

  // If refresh, show last section; else always show main content
  const lastSection = localStorage.getItem("lastSection");
  const sectionToShow = isRefresh && lastSection ? lastSection : "content";

  showSection(sectionToShow);
  history.replaceState({ section: sectionToShow }, null, "");

  // On click — show and save section
  const sectionHandlers = [
    { selector: ".trend h2, .trend h5", section: "trending" },
    { selector: ".popular h2, .popular h5", section: "artist" },
    { selector: ".popular_album h2, .popular_album h5", section: "album" },
    { selector: ".popular_playlist h2, .popular_playlist h5", section: "playlist" },
  ];

  sectionHandlers.forEach(({ selector, section }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("click", () => {
        showSection(section);
        history.pushState({ section }, null, "");
        localStorage.setItem("lastSection", section); // Save last section
      });
    });
  });

  // Back/forward browser buttons
  window.addEventListener("popstate", function (event) {
    const section = event.state?.section || "content";
    showSection(section);
    localStorage.setItem("lastSection", section);
  });

  // Add Event Listener to Spotify and Home icon
  document.querySelectorAll(".firstlogo,.Secondlogo , .home").forEach((el) => {
  el.addEventListener("click", () => {
    showSection("content");
    history.pushState({ section: "content" }, null, "");
    localStorage.setItem("lastSection", "content");
    showDefaultView();
    if (!current_noha.paused) {
        current_noha.pause();
        document.getElementById("play").src = "./SVG/play.svg"; 
      }
    });
  });
});

// Play bar Functionality code -------------------

// Global Variables
let current_noha = new Audio();

// Store index of currently playing noha
let currentIndex = 0;
let folder;
let nohas = [];
let Artist;

// Fetch Nohas from Folder----------------
async function getnohas(folder) {
  const encodedFolder = encodeURIComponent(folder);
  let a = await fetch(`http://127.0.0.1:3000/Javascript/Project%20Spotify/Nohas/${encodedFolder}/`);
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  // Extract only MP3 files from <a> tags
  let as = div.getElementsByTagName("a");
  let nohas = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".MP3") || element.href.endsWith(".mp3")) {
      let parts = element.href.split('/');
      let filename = parts[parts.length - 1];
      nohas.push(filename);
    }
  }

  return nohas;
}

async function getArtistName(folder) {
  const encodedFolder = encodeURIComponent(folder);
  const artistUrl = `http://127.0.0.1:3000/Javascript/Project%20Spotify/Nohas/${encodedFolder}/Artist.txt`;

  try {
    const response = await fetch(artistUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const artistName = await response.text();
    return artistName.trim(); // Remove any extra spaces or newlines
  } catch (error) {
    console.error("Error fetching Artist.txt:", error);
    return ""; // Return empty string if there's an error
  }
}

// Format Time (MM:SS)----------------

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Toggle Noha view ---------------------
function toggleNohaView() {
  document.querySelector(".noha_list").style.display = "block";
  document.querySelector(".playbar").style.display = "flex";
  const librarySection = document.querySelector(".library_playlist_podcast");
  if (librarySection) {
    librarySection.style.display = "none";
  }

  // Save current view as "noha"
  localStorage.setItem("currentView", "noha");
}

// Default view
function showDefaultView() {
  document.querySelector(".noha_list").style.display = "none";
  document.querySelector(".playbar").style.display = "none";
  const librarySection = document.querySelector(".library_playlist_podcast");
  if (librarySection) {
    librarySection.style.display = "block";
  }

  // Save current view as "default"
  localStorage.setItem("currentView", "default");
}

// Play a Noha-------------------

const playnoha = (nohas, noha, pause = false, folder) => {
  currentIndex = nohas.indexOf(noha); // Update index of current noha
  current_noha.src = `/Javascript/Project Spotify/Nohas/${folder}/${noha}`; // Set audio source

  // Reset duration display
  document.querySelector(".noha_time_update").innerHTML = "00:00";
  document.querySelector(".noha_total_duration").innerHTML = "00:00";

  // Remove any existing metadata listeners to prevent duplicates
  current_noha.removeEventListener("loadedmetadata", updateDuration);

  // Define and add metadata listener
  function updateDuration() {
    document.querySelector(".noha_total_duration").innerHTML = formatTime(current_noha.duration);
  }
  current_noha.addEventListener("loadedmetadata", updateDuration);
  

  // Restore and apply volume
  const volumeFilling = document.querySelector(".volume_seekbar_filling");
  const volumeCircle = document.querySelector(".volume_circle");
  const volumeIcon = document.getElementById("volume_icon");
  let play = document.getElementById("play");

  let storedVolume = parseFloat(localStorage.getItem("lastVolume")) || 0.5;
  current_noha.volume = storedVolume;

  // Save the current noha to localStorage
  localStorage.setItem("lastNoha", noha);

  // Update volume UI
  volumeFilling.style.width = `${storedVolume * 100}%`;
  volumeCircle.style.left = `${storedVolume * 100}%`;

  // Update volume icon based on volume level
  if (storedVolume === 0) {
    volumeIcon.src = "./SVG/volume_cross.svg";
  } else if (storedVolume <= 0.5) {
    volumeIcon.src = "./SVG/volume_half.svg";
  } else {
    volumeIcon.src = "./SVG/volume_full.svg";
  }

  // If not paused, start playback
  if (!pause) {
    current_noha.play();
    play.src = "./SVG/pause.svg";
  }

  // Update playbar info with noha name
  document.querySelector(".noha_playbar_info").innerHTML = decodeURI(noha);
};

// Initialize App on Page Load -----------

async function main() {
  // At the top of main() function
  const navigationType = performance.getEntriesByType("navigation")[0]?.type;
  const savedView = localStorage.getItem("currentView");

  // Default to "default" if no saved view or first-time visit
  if (navigationType === "reload") {
    if (savedView === "noha") {
      toggleNohaView();
    } else {
      showDefaultView();
    }
  } else {
    showDefaultView(); // first load always goes to default
  }

  folder = localStorage.getItem("currentFolder");

  if (savedView === "noha" && folder) {
    nohas = await getnohas(folder);
    Artist = await getArtistName(folder);
    renderNohaList(nohas, folder);

    let lastNoha = localStorage.getItem("lastNoha");
    let initialNoha = (lastNoha && nohas.includes(lastNoha)) ? lastNoha : nohas[0];

    playnoha(nohas, initialNoha, true, folder);
  }


  nohas = await getnohas(folder);
  Artist = await getArtistName(folder);

  // Restore last played noha if available
  let lastNoha = localStorage.getItem("lastNoha");
  let initialNoha = (lastNoha && nohas.includes(lastNoha)) ? lastNoha : nohas[0];

  // Restore volume setting from localStorage
  let savedVolume = parseFloat(localStorage.getItem("lastVolume"));
  if (!isNaN(savedVolume)) current_noha.volume = savedVolume;

  // Render the noha list and start with initial noha
  renderNohaList(nohas, folder);
  playnoha(nohas, initialNoha, true, folder);

  // Render Noha List UI
  function renderNohaList(nohas, folder) {
    const list = document.querySelector(".noha_list");
    list.innerHTML = "";

    // Create noha cards dynamically
    nohas.forEach(noha => {
      list.innerHTML += `
        <div class="noha flex" data-noha="${noha}">
          <div class="noha_detail flex">
            <img src="./SVG/music-note.svg" alt>
            <div class="noha_info">
              <div>${decodeURI(noha)}</div>
              <div>${Artist}</div>
            </div>
          </div>
          <div class="noha_playnow flex">
            <div>Play Now</div>
            <img src="./SVG/play.svg" alt>
          </div>
        </div>`;
    });

    // Add event listener to each noha item
    document.querySelectorAll(".noha").forEach(e => {
      e.addEventListener("click", () => {
        const selectedNoha = e.dataset.noha;
        playnoha(nohas, selectedNoha, false, folder);
      });
    });
  }

  // Switch Folder (Trending Noha) on Cart Click
  document.querySelectorAll(".cart").forEach(cart => {
    cart.addEventListener("click", async () => {
      folder = cart.querySelector("h4").innerText;
      localStorage.setItem("currentFolder", folder);
      nohas = await getnohas(folder);
      Artist = await getArtistName(folder);
      renderNohaList(nohas, folder);
      playnoha(nohas, nohas[0], false, folder);
      toggleNohaView();
    });
  });

  // Switch Folder (Artist) on Profile Click
  document.querySelectorAll(".profile").forEach(profile => {
    profile.addEventListener("click", async () => {
      folder = profile.querySelector("h4").innerText;
      localStorage.setItem("currentFolder", folder);
      nohas = await getnohas(folder);
      Artist = await getArtistName(folder);
      renderNohaList(nohas, folder);
      playnoha(nohas, nohas[0], false, folder);
      toggleNohaView();
    });
  });

  // Switch Folder (Album) on Album Click
  document.querySelectorAll(".album").forEach(album => {
    album.addEventListener("click", async () => {
      folder = album.querySelector("h4").innerText;
      localStorage.setItem("currentFolder", folder);
      nohas = await getnohas(folder);
      Artist = await getArtistName(folder);
      renderNohaList(nohas, folder);
      playnoha(nohas, nohas[0], false, folder);
      toggleNohaView();
    });
  });

  // Switch Folder (Playlist) on playlist Click
  document.querySelectorAll(".playlist").forEach(playlist => {
    playlist.addEventListener("click", async () => {
      folder = playlist.querySelector("h4").innerText;
      localStorage.setItem("currentFolder", folder);
      nohas = await getnohas(folder);
      Artist = await getArtistName(folder);
      renderNohaList(nohas, folder);
      playnoha(nohas, nohas[0], false, folder);
      toggleNohaView();
    });
  });

  // Play/Pause Toggle Button
  let play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (current_noha.paused) {
      current_noha.play();
      play.src = "./SVG/pause.svg";
    } else {
      current_noha.pause();
      play.src = "./SVG/play.svg";
    }
  });

  // Previous Noha Button -----------
  let previous = document.getElementById("previous");
  previous.addEventListener("click", () => {
    if (current_noha.currentTime > 3 || currentIndex === 0) {
      current_noha.currentTime = 0;
    } else {
      currentIndex = (currentIndex - 1 + nohas.length) % nohas.length;
      playnoha(nohas, nohas[currentIndex], false, folder);
    }
  });

  // Next Noha Button -----------
  let next = document.getElementById("next");
  next.addEventListener("click", () => {
    if (currentIndex < nohas.length - 1) {
      currentIndex++;
      playnoha(nohas, nohas[currentIndex], false, folder);
    } else {
      current_noha.currentTime = 0;
      current_noha.pause();
      play.src = "./SVG/play.svg";
    }
  });

  // Update Time and Seekbar While Playing ---------
  current_noha.addEventListener("timeupdate", () => {
    document.querySelector(".noha_time_update").innerHTML = `${formatTime(current_noha.currentTime)}`;
    document.querySelector(".noha_total_duration").innerHTML = `${formatTime(current_noha.duration)}`;

    const percent = (current_noha.currentTime / current_noha.duration) * 100;
    document.querySelector(".seekbar_filling").style.width = `${percent}%`;
    document.querySelector(".circle").style.left = `${percent}%`;

    // Update buffered amount
    const buffered = current_noha.buffered;
    if (buffered.length > 0) {
      const bufferedEnd = buffered.end(buffered.length - 1);
      const bufferedPercent = (bufferedEnd / current_noha.duration) * 100;
      document.querySelector(".seekbar_buffered").style.width = `${bufferedPercent}%`;
    }
  });

  // Seekbar Click Handler -------------
  const seekbar = document.querySelector(".seekbar");
  seekbar.addEventListener("click", (e) => {
    const rect = seekbar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = (clickX / rect.width) * 100;

    // Update UI and seek audio
    document.querySelector(".seekbar_filling").style.width = `${percent}%`;
    document.querySelector(".circle").style.left = `${percent}%`;
    current_noha.currentTime = (current_noha.duration * percent) / 100;
  });

  // Auto Play Next on Noha End ----------------
  current_noha.addEventListener("ended", () => {
    if (currentIndex < nohas.length - 1) {
      currentIndex++;
      playnoha(nohas, nohas[currentIndex], false, folder);
    } else {
      play.src = "./SVG/play.svg";
    }
  });

  // Volume Control (Click + Icon Toggle) ----------------
  const volumeSeekbar = document.querySelector(".volume_seekbar");
  const volumeFilling = document.querySelector(".volume_seekbar_filling");
  const volumeCircle = document.querySelector(".volume_circle");
  const volumeIcon = document.getElementById("volume_icon");

  let lastVolume = current_noha.volume || 1;

  // Set volume on click
  volumeSeekbar.addEventListener("click", (e) => {
    const rect = volumeSeekbar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const volume = Math.max(0, Math.min(percent, 1));

    current_noha.volume = volume;
    volumeFilling.style.width = `${volume * 100}%`;
    volumeCircle.style.left = `${volume * 100}%`;

    // Change volume icon
    if (volume === 0) {
      volumeIcon.src = "./SVG/volume_cross.svg";
    } else if (volume <= 0.5) {
      volumeIcon.src = "./SVG/volume_half.svg";
    } else {
      volumeIcon.src = "./SVG/volume_full.svg";
    }

    localStorage.setItem("lastVolume", volume);
  });

  // Mute/unmute on icon click
  volumeIcon.addEventListener("click", () => {
    if (current_noha.volume > 0) {
      lastVolume = current_noha.volume;
      current_noha.volume = 0;
      volumeFilling.style.width = "0%";
      volumeCircle.style.left = "0%";
      volumeIcon.src = "./SVG/volume_cross.svg";
    } else {
      current_noha.volume = lastVolume;
      volumeFilling.style.width = `${lastVolume * 100}%`;
      volumeCircle.style.left = `${lastVolume * 100}%`;
      volumeIcon.src = lastVolume <= 0.5 ? "./SVG/volume_half.svg" : "./SVG/volume_full.svg";
    }

    localStorage.setItem("lastVolume", lastVolume);
  });

  // Add Event Listener to library icon
  let library_icon = document.querySelector(".library_icon");
  let library_svg = document.getElementById("library_svg");
  let library_section = document.querySelector(".library_section");
  let playbar = document.querySelector(".playbar");

  let isLibraryOpen = false;

  library_icon.addEventListener("click", () => {
    if (!isLibraryOpen) {
      library_svg.src = "./SVG/Cross.svg";
      library_svg.style.width = "18px";
      library_section.style.left = "0%";

      // Check screen width and adjust playbar
      if (window.innerWidth < 599) {
        playbar.style.bottom = "12vh";
      }
    } else {
      library_svg.src = "./SVG/Library.svg"; 
      library_section.style.left = "-100%"; 
      library_svg.style.width = "26px";

      // Check screen width and adjust playbar
      if (window.innerWidth < 599) {
        playbar.style.bottom = "11vh";
      }
    }
    isLibraryOpen = !isLibraryOpen;
  });


  
}

main();
