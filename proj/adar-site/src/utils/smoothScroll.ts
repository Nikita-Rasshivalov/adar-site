export const smoothScroll = (anchorId: string, offset: number): void => {
    const element = document.getElementById(anchorId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };