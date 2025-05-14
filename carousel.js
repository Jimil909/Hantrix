document.addEventListener('alpine:init', () => {
  Alpine.data('carousel', () => ({
    currentIndex: 0,
    slides: [
      {
        title: 'Example headline.',
        description: 'Some representative placeholder content for the first slide of the carousel.',
        buttonText: 'Sign up today',
        buttonLink: '#'
      },
      {
        title: 'Another example headline.',
        description: 'Some representative placeholder content for the second slide of the carousel.',
        buttonText: 'Learn more',
        buttonLink: '#'
      },
      {
        title: 'One more for good measure.',
        description: 'Some representative placeholder content for the third slide of this carousel.',
        buttonText: 'Browse gallery',
        buttonLink: '#'
      }
    ],
    autoplayInterval: null,

    init() {
      this.startAutoplay();
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.next();
      }, 5000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  }));
});