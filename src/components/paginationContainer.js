import Button from "./button";

export default function PaginationContainer({ pageInfo, setChangePage }) {
  return (
    <div className="flex justify-between mt-3">
      <Button
        label="Previous"
        disabled={!pageInfo?.hasPreviousPage}
        onClick={() => setChangePage([pageInfo?.startCursor, "PREV"])}
      />
      <Button
        label="Next"
        disabled={!pageInfo?.hasNextPage}
        onClick={() => setChangePage([pageInfo?.endCursor, "NEXT"])}
      />
    </div>
  );
}
