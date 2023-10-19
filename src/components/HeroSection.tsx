import { logo } from "../assets"

const HeroSection = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="w-full mb-10 pt-3 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button type="button" onClick={() => window.open('https://github.com/GeorgeGento/ai-summarizer')} className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Sumz,
        an open-source article summarizer that transforms lengthy
        articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default HeroSection