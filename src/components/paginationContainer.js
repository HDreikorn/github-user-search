import Button from "./button";

export default function PaginationContainer({ hasPrevious, hasNext }) {
  return (
    <div className="flex justify-between mt-3">
      <Button label="Previous" disabled={!hasPrevious} />
      <Button label="Next" disabled={!hasNext} />
    </div>
  );
}
