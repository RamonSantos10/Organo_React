import "./Banner.css";

export const Banner = () => {
  // JSX - Como o React trabalha com a parte visual
  return (
    <header className="banner">
      <img
        src="./imagens/banner.png"
        alt="O banner principal da página do Organo"
      />
    </header>
  );
}