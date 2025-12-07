// Initialize EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init("Ho4MVO7-JKKhPvUHL");

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.05)";
  }
});

// Product Image Gallery
function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainProductImage");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Update main image
  mainImage.src = thumbnail.src.replace("w=200&h=150", "w=800&h=600");

  // Update active thumbnail
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  thumbnail.classList.add("active");
}

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all feature cards, testimonials, etc.
document
  .querySelectorAll(".feature-card, .testimonial-card, .product-showcase")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Form Validation and Submission
const orderForm = document.getElementById("orderForm");
const submitBtn = document.getElementById("submitBtn");
const successModal = document.getElementById("successModal");

if (orderForm) {
  orderForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.classList.add("loading");

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      // zipcode and country removed
      notes: document.getElementById("notes").value,
      product: "CR-A1F Folding Treadmill Machine",
      price: "NPR 18,500",
      orderDate: new Date().toLocaleString(),
    };

    // Validate form
    if (!validateForm(formData)) {
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fas fa-lock"></i> Place Order - NPR 18,500';
      submitBtn.classList.remove("loading");
      return;
    }

    try {
      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
      const response = await emailjs.send(
        "service_yqs2khi",
        "template_2sbc8p5",
        {
          email: "nstraderportal@gmail.com",
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          shipping_address: `${formData.address}, ${formData.city}, ${formData.state}`,
          order_notes: formData.notes || "No special instructions",
          product_name: formData.product,
          product_price: formData.price,
          order_date: formData.orderDate,
        }
      );

      console.log("Email sent successfully:", response);

      // Show success modal
      showSuccessModal();

      // Reset form
      orderForm.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Sorry, there was an error processing your order. Please try again or contact us directly at nstraderportal@gmail.com"
      );
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fas fa-lock"></i> Place Order - NPR 18,500';
      submitBtn.classList.remove("loading");
    }
  });
}

// Form Validation
function validateForm(data) {
  // Check if all required fields are filled
  if (!data.name || !data.phone || !data.address || !data.city || !data.state) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate phone format (basic check)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(data.phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

// Show Success Modal
function showSuccessModal() {
  successModal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Confetti effect (optional)
  createConfetti();
}

// Close Modal
function closeModal() {
  successModal.classList.remove("active");
  document.body.style.overflow = "auto";

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Close modal when clicking outside
successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    closeModal();
  }
});

// Confetti Animation (Optional)
function createConfetti() {
  const confettiCount = 50;
  const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.opacity = "1";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;
    const xMovement = (Math.random() - 0.5) * 200;

    confetti.animate(
      [
        {
          transform: "translateY(0) translateX(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translateY(${
            window.innerHeight
          }px) translateX(${xMovement}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: duration * 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    );

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// Add to Cart Animation (for future expansion)
function addToCart() {
  // This function can be expanded if you want to add more products
  console.log("Product added to cart");
}

// Real-time form feedback
const formInputs = document.querySelectorAll(
  ".form-group input, .form-group textarea"
);
formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() !== "" && this.checkValidity()) {
      this.style.borderColor = "#10B981";
    } else if (this.value.trim() !== "" && !this.checkValidity()) {
      this.style.borderColor = "#EF4444";
    }
  });

  input.addEventListener("focus", function () {
    this.style.borderColor = "#4F46E5";
  });
});

// Countdown Timer (Optional - can be added to create urgency)
function startCountdown(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// Scroll to Top Button (Optional)
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #4F46E5;
  color: white;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "scale(1.1)";
});

scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "scale(1)";
});

// Console welcome message
console.log(
  "%c Welcome to WalkPro! ",
  "background: #4F46E5; color: white; font-size: 20px; padding: 10px;"
);
console.log(
  "%c Transform your health, one step at a time! ",
  "color: #10B981; font-size: 14px;"
);
