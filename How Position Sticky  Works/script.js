const homepodSection = document.querySelector(".homepod-section");
const sectionHeight = homepodSection.getBoundingClientRect().height;
const html = document.documentElement;

document.addEventListener("scroll", (e) => {
  let scrolled = html.scrollTop / (sectionHeight - html.clientHeight);
  console.log(`scrolled: ${scrolled}`);

  homepodSection.style.setProperty(
    "--part-1",
    calculateOpacity(0.05, 0.15, scrolled)
  );
  homepodSection.style.setProperty(
    "--part-2",
    calculateOpacity(0.19, 0.23, scrolled)
  );
  homepodSection.style.setProperty(
    "--part-3",
    calculateOpacity(0.35, 0.4, scrolled)
  );
  homepodSection.style.setProperty(
    "--part-4",
    calculateOpacity(0.58, 0.63, scrolled)
  );
  homepodSection.style.setProperty(
    "--ending",
    calculateOpacity(0.8, 0.85, scrolled)
  );
});

function calculateOpacity(start, end, percent) {
  if (percent - start < 0) {
    return 0;
  }

  if (percent - end > 0) {
    return 1;
  }

  return (percent - start) / (end - start);
}
