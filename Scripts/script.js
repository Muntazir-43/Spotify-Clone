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
    menuIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/Cross.svg"; // use your close icon
    menuToggle.classList = "cross_icon_round";
    menuIcon.alt = "Close Menu";
  } else {
    links.classList.remove("show");
    menuIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/menu.svg"; // back to hamburger
    menuToggle.classList.remove("cross_icon_round");
    menuIcon.alt = "Open Menu";
  }
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (menuOpen && !menuToggle.contains(event.target) && !links.contains(event.target)) {
    links.classList.remove("show");
    menuIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/menu.svg";
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
        document.getElementById("play").src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/play.svg"; 
      }
    });
  });
});

// Play bar Functionality code -------------------

let current_noha = new Audio();
let currentIndex = 0;
let folder = "";
let nohas = [];
let Artist = "";

// Load JSON data
async function loadNohasFromJson(folder) {
  const response = await fetch("Assets/Nohas.json");
  const data = await response.json();

  if (!data[folder]) return { audios: [], artist: "" };
  return {
    audios: data[folder].audios || [],
    artist: data[folder].artist || folder
  };
}

// Format mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// View toggling
function toggleNohaView() {
  document.querySelector(".noha_list").style.display = "block";
  document.querySelector(".playbar").style.display = "flex";
  const librarySection = document.querySelector(".library_playlist_podcast");
  if (librarySection) librarySection.style.display = "none";
  localStorage.setItem("currentView", "noha");
}

function showDefaultView() {
  document.querySelector(".noha_list").style.display = "none";
  document.querySelector(".playbar").style.display = "none";
  const librarySection = document.querySelector(".library_playlist_podcast");
  if (librarySection) librarySection.style.display = "block";
  localStorage.setItem("currentView", "default");
}

// Main play function
function playnoha(nohas, nohaUrl, pause = false) {
  currentIndex = nohas.indexOf(nohaUrl);
  current_noha.src = nohaUrl;

  document.querySelector(".noha_time_update").innerHTML = "00:00";
  document.querySelector(".noha_total_duration").innerHTML = "00:00";
  document.querySelector(".noha_playbar_info").innerHTML = decodeURI(nohaUrl.split("/").pop());

  const play = document.getElementById("play");

  current_noha.removeEventListener("loadedmetadata", updateDuration);
  function updateDuration() {
    document.querySelector(".noha_total_duration").innerHTML = formatTime(current_noha.duration);
  }
  current_noha.addEventListener("loadedmetadata", updateDuration);

  const storedVolume = parseFloat(localStorage.getItem("lastVolume")) || 0.5;
  current_noha.volume = storedVolume;
  updateVolumeUI(storedVolume);

  if (!pause) {
    current_noha.play();
    play.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/pause.svg";
  }

  localStorage.setItem("lastNohaUrl", nohaUrl);
}

function updateVolumeUI(volume) {
  const volumeFilling = document.querySelector(".volume_seekbar_filling");
  const volumeCircle = document.querySelector(".volume_circle");
  const volumeIcon = document.getElementById("volume_icon");

  volumeFilling.style.width = `${volume * 100}%`;
  volumeCircle.style.left = `${volume * 100}%`;

  if (volume === 0) volumeIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/volume_cross.svg";
  else if (volume <= 0.5) volumeIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/volume_half.svg";
  else volumeIcon.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/volume_full.svg";
}

function renderNohaList(nohas, artist) {
  const list = document.querySelector(".noha_list");
  list.innerHTML = "";

  nohas.forEach(url => {
    const name = decodeURI(url.split("/").pop());
    list.innerHTML += `
      <div class="noha flex" data-url="${url}">
        <div class="noha_detail flex">
          <img src="https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/music-note.svg" alt />
          <div class="noha_info">
            <div>${name}</div>
            <div>${artist}</div>
          </div>
        </div>
        <div class="noha_playnow flex">
          <div>Play Now</div>
          <img src="https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/play.svg" alt />
        </div>
      </div>
    `;
  });

  document.querySelectorAll(".noha").forEach(e => {
    e.addEventListener("click", () => {
      const selected = e.dataset.url;
      playnoha(nohas, selected, false);
    });
  });
}

async function switchFolder(newFolder) {
  folder = newFolder;
  localStorage.setItem("currentFolder", folder);

  const result = await loadNohasFromJson(folder);
  nohas = result.audios;
  Artist = result.artist;

  renderNohaList(nohas, Artist);
  playnoha(nohas, nohas[0], false);
  toggleNohaView();
}

function setupClickHandlers() {
  ["cart", "profile", "album", "playlist"].forEach(type => {
    document.querySelectorAll(`.${type}`).forEach(el => {
      el.addEventListener("click", async () => {
        const h4 = el.querySelector("h4");
        if (!h4) return;
        await switchFolder(h4.innerText.trim());
      });
    });
  });
}

function setupPlaybackControls() {
  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (current_noha.paused) {
      current_noha.play();
      play.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/pause.svg";
    } else {
      current_noha.pause();
      play.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/play.svg";
    }
  });

  document.getElementById("previous").addEventListener("click", () => {
    if (current_noha.currentTime > 3 || currentIndex === 0) {
      current_noha.currentTime = 0;
    } else {
      currentIndex = (currentIndex - 1 + nohas.length) % nohas.length;
      playnoha(nohas, nohas[currentIndex], false);
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < nohas.length - 1) {
      currentIndex++;
      playnoha(nohas, nohas[currentIndex], false);
    } else {
      current_noha.pause();
      current_noha.currentTime = 0;
      play.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/play.svg";
    }
  });

  current_noha.addEventListener("timeupdate", () => {
    document.querySelector(".noha_time_update").innerHTML = formatTime(current_noha.currentTime);
    const percent = (current_noha.currentTime / current_noha.duration) * 100;
    document.querySelector(".seekbar_filling").style.width = `${percent}%`;
    document.querySelector(".circle").style.left = `${percent}%`;
  });

  document.querySelector(".seekbar").addEventListener("click", e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    current_noha.currentTime = percent * current_noha.duration;
  });

  current_noha.addEventListener("ended", () => {
    if (currentIndex < nohas.length - 1) {
      currentIndex++;
      playnoha(nohas, nohas[currentIndex], false);
    } else {
      document.getElementById("play").src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/play.svg";
    }
  });
}

function setupVolumeControls() {
  const volumeSeekbar = document.querySelector(".volume_seekbar");
  const volumeIcon = document.getElementById("volume_icon");
  let lastVolume = parseFloat(localStorage.getItem("lastVolume")) || 0.5;

  volumeSeekbar.addEventListener("click", e => {
    const rect = volumeSeekbar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const volume = Math.max(0, Math.min(percent, 1));

    current_noha.volume = volume;
    localStorage.setItem("lastVolume", volume);
    updateVolumeUI(volume);
  });

  volumeIcon.addEventListener("click", () => {
    if (current_noha.volume > 0) {
      lastVolume = current_noha.volume;
      current_noha.volume = 0;
    } else {
      current_noha.volume = lastVolume;
    }
    updateVolumeUI(current_noha.volume);
    localStorage.setItem("lastVolume", current_noha.volume);
  });
}

function setupLibraryIconToggle() {
  let isLibraryOpen = false;
  const library_icon = document.querySelector(".library_icon");
  const library_svg = document.getElementById("library_svg");
  const library_section = document.querySelector(".library_section");
  const playbar = document.querySelector(".playbar");

  library_icon.addEventListener("click", () => {
    if (!isLibraryOpen) {
      library_svg.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/Cross.svg";
      library_svg.style.width = "18px";
      library_section.style.left = "0%";
      if (window.innerWidth < 599) playbar.style.bottom = "12vh";
    } else {
      library_svg.src = "https://raw.githubusercontent.com/Muntazir-43/Spotify-Clone/main/Assets/SVG/library.svg";
      library_svg.style.width = "26px";
      library_section.style.left = "-100%";
      if (window.innerWidth < 599) playbar.style.bottom = "11vh";
    }
    isLibraryOpen = !isLibraryOpen;
  });
}

// Main entry
async function main() {
  const navigationType = performance.getEntriesByType("navigation")[0]?.type;
  const savedView = localStorage.getItem("currentView");
  folder = localStorage.getItem("currentFolder") || "Ajmal Zakiri";

  if (navigationType === "reload") {
    savedView === "noha" ? toggleNohaView() : showDefaultView();
  } else {
    showDefaultView();
  }

  const result = await loadNohasFromJson(folder);
  nohas = result.audios;
  Artist = result.artist;

  const last = localStorage.getItem("lastNohaUrl");
  const initial = (last && nohas.includes(last)) ? last : nohas[0];
  renderNohaList(nohas, Artist);
  playnoha(nohas, initial, true);

  setupClickHandlers();
  setupPlaybackControls();
  setupVolumeControls();
  setupLibraryIconToggle();
}

main();

