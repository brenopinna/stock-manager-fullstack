interface CardProps {
  title: string
  value: number
}

export default function Card({ title, value }: CardProps) {
  let bigValue = value > 99999

  function formatNumber(value: number) {
    return new Intl.NumberFormat("pt-br").format(value)
  }

  function formatBigNumber(value: number) {
    const limit = 99999

    const newValue = formatNumber(value)

    if (value > limit) {
      return formatNumber(limit) + "+"
    }

    return newValue
  }

  return (
    <div className=" last:md:max-lg:col-span-3  bg-[#1C1A1D] min-h-[180px] shadow-md h-fit rounded-md px-8 py-4 grid">
      <p className="text-xl">{title}</p>
      <p
        className="text-center text-5xl font-semibold"
        title={bigValue ? formatNumber(value) : undefined}>
        {formatBigNumber(value)}
      </p>
    </div>
  )
}
