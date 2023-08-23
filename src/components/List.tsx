import { ListItem } from "./ListItem";

interface ListProps {
  items: any;
  onClick: any;
}

export const List = ({ items, onClick }: ListProps) => {
  return (
    <ul className="list">
      {items.map((item: any) => (
        <>
          <ListItem item={item} key={item.id} onClick={onClick} />
        </>
      ))}
    </ul>
  );
};
