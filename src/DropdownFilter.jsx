import React, { useState } from "react";

const DropdownFilter = () => {
  const [checkedItems, setCheckedItems] = useState({});

  // دسته‌بندی‌های مربوط به ساعت
  const categories = [
    {
      id: "brand",
      title: "Brand",
      items: [
        { id: 1, label: "Rolex" },
        { id: 2, label: "Omega" },
        { id: 3, label: "Tag Heuer" },
        { id: 4, label: "Casio" },
      ],
    },
    {
      id: "strap",
      title: "Strap Material",
      items: [
        { id: 5, label: "Leather" },
        { id: 6, label: "Metal" },
        { id: 7, label: "Rubber" },
        { id: 8, label: "Nylon" },
      ],
    },
    {
      id: "color",
      title: "Color",
      items: [
        { id: 9, label: "Silver" },
        { id: 10, label: "Gold" },
        { id: 11, label: "Black" },
        { id: 12, label: "Blue" },
      ],
    },
    {
      id: "style",
      title: "Style",
      items: [
        { id: 13, label: "Classic" },
        { id: 14, label: "Sport" },
        { id: 15, label: "Smartwatch" },
        { id: 16, label: "Luxury" },
      ],
    },
  ];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="dropdown-filter">
      <h3>Filter Watches</h3>

      {/* نمایش هر دسته */}
      {categories.map((category) => (
        <details key={category.id} open className="category-box">
          <summary className="summary">{category.title}</summary>
          <div className="scrollable-list">
            {category.items.map((item) => (
              <label
                key={item.id}
                className={`checkbox-label ${
                  checkedItems[item.id] ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[item.id] || false}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{item.label}</span>
              </label>
            ))}
          </div>
        </details>
      ))}

      {/* نمایش آیتم‌های انتخاب‌شده */}
      {Object.keys(checkedItems).filter((id) => checkedItems[id]).length > 0 && (
        <div className="selected-items">
          <h4>:Selected Filters</h4>
          <p>
            {categories
              .flatMap((cat) => cat.items)
              .filter((item) => checkedItems[item.id])
              .map((item) => item.label)
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;