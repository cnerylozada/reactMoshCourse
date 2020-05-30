import React from 'react';
import './list-group.css';

const ListGroup =
  ({ items, valueProperty, textProperty, onFilter, currentGenderIndex }) => {
    const itemStyle = "list-group-item list-group-item-action";
    return (
      <div className="list-group">
        {items.map((_, i) => <a key={_[valueProperty]}
          onClick={() => onFilter(_.name, i)}
          className={currentGenderIndex === i ? itemStyle + " active" : itemStyle}>
          {_[textProperty]}
        </a>)}
      </div>
    );
  }

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
}
export default ListGroup;