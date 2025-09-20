// Sample script data
const scriptsData = [
  {
    id: 1,
    title: "Auto File Organizer",
    description: "Automatically organize files in your downloads folder by type and date",
    category: "automation",
    code: `import os\nimport shutil\nfrom datetime import datetime\n\ndef organize_files():\n    downloads = os.path.expanduser("~/Downloads")\n    for file in os.listdir(downloads):\n        # Organization logic here\n        pass`,
    downloads: 1247,
    rating: 4.8,
    stars: "★★★★★",
  },
  {
    id: 2,
    title: "System Monitor",
    description: "Monitor CPU, memory, and disk usage with real-time alerts",
    category: "system",
    code: `import psutil\nimport time\n\ndef monitor_system():\n    while True:\n        cpu = psutil.cpu_percent()\n        memory = psutil.virtual_memory().percent\n        print(f"CPU: {cpu}% | Memory: {memory}%")\n        time.sleep(1)`,
    downloads: 892,
    rating: 4.6,
    stars: "★★★★☆",
  },
  {
    id: 3,
    title: "Web Scraper Template",
    description: "Flexible web scraping template with error handling and rate limiting",
    category: "web",
    code: `import requests\nfrom bs4 import BeautifulSoup\nimport time\n\ndef scrape_website(url):\n    response = requests.get(url)\n    soup = BeautifulSoup(response.content, 'html.parser')\n    return soup.find_all('div', class_='content')`,
    downloads: 2156,
    rating: 4.9,
    stars: "★★★★★",
  },
  {
    id: 4,
    title: "Password Generator",
    description: "Generate secure passwords with customizable length and character sets",
    category: "utility",
    code: `import random\nimport string\n\ndef generate_password(length=12):\n    chars = string.ascii_letters + string.digits + "!@#$%^&*"\n    return ''.join(random.choice(chars) for _ in range(length))`,
    downloads: 3421,
    rating: 4.7,
    stars: "★★★★★",
  },
  {
    id: 5,
    title: "API Rate Limiter",
    description: "Implement rate limiting for API calls with exponential backoff",
    category: "web",
    code: `import time\nimport functools\n\ndef rate_limit(calls_per_second=1):\n    def decorator(func):\n        last_called = [0.0]\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            elapsed = time.time() - last_called[0]\n            left_to_wait = 1.0 / calls_per_second - elapsed\n            if left_to_wait > 0:\n                time.sleep(left_to_wait)\n            ret = func(*args, **kwargs)\n            last_called[0] = time.time()\n            return ret\n        return wrapper\n    return decorator`,
    downloads: 756,
    rating: 4.5,
    stars: "★★★★☆",
  },
  {
    id: 6,
    title: "Log File Analyzer",
    description: "Parse and analyze log files with pattern matching and statistics",
    category: "utility",
    code: `import re\nfrom collections import Counter\n\ndef analyze_logs(log_file):\n    with open(log_file, 'r') as f:\n        logs = f.readlines()\n    \n    error_pattern = r'ERROR.*'\n    errors = [re.search(error_pattern, log) for log in logs]\n    return Counter([e.group() for e in errors if e])`,
    downloads: 1089,
    rating: 4.4,
    stars: "★★★★☆",
  },
]

// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const scriptsContainer = document.getElementById("scripts-container")
const scriptSearch = document.getElementById("script-search")
const categoryBtns = document.querySelectorAll(".category-btn")
const faqItems = document.querySelectorAll(".faq-item")
const copyNotification = document.getElementById("copy-notification")

// Theme Management
let currentTheme = localStorage.getItem("theme") || "light"

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  const icon = themeToggle.querySelector("i")

  if (theme === "dark") {
    icon.className = "fas fa-sun"
  } else {
    icon.className = "fas fa-moon"
  }

  localStorage.setItem("theme", theme)
  currentTheme = theme
}

// Initialize theme
setTheme(currentTheme)

// Theme toggle event
themeToggle.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light"
  setTheme(newTheme)
})

// Navigation
function showSection(targetId) {
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
  })

  const targetSection = document.getElementById(targetId)
  const targetLink = document.querySelector(`[href="#${targetId}"]`)

  if (targetSection) targetSection.classList.add("active")
  if (targetLink) targetLink.classList.add("active")
}

// Navigation event listeners
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    showSection(targetId)

    // Close mobile menu
    navMenu.classList.remove("active")
  })
})

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Scripts functionality
function createScriptCard(script) {
  return `
        <div class="script-card" data-category="${script.category}">
            <div class="script-header">
                <div>
                    <h3 class="script-title">${script.title}</h3>
                    <span class="script-category">${script.category}</span>
                </div>
            </div>
            <p class="script-description">${script.description}</p>
            <div class="script-code">
                <button class="copy-btn" onclick="copyScript('${script.id}')">
                    <i class="fas fa-copy"></i>
                </button>
                <pre><code>${script.code}</code></pre>
            </div>
            <div class="script-stats">
                <div class="script-downloads">
                    <i class="fas fa-download"></i>
                    <span>${script.downloads.toLocaleString()}</span>
                </div>
                <div class="script-rating">
                    <span class="stars">${script.stars}</span>
                    <span>${script.rating}</span>
                </div>
            </div>
        </div>
    `
}

function renderScripts(scripts = scriptsData) {
  scriptsContainer.innerHTML = scripts.map(createScriptCard).join("")
}

function filterScripts(category = "all", searchTerm = "") {
  let filtered = scriptsData

  if (category !== "all") {
    filtered = filtered.filter((script) => script.category === category)
  }

  if (searchTerm) {
    filtered = filtered.filter(
      (script) =>
        script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  renderScripts(filtered)
}

// Copy script functionality
function copyScript(scriptId) {
  const script = scriptsData.find((s) => s.id == scriptId)
  if (script) {
    navigator.clipboard
      .writeText(script.code)
      .then(() => {
        showCopyNotification()
      })
      .catch((err) => {
        console.error("Failed to copy script:", err)
      })
  }
}

function showCopyNotification() {
  copyNotification.classList.add("show")
  setTimeout(() => {
    copyNotification.classList.remove("show")
  }, 3000)
}

// Search functionality
scriptSearch.addEventListener("input", (e) => {
  const searchTerm = e.target.value
  const activeCategory = document.querySelector(".category-btn.active").dataset.category
  filterScripts(activeCategory, searchTerm)
})

// Category filtering
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    const category = btn.dataset.category
    const searchTerm = scriptSearch.value
    filterScripts(category, searchTerm)
  })
})

// FAQ functionality
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")
  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    // Close all FAQ items
    faqItems.forEach((faq) => faq.classList.remove("active"))

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active")
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Initialize scripts on page load
document.addEventListener("DOMContentLoaded", () => {
  renderScripts()

  // Add some interactive animations
  const cards = document.querySelectorAll(".glass-card, .script-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Add parallax effect to floating cards
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelectorAll(".floating-card")

  parallax.forEach((card, index) => {
    const speed = 0.5 + index * 0.1
    card.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add glow effect to buttons on mouse move
document.addEventListener("mousemove", (e) => {
  const glowBtns = document.querySelectorAll(".glow-btn")

  glowBtns.forEach((btn) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    btn.style.setProperty("--mouse-x", x + "px")
    btn.style.setProperty("--mouse-y", y + "px")
  })
})

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 50)
  }
})

// Add window resize handler for responsive adjustments
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
  }
})

// Performance optimization: Debounce search
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to search
const debouncedSearch = debounce((searchTerm) => {
  const activeCategory = document.querySelector(".category-btn.active").dataset.category
  filterScripts(activeCategory, searchTerm)
}, 300)

scriptSearch.addEventListener("input", (e) => {
  debouncedSearch(e.target.value)
})
