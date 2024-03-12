export default function Footer() {
  return (
    <footer className="px-8 py-4 mt-24 flex justify-between">
      <span>Feito com NextJS + TailwindCSS! 🌊</span>
      <span>
        Desenvolvido por{" "}
        <a
          href="https://github.com/brenopinna"
          className="hover:text-gray-300 transition-all underline"
          target="_blank">
          Breno Pinna
        </a>
        👾
      </span>
    </footer>
  )
}
