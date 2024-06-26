import { Category } from "../../types"
import "./style.css"
type SelectTypeProps = {
  category: Category
  setCategory: (category: Category) => void
}

const SelectType = ({ category, setCategory }: SelectTypeProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Category)
  }

  return (
    <div className="custom-select-wrapper">
      <select
        onChange={handleChange}
        value={category}
        className="custom-select"
      >
        <option value={Category.Trabalho}>Trabalho</option>
        <option value={Category.Casa}>Casa</option>
        <option value={Category.Estudo}>Estudo</option>
        <option value={Category.Pessoal}>Pessoal</option>
      </select>
    </div>
  )
}

export default SelectType
