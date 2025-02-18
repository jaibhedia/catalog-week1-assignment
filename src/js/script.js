document.addEventListener('DOMContentLoaded', () => {
  // NAVIGATION TOGGLE
  const navEl = document.querySelector('.navigation');
  const hamburgerToggleEl = document.querySelector('.navigation__toggle-menu');
  if (hamburgerToggleEl && navEl) {
    hamburgerToggleEl.addEventListener('click', () => {
      navEl.classList.toggle('navigation--toggle-active');
    });
  }

// TEAM SLIDER FUNCTIONALITY
const teamSliderWrapper = document.querySelector('#team .slider-wrapper');
const teamNextButton = document.querySelector('.team__slider-button');
let teamCurrentScroll = 0;
const teamCardWidth = document.querySelector('#team .team__member-card')?.offsetWidth || 0;

if (teamNextButton && teamSliderWrapper && teamCardWidth > 0) {
  teamNextButton.addEventListener('click', () => {
    const nextScroll = teamCurrentScroll + teamCardWidth;
    if (nextScroll >= teamSliderWrapper.scrollWidth - teamSliderWrapper.clientWidth) {
      // Reset to beginning if the next scroll position exceeds the maximum scrollable width
      teamCurrentScroll = 0;
      teamSliderWrapper.scrollTo({ left: teamCurrentScroll, behavior: 'smooth' });
    } else {
      teamSliderWrapper.scrollTo({ left: nextScroll, behavior: 'smooth' });
      teamCurrentScroll = nextScroll;
    }
  });
}

  // REVIEW SLIDER FUNCTIONALITY
  const reviewSliderWrapper = document.querySelector('#review .slider-wrapper');
  const reviewNextButton = document.querySelector('.review__slider-btns button[aria-label="Slide forward"]');
  const reviewPrevButton = document.querySelector('.review__slider-btns button[aria-label="Slide back"]');
  let reviewCurrentScroll = 0;
  const reviewCardWidth = document.querySelector('#review .review__card')?.offsetWidth || 0;
  if (reviewCardWidth === 0) {
    console.error("Review card width is zero. Check if cards are rendered correctly.");
  }
  if (reviewSliderWrapper && reviewNextButton && reviewPrevButton && reviewCardWidth > 0) {
    reviewNextButton.addEventListener('click', () => {
      const nextScroll = reviewCurrentScroll + reviewCardWidth;
      if (nextScroll >= reviewSliderWrapper.scrollWidth - reviewSliderWrapper.clientWidth) {
        reviewCurrentScroll = 0;
        reviewSliderWrapper.scrollTo({ left: reviewCurrentScroll, behavior: 'smooth' });
      } else {
        reviewSliderWrapper.scrollTo({ left: nextScroll, behavior: 'smooth' });
        reviewCurrentScroll = nextScroll;
      }
    });

    reviewPrevButton.addEventListener('click', () => {
      const prevScroll = reviewCurrentScroll - reviewCardWidth;
      if (prevScroll < 0) {
        reviewCurrentScroll = reviewSliderWrapper.scrollWidth - reviewSliderWrapper.clientWidth;
        reviewSliderWrapper.scrollTo({ left: reviewCurrentScroll, behavior: 'smooth' });
      } else {
        reviewSliderWrapper.scrollTo({ left: prevScroll, behavior: 'smooth' });
        reviewCurrentScroll = prevScroll;
      }
    });
  }
});
