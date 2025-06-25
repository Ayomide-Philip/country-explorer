function Detail({ label, value }) {
  return (
    <p>
      <span className="text-gray-400 font-semibold">{label}:</span>{" "}
      <span className="text-white">{value || "N/A"}</span>
    </p>
  );
}

export default Detail;
