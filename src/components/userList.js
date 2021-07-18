import Row from "./row";

export default function UserList({ data }) {
  if (!data) return null;
  return (
    <div className="divide-y divide-fuchsia-300">
      {data.search.edges.map((edge) => {
        return <Row user={edge.node} key={edge.node.id} />;
      })}
    </div>
  );
}
