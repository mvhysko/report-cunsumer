import React from 'react';

interface ListProps<T> {
  items: readonly T[];
  renderItem: (item: T) => React.ReactNode
}

export function List<T>(props: ListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
}
