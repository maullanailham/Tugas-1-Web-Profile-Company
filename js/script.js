// script.js - interactions: slider, dark mode toggle, scroll to top, stats animation, form validation, shop cart
$(document).ready(function(){
  // Simple slider (rotate through .slide elements)
  let idx = 0;
  const slides = $(".slide");
  function showSlide(i){
    slides.hide();
    $(slides[i]).fadeIn(600);
  }
  if (slides.length > 0){
    showSlide(0);
    setInterval(function(){
      idx = (idx + 1) % slides.length;
      showSlide(idx);
    }, 3500);
  }

  // Enhanced Dark mode toggle with smooth transitions
  (function(){
    const $root = $("html");
    const $btn = $("#darkToggle");
    const storageKey = "petpals_dark";
    
    // Add transition class to body on load
    $("body").addClass("theme-transition");
    
    function applyDarkState(enabled, persist = true) {
      // Add transition class before changing theme
      $("body").addClass("theme-transition");
      
      if (enabled) {
        $root.addClass("dark");
        $btn.attr({
          "aria-pressed": "true",
          "aria-label": "Switch to light mode"
        });
      } else {
        $root.removeClass("dark");
        $btn.attr({
          "aria-pressed": "false",
          "aria-label": "Switch to dark mode"
        });
      }
      
      if (persist) {
        localStorage.setItem(storageKey, enabled ? "1" : "0");
      }
      
      // Remove transition class after animation completes
      setTimeout(() => {
        $("body").removeClass("theme-transition");
      }, 300);
    }

    // Check system preference
    function getSystemPreference() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Initialize theme
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "1" || savedTheme === "0") {
      applyDarkState(savedTheme === "1", false);
    } else {
      applyDarkState(getSystemPreference(), false);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (localStorage.getItem(storageKey) === null) {
            applyDarkState(e.matches, false);
          }
        });
    }

    // Toggle button handler
    if ($btn.length) {
      $btn.off("click.darkMode").on("click.darkMode", function() {
        const willBeDark = !$root.hasClass("dark");
        applyDarkState(willBeDark);
        
        // Add animation class
        $(this).find(".dark-mode-icon").addClass("animate-spin");
        setTimeout(() => {
          $(this).find(".dark-mode-icon").removeClass("animate-spin");
        }, 500);
      });
    }
  })();

  // Scroll-to-top button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) $("#scrollTop").fadeIn();
    else $("#scrollTop").fadeOut();
  });
  $("#scrollTop").click(function(){ $("html,body").animate({scrollTop:0},600); });

  // Stats count up
  function countUp(el, target, duration){
    let start = 0;
    const step = Math.ceil(target / (duration/50));
    const id = setInterval(function(){
      start += step;
      if (start >= target){ start = target; clearInterval(id); }
      $(el).text(start);
    }, 50);
  }
  let statsSeen = false;
  $(window).on('scroll', function(){
    const el = $("#stats");
    if (!statsSeen && el.length && $(window).scrollTop() + $(window).height() > el.offset().top + 100){
      statsSeen = true;
      countUp("#stat1", 1200, 1200);
      countUp("#stat2", 850, 1200);
      countUp("#stat3", 3200, 1200);
    }
  });

  // Contact form validation + fake loading
  $("#contactForm").submit(function(e){
    e.preventDefault();
    let valid = true;
    $(this).find("input, textarea").each(function(){
      if (!$(this).val()){ valid=false; $(this).addClass("border-red-500"); }
      else $(this).removeClass("border-red-500");
    });
    if (!valid){
      // show inline message if element exists
      if ($("#formMsg").length) $("#formMsg").removeClass("hidden").addClass("bg-red-100 text-red-700").text("Mohon lengkapi semua field.");
      return;
    }
    // simulate loading
    const $submit = $(this).find("button[type='submit']");
    if ($submit.length){
      $submit.prop("disabled", true).text("Mengirim...");
    }
    setTimeout(function(){
      if ($submit.length) $submit.prop("disabled", false).text("Kirim Pesan");
      $("#contactAlert").removeClass("hidden");
      $("#contactForm")[0].reset();
      setTimeout(()=> $("#contactAlert").addClass("hidden"), 4000);
    }, 900);
  });

  /* ===========================
     Shop / Cart functionality
     =========================== */
  const CART_KEY = "pp_cart_v1";
  let cart = JSON.parse(localStorage.getItem(CART_KEY) || "{}"); // object: id -> {id,name,price,qty}

  function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  function formatRp(n){
    return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function renderCartCount(){
    const count = Object.values(cart).reduce((s,i)=> s + i.qty, 0);
    $("#cartCount").text(count);
  }
  function renderCartModal(){
    const $list = $("#cartItems").empty();
    let total = 0;
    if (Object.keys(cart).length === 0){
      $list.append('<div class="text-sm text-gray-500">Keranjang kosong.</div>');
    } else {
      Object.values(cart).forEach(item => {
        total += item.price * item.qty;
        const $row = $(`
          <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-2 rounded">
            <div>
              <div class="font-semibold">${item.name}</div>
              <div class="text-sm text-gray-500">${formatRp(item.price)} x ${item.qty}</div>
            </div>
            <div class="flex items-center gap-2">
              <button class="cart-decrease px-2 py-1 bg-gray-100 rounded" data-id="${item.id}">-</button>
              <div class="px-2">${item.qty}</div>
              <button class="cart-increase px-2 py-1 bg-gray-100 rounded" data-id="${item.id}">+</button>
              <button class="cart-remove px-2 py-1 text-red-600" data-id="${item.id}">Hapus</button>
            </div>
          </div>
        `);
        $list.append($row);
      });
    }
    $("#cartTotal").text(formatRp(total));
  }

  function addToCartFromCard($card){
    const id = $card.data("id");
    const name = $card.data("name");
    const price = Number($card.data("price")) || 0;
    if (!cart[id]) cart[id] = { id, name, price, qty: 0 };
    cart[id].qty += 1;
    saveCart();
    renderCartCount();
  }

  // initial render
  renderCartCount();

  // add-to-cart handler
  $(document).on("click", ".add-to-cart", function(e){
    const $card = $(this).closest(".product-card");
    addToCartFromCard($card);
    // small feedback
    $(this).text("✓ Ditambahkan").prop("disabled", true);
    setTimeout(()=> $(this).text("Tambah").prop("disabled", false), 900);
  });

  // cart button open modal
  $("#cartBtn").on("click", function(){
    $("#cartModal").removeClass("hidden").addClass("flex");
    renderCartModal();
  });
  $("#cartOverlay, #closeCart").on("click", function(){
    $("#cartModal").addClass("hidden").removeClass("flex");
  });

  // delegate cart actions (increase, decrease, remove)
  $(document).on("click", ".cart-increase", function(){
    const id = $(this).data("id");
    if (cart[id]) { cart[id].qty += 1; saveCart(); renderCartModal(); renderCartCount(); }
  });
  $(document).on("click", ".cart-decrease", function(){
    const id = $(this).data("id");
    if (cart[id]) { cart[id].qty = Math.max(1, cart[id].qty -1); saveCart(); renderCartModal(); renderCartCount(); }
  });
  $(document).on("click", ".cart-remove", function(){
    const id = $(this).data("id");
    if (cart[id]) { delete cart[id]; saveCart(); renderCartModal(); renderCartCount(); }
  });

  $("#clearCartBtn").on("click", function(){
    cart = {}; saveCart(); renderCartModal(); renderCartCount();
  });

  $("#checkoutBtn").on("click", function(){
    // simulate checkout
    if (Object.keys(cart).length === 0){
      alert("Keranjang kosong.");
      return;
    }
    $(this).prop("disabled", true).text("Memproses...");
    setTimeout(() => {
      cart = {}; saveCart(); renderCartModal(); renderCartCount();
      $(this).prop("disabled", false).text("Checkout");
      alert("Terima kasih! Pesanan Anda telah diproses (simulasi).");
      $("#cartModal").addClass("hidden").removeClass("flex");
    }, 1200);
  });

  // product category filter
  $(".shop-filter").on("click", function(){
    const cat = $(this).data("cat");
    if (cat === "all") {
      $(".product-card").show();
    } else {
      $(".product-card").each(function(){
        $(this).toggle($(this).data("category") === cat);
      });
    }
    // active state UI
    $(".shop-filter").removeClass("ring-2 ring-emerald-300");
    $(this).addClass("ring-2 ring-emerald-300");
  });

  // accessibility: close cart on ESC
  $(document).on("keydown", function(e){
    if (e.key === "Escape") {
      $("#cartModal").addClass("hidden").removeClass("flex");
    }
  });

  // ensure cart count rendered if storage had items on load
  renderCartCount();
});
