export type ListItem = {
  id: string;
  name: string;
};

interface ListItemProps {
  item: ListItem;
  onClick: any;
}

export const ListItem = ({ item, onClick }: ListItemProps) => {
  const { id, name } = item;

  return (
    <li id={id} className="list-item" key={id} onClick={onClick}>
      {name}
    </li>
  );
};
