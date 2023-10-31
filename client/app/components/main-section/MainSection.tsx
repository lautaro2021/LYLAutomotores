import React from "react";

function MainSection({
  children,
  id,
  padding,
}: {
  children: React.ReactNode;
  id?: string;
  padding?: string;
}) {
  return (
    <section
      id={id}
      style={{
        padding: `${padding ? padding : "20vh 0"}`,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </section>
  );
}

export default MainSection;
