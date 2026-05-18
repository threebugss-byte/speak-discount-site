const REFERRAL_LINKS = {
  premium: "https://app.speak.com/kr-ko/i/XAZZHC",
  plus: "https://app.usespeak.com/kr-ko/sale/kr-affiliate/?ref=ry",
};

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  const useFallback = () => {
    image.src = image.dataset.fallback;
  };

  image.addEventListener("error", useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) {
    useFallback();
  }
});

document.querySelectorAll(".plan-link").forEach((link) => {
  const referralLink = REFERRAL_LINKS[link.dataset.plan];
  if (referralLink) {
    link.href = referralLink;
  }
});
