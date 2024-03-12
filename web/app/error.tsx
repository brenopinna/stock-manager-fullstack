"use client"

export default function Error() {
  function reloadPage() {
    window.location.reload()
  }

  return (
    <p className="font-extralight text-2xl">
      Houve um erro ao exibir os dados.{" "}
      <span
        onClick={reloadPage}
        className="underline hover:text-gray-300 transition-all cursor-pointer">
        Recarregue a página
      </span>{" "}
      e tente novamente.
    </p>
  )
}
