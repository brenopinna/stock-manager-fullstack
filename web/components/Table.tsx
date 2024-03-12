import ButtonDetails from "./Button/ButtonDetails"
import ButtonUpdate from "./Button/ButtonUpdate"
import ButtonDelete from "./Button/ButtonDelete"

interface TableProps {
  columns: string[]
  products: { ID: string; data: [string, ...(string | number)[]] }[]
  actions?: ("update" | "delete")[]
}

export default function Table({ columns, products, actions }: TableProps) {
  function formatProductName(name: string) {
    if (name.length > 20) {
      return name.slice(0, 17) + "..."
    }
    return name
  }

  return (
    <div>
      <table className="w-full">
        <thead className="bg-[#1C1A1D] shadow-md px-6 py-3">
          <tr className="text-left">
            {columns.map((column, index) => (
              <th key={index} className="p-5">
                {column}
              </th>
            ))}
            <th className="p-5">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ID}>
              {product.data.map((data, index) => {
                data = data.toString()
                return (
                  <td
                    title={data.length > 20 ? data : undefined}
                    className="p-5"
                    key={`${data}${product.ID}`}>
                    {index === 0 ? formatProductName(data) : data}
                  </td>
                )
              })}
              <td className="p-5">
                <div className="flex gap-4">
                  <ButtonDetails id={product.ID} />
                  {actions?.includes("update") && <ButtonUpdate id={product.ID} />}
                  {actions?.includes("delete") && (
                    <ButtonDelete name={product.data[0]} id={product.ID} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
