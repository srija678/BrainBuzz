function CategorySelect({ onSelect, onBack }) {
  const categories = [
    { id: "space", name: "Space & Universe", emoji: "🚀" },
    { id: "mythology", name: "Mythology", emoji: "⚡" },
    { id: "inventions", name: "Inventions & Discoveries", emoji: "💡" },
  ];

  return (
    <div className="category-select">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2>Choose a Category</h2>
      <p>Select a category to begin your quiz</p>
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => onSelect(cat.id)}
          >
            <span className="category-emoji">{cat.emoji}</span>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelect;
