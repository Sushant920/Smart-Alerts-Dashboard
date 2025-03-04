export default function AlertCard({ data }) {
    return (
      <div className="p-4 border rounded-lg bg-white shadow-md">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <p className="text-gray-600">Price: ${data.price}</p>
      </div>
    );
  }
  