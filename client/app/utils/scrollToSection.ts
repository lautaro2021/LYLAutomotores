const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  section?.scrollIntoView({ behavior: "instant" });
};

export default scrollToSection;
