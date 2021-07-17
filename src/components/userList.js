import Row from "./row";

export default function UserList({ data }) {
  if (!data) return null;
  return (
    <div className="bg-white shadow-md rounded px-4 py-4 pt-4 mt-8">
      {data.search.edges.map((edge) => {
        return <Row user={edge.node} key={edge.node.id} />;
      })}
    </div>
  );
}
